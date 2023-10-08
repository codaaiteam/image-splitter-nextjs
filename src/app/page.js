'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Card from "./Components/Card";
import QuestionFAQ from "./Components/QuestionFAQ";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1>The Online Image Splitter for your Instagram Grids</h1>
          <p>Free Instagram Grid, Carousel & Puzzle Maker</p>
          <button onClick={(e) => {
            let element = document.getElementById("upload")
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth"
            })
          }}>Upload an Image</button>
        </div>
        <div className={styles.right}>
          <Image
            src="/instagram-grid.png"
            height={400}
            width={400}
            alt="instagram-grid"
          />
        </div>
      </section>
      <section className={styles.upload}>
        <p>
          Create an engaging + beautiful Instagram grid or carousel in seconds
          with out Grid Maker and download your split images without installing
          an extra app!
        </p>
        <p>
          Start with uploading your IG graphic, photo or puzzle to the Image
          Splitter tool
        </p>
        <div id="upload" className={styles.dragDropUpload}>
          <p>Drop your image here or click below to upload</p>
          <button>Select Image</button>
        </div>
      </section>
      <section className={styles.howTo}>
        <h3>How to split photos into an IG grid?</h3>
        <p>Here is how the Instagram Grid Creator works:</p>
        <div className={styles.cards}>
          <Card
            src="/image.svg"
            alt="image"
            head="Step 1"
            title="Choose Image or Graphic"
            description="Upload an image or a puzzle graphic from Canva"
          />
          <Card
            src="/options.svg"
            alt="options"
            head="Step 2"
            title="Set your Options"
            description="Choose whether you want to cut your image into a grid or into carousel slides"
          />
          <Card
            src="/magic.svg"
            alt="magic"
            head="Step 3"
            title="The split magic happens"
            description="Our tools cuts your grid image in the standard 3 column instagram squares or single carousel slides"
          />
          <Card
            src="/grid.svg"
            alt="grid"
            head="Step 4"
            title="Download your Instagram Posts"
            description="We'll show you a preview of how the posts will look like in the grid or as a carousel post."
          />
        </div>
      </section>
      <section className={styles.recommendation}>
        <h3>Recommended Dimensions for Split Images</h3>
        <p>
          want to create a puzzle graphic yourself? Here are the ideal
          dimensions for Instagram grid posts:
        </p>
        <h1>The images are in progress...</h1>
      </section>
      <section className={styles.hero}>
        <div className={styles.left}>
          <h4>
            Why use our online grid creator to split your pictures for
            Instagram?
          </h4>
          <ul>
            <li>
              ✅ Easily cut an Instagram puzzle feed or a large photo into a 9x9
              grid layout.
            </li>
            <li>
              ✅ No app download needed - our picture splitter tool works on
              desktop and on your phone.
            </li>
            <li>
              ✅ Slice an image into slides or squares without photoshop and
              download the individual photos or all Instagram grid posts as a
              zip archive.
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <Image
            src="/selfie.png"
            height={400}
            width={400}
            alt="instagram-selfie"
          />
        </div>
      </section>
      <section className={styles.faq}>
        <h3>Frequently Asked Questions:</h3>
        <QuestionFAQ
          question="How can I split a picture into pieces for my Instagram account?"
          answer="Easy! All you need to do is upload your picture or graphic to the Grid Maker."
        />
        <QuestionFAQ
          question="Does this also work for puzzle feeds?"
          answer="Yes! You can perfectly use this tool as a puzzle maker and split your Instagram puzzle graphic into single posts."
        />
        <QuestionFAQ
          question="Which size does my image need to be?"
          answer="The Grid Maker works with any image dimension and will automatically calculate how many posts you can create. For best results, see our recomended dimensions."
        />
        <QuestionFAQ
          question="How can I put one picture into two or more carousel slides on Instagram?"
          answer="Upload your graphic or photo to the grid maker and select 'Carousel' and how many columns you need."
        />
      </section>
      <footer className={styles.footer}>
        <a>Terms and Conditions</a>
        <a>Privacy Policy</a>
        <a>License Agreement</a>
      </footer>
    </main>
  );
}
