'use client'

import { useState, useRef, useEffect } from "react";
import { useParams } from 'next/navigation';
import Image from "next/image";
import styles from "./page.module.css";
import Card from "./Components/Card";
import QuestionFAQ from "./Components/QuestionFAQ";
import SEO from './Components/SEO';
import Footer from './Components/Footer';
import LanguageSwitcher from './Components/LanguageSwitcher';

import en from '../locales/en.json';
import ja from '../locales/ja.json';
import ko from '../locales/ko.json';
import ru from '../locales/ru.json';
import de from '../locales/de.json';
import fr from '../locales/fr.json';
import it from '../locales/it.json';
import es from '../locales/es.json';
import zh from '../locales/zh.json';

const translations = { en, ja, ko, ru, de, fr, it, es, zh };

export default function Home() {
  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef(null);
  const gameWrapperRef = useRef(null);
  const params = useParams();
  const [currentLocale, setCurrentLocale] = useState('en');
  const [t, setT] = useState(translations.en);

  useEffect(() => {
    const lang = params?.lang || 'en';
    setCurrentLocale(lang);
    setT(translations[lang]);
  }, [params]);

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isFullscreen && iframeRef.current) {
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
                <LanguageSwitcher />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.left}>
            <h1>{t.title}</h1>
            <p>{t.description}</p>
            <button onClick={scrollToGame}>{t.playNow}</button>
          </div>
          <div className={styles.right}>
            <Image
              src="/discover.svg"
              height={400}
              width={400}
              alt={t.title}
            />
          </div>
        </section>
        <section id="game" className={styles.game}>
          <div className={styles.gameContent}>
            <p>{t.gameExperience}</p>
            <p>{t.startAdventure}</p>
            <div className={styles.gameContainer}>
              {!isGameLoaded ? (
                <div className={styles.playButtonContainer}>
                  <button className={styles.playButton} onClick={handlePlayGame}>
                    {t.playGame}
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
                      aria-label={isFullscreen ? t.exitFullscreen : t.enterFullscreen}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                  <p className={styles.gameTip}>{t.fullscreenTip}</p>
                </>
              )}
            </div>
          </div>
        </section>
        <section className={styles.howTo}>
          <h3>{t.howToPlay}</h3>
          <p>{t.quickGuide}</p>
          <div className={styles.cards}>
            <Card
              src="/Keyboard_Mouse_controls.svg"
              alt={t.step1Title}
              head={t.step1Title}
              title={t.step1Title}
              description={t.step1Description}
              imageSize={400}
            />
            <Card
              src="/tools.svg"
              alt={t.step2Title}
              head={t.step2Title}
              title={t.step2Title}
              description={t.step2Description}
              imageSize={400}
            />
            <Card
              src="/usetools.svg"
              alt={t.step3Title}
              head={t.step3Title}
              title={t.step3Title}
              description={t.step3Description}
              imageSize={400}
            />
            <Card
              src="/discover.svg"
              alt={t.step4Title}
              head={t.step4Title}
              title={t.step4Title}
              description={t.step4Description}
              imageSize={400}
            />
          </div>
        </section>
        <section className={styles.features}>
          <div className={styles.featuresContent}>
            <h3>{t.keyFeatures}</h3>
            <div className={styles.cards}>
              <Card
                src="/2D.svg"
                alt={t.feature1Title}
                head={t.feature1Title}
                title={t.feature1Title}
                description={t.feature1Description}
                imageSize={400}
              />
              <Card
                src="/2D.svg"
                alt={t.feature2Title}
                head={t.feature2Title}
                title={t.feature2Title}
                description={t.feature2Description}
                imageSize={400}
              />
              <Card
                src="/house.svg"
                alt={t.feature3Title}
                head={t.feature3Title}
                title={t.feature3Title}
                description={t.feature3Description}
                imageSize={400}
              />
              <Card
                src="/more.svg"
                alt={t.feature4Title}
                head={t.feature4Title}
                title={t.feature4Title}
                description={t.feature4Description}
                imageSize={400}
              />
            </div>
          </div>
        </section>
        <section className={styles.hero}>
          <div className={styles.left}>
            <h4>{t.whyPlay}</h4>
            <ul>
              <li>✅ {t.reason1}</li>
              <li>✅ {t.reason2}</li>
              <li>✅ {t.reason3}</li>
            </ul>
          </div>
          <div className={styles.right}>
            <Image
              src="/paper-minecraft-screenshot.svg"
              height={400}
              width={400}
              alt={t.title}
            />
          </div>
        </section>
        <section className={styles.faq}>
          <h3>{t.faq}</h3>
          <QuestionFAQ
            question={t.faq1Question}
            answer={t.faq1Answer}
          />
          <QuestionFAQ
            question={t.faq2Question}
            answer={t.faq2Answer}
          />
          <QuestionFAQ
            question={t.faq3Question}
            answer={t.faq3Answer}
          />
          <QuestionFAQ
            question={t.faq4Question}
            answer={t.faq4Answer}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}