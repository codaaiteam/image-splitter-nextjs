import sharp from "sharp";

export default async function imageProcessingHandler(req, res) {
  try {
    const imageData = req.body.img.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(imageData, "base64");
    let { imgY, imgX, isGrid, columns } = req.body.properties;
    let expectedColumns = columns;
    let expectedRows = Math.round(imgY / (imgX / columns));
    let sideLength = Math.min(imgY / expectedRows, imgX / expectedColumns);
    let actualRows = isGrid ? imgY / sideLength : 1;
    let actualColumns = imgX / sideLength;
    const chunksBase64 = await processImage(buffer, actualColumns, actualRows);
    res
      .status(200)
      .json({ message: "Chunks created and saved...", chunksBase64 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing image" });
  }
}

async function processImage(buffer, numColumns, numRows) {
  const metadata = await sharp(buffer).metadata();
  const { width, height } = metadata;
  const chunkWidth = Math.floor(width / numColumns);
  const chunkHeight = Math.floor(height / numRows);

  const chunksBase64 = [];

  const promises = [];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numColumns; col++) {
      const startX = col * chunkWidth;
      const startY = row * chunkHeight;

      const promise = sharp(buffer)
        .extract({
          left: startX,
          top: startY,
          width: chunkWidth,
          height: chunkHeight,
        })
        .toBuffer()
        .then((chunkBuffer) => {
          const base64Data = `data:image/png;base64,${chunkBuffer.toString(
            "base64"
          )}`;
          chunksBase64.push({ row, col, base64Data });
        })
        .catch((err) => {
          console.error("Error extracting chunk:", err);
        });

      promises.push(promise);
    }
  }

  try {
    await Promise.all(promises);
  } catch (error) {
    console.error("Error processing promises:", error);
  }

  chunksBase64.sort((a, b) =>
    a.row === b.row ? a.col - b.col : a.row - b.row
  );

  return chunksBase64;
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
