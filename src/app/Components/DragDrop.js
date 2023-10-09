import React, { useState, useRef, useEffect } from "react";
import styles from "./dragdrop.module.css";
import Image from "next/image";

function DragDrop() {
  const maxColumns = 10;

  const [selectedImage, setSelectedImage] = useState(null);
  const [columns, setColumns] = useState(3);
  const [isGrid, setIsGrid] = useState(true);

  const [size, setSize] = useState(0);

  const image = useRef(null);

  useEffect(() => {
    setSize(image.current?.clientHeight);
  }, [selectedImage]);

  function getSize() {
    const { clientHeight: newHeightSize, clientWidth: newWidthSize } =
      image.current || {};
    if (!newHeightSize || !newWidthSize) return "";
    const sizeX = (columns / (columns * columns)) * 100;
    const sizeY = (newWidthSize / columns / newHeightSize) * 100;
    return `${sizeX}% ${isGrid ? sizeY : "100"}%`;
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${styles.uploadSection} ${selectedImage && styles.active}`}
    >
      <div
        id="upload"
        className={styles.dragDropUpload}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drop your image here or click below to upload</p>

        {selectedImage && (
          <div className={styles.imageContainer}>
            <Image
              src={selectedImage}
              alt="Uploaded"
              height={200}
              width={200}
              ref={image}
            />
            <div
              style={{ backgroundSize: `${getSize()}` }}
              className={styles.gridPreview}
            ></div>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileInput}
        />
        <button
          onClick={() => document.querySelector('input[type="file"]').click()}
        >
          Select Image
        </button>
      </div>
      <div className={styles.uploaded}>
        <div className={styles.left}>
          <h3>Columns</h3>
          <p>Select 3 columns for a standard Instagram grid</p>
          <div className={styles.increaseColumns}>
            <button
              onClick={(_) => {
                if (columns <= 1) return;
                setColumns(columns - 1);
              }}
            >
              -
            </button>
            <p>{columns}</p>
            <button
              onClick={(_) => {
                if (columns >= maxColumns) return;
                setColumns(columns + 1);
              }}
            >
              +
            </button>
          </div>
          <h3>Image Cut</h3>
          <p>
            Select if you want to cut the image into grid posts (square) or into
            carousel posts.
          </p>
          <div className={styles.selectType}>
            <p
              onClick={(_) => {
                setIsGrid(true);
              }}
              className={`${isGrid && styles.selectedType}`}
            >
              Grid
            </p>
            <p
              onClick={(_) => {
                setIsGrid(false);
              }}
              className={`${!isGrid && styles.selectedType}`}
            >
              Carousel
            </p>
          </div>
          <button>Split Image</button>
        </div>
        <div className={styles.right}>
          <p>Your split posts will be here</p>
        </div>
      </div>
    </div>
  );
}

export default DragDrop;
