'use client'

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Card from "./Components/Card";  // 确保这行存在且路径正确
import QuestionFAQ from "./Components/QuestionFAQ";
import SEO from './Components/SEO';
import Footer from './Components/Footer';



export default function Home() {
  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef(null);
  const gameWrapperRef = useRef(null);

  const handlePlayGame = () => {
    setIsGameLoaded(true);
  };

  useEffect(() => {
    if (isGameLoaded && iframeRef.current) {
      iframeRef.current.focus();
    }
  }, [isGameLoaded]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (gameWrapperRef.current.requestFullscreen) {
        gameWrapperRef.current.requestFullscreen({ navigationUI: "hide" }).then(() => {
          // 在进入全屏后，将焦点设置到iframe上
          if (iframeRef.current) {
            iframeRef.current.focus();
          }
        }).catch(err => {
          console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      // 在全屏状态改变后，重新设置焦点
      if (iframeRef.current) {
        iframeRef.current.focus();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

const scrollToGame = () => {
    let element = document.getElementById("game");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 添加键盘事件监听器
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isFullscreen && iframeRef.current) {
        // 将键盘事件转发到iframe
        iframeRef.current.contentWindow.postMessage({
          type: 'keydown',
          key: event.key,
          keyCode: event.keyCode,
          which: event.which,
          code: event.code
        }, '*');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <>
    <SEO />
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1>Paper Minecraft: A Unique 2D Minecraft Experience</h1>
           <p>Play the classic Minecraft in a new 2D perspective</p>
          <button onClick={scrollToGame}>Play Now</button>
        </div>
        <div className={styles.right}>
          <Image
            src="/discover.svg"
            height={400}
            width={400}
            alt="paper-minecraft"
          />
        </div>
      </section>
<section id="game" className={styles.game}>
        <div className={styles.gameContent}>
          {/* ... previous content ... */}
          <div className={styles.gameContainer}>
            {!isGameLoaded ? (
              <div className={styles.playButtonContainer}>
                <button className={styles.playButton} onClick={handlePlayGame}>
                  Play Game
                </button>
              </div>
            ) : (
              <>
                <div className={styles.gameWrapper} ref={gameWrapperRef}>
                  <iframe 
                    ref={iframeRef}
                    className={styles.gameIframe}
                    src="https://scratch.mit.edu/projects/10128407/embed" 
                    allowFullScreen
                    tabIndex="0"
                    allow="fullscreen; autoplay; gamepad"
                  />
                  <button 
                    className={styles.fullscreenButton}
                    onClick={toggleFullscreen}
                    aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
                <p className={styles.gameTip}>
                  Click on the game area to start controlling. 
                  Use the fullscreen button for a better experience.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
      <section className={styles.howTo}>
        <h3>How to play Paper Minecraft?</h3>
        <p>Here's a quick guide to get you started:</p>
        <div className={styles.cards}>
          <Card
            src="/Keyboard_Mouse_controls.svg"
            alt="controls"
            head="Step 1"
            title="Learn the Controls"
            description="WASD or arrow keys to move, jump, or swim,Left-click to dig or place blocks"
            imageSize={400}
          />
          <Card
            src="/tools.svg"
            alt="gather"
            head="Step 2"
            title="Gather Resources"
            description=" E to open inventory or chest, F to eat the held items"
            imageSize={400}
          />
          <Card
            src="/usetools.svg"
            alt="craft"
            head="Step 3"
            title="Craft and Build"
            description="Space bar to drop or split an item from a stack,O to save progress"
            imageSize={400}
          />
          <Card
            src="/discover.svg"
            alt="explore"
            head="Step 4"
            title="Explore and Survive"
            description="P to pause and Space to resume"
            imageSize={400}
          />
        </div>
      </section>
<section className={styles.features}>
  <div className={styles.featuresContent}>
    <h3>Key Features of Paper Minecraft</h3>
    <div className={styles.cards}>
      <Card
        src="/2D.svg"
        alt="2D World"
        head="2D World"
        title="Unique Perspective"
        description="Experience Minecraft from a side-scrolling view"
        imageSize={400}
      />
      <Card
        src="/2D.svg"
        alt="Crafting"
        head="Crafting"
        title="Classic Mechanics"
        description="Enjoy the familiar Minecraft crafting system"
        imageSize={400}
      />
      <Card
        src="/house.svg"
        alt="Monsters"
        head="Monsters"
        title="Familiar Foes"
        description="Face creepers, skeletons, and other Minecraft mobs"
        imageSize={400}
      />
      <Card
        src="/more.svg"
        alt="Exploration"
        head="Exploration"
        title="Vast World"
        description="Explore diverse biomes and discover hidden treasures"
        imageSize={400}
      />
    </div>
  </div>
</section>
      <section className={styles.hero}>
        <div className={styles.left}>
          <h4>
            Why play Paper Minecraft?
          </h4>
          <ul>
            <li>
              ✅ Experience Minecraft from a fresh 2D perspective.
            </li>
            <li>
              ✅ No download needed - play directly in your browser.
            </li>
            <li>
              ✅ Enjoy classic Minecraft features in a simplified, accessible format.
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <Image
            src="/paper-minecraft-screenshot.svg"
            height={400}
            width={400}
            alt="paper-minecraft-screenshot"
          />
        </div>
      </section>
      <section className={styles.faq}>
        <h3>Frequently Asked Questions:</h3>
        <QuestionFAQ
          question="Is Paper Minecraft the same as regular Minecraft?"
          answer="While Paper Minecraft is inspired by Minecraft, it's a 2D reimagining with its own unique gameplay elements."
        />
        <QuestionFAQ
          question="Do I need to install anything to play Paper Minecraft?"
          answer="No, Paper Minecraft runs directly in your web browser. No installation is required."
        />
        <QuestionFAQ
          question="Can I play Paper Minecraft on mobile devices?"
          answer="Yes, Paper Minecraft is playable on most devices with a modern web browser, including smartphones and tablets."
        />
        <QuestionFAQ
          question="Is Paper Minecraft free to play?"
          answer="Yes, Paper Minecraft is completely free to play in your web browser."
        />
      </section>
      <Footer />
    </main>
    </>
  );
}