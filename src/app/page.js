"use client";

import LandingPage from "../pages/landing-page/landing-page";
import Questions from "../pages/questions/questions";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

import GradientLanding from "../pages/gradient-page/gradient-page";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { placeholders, LANDING_PAGE_COLORS } from "../app/constants";
import {
  CloudFog,
  CloudRain,
  IconContext,
  SunHorizon,
} from "@phosphor-icons/react";
import CloudBackground from "../pages/cloud-background/cloud-background";

const placeholderQuestions = placeholders
  .sort(() => Math.random() - Math.random())
  .slice(0, 5);

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const WEATHER_STATES = [
  {
    icon: <SunHorizon />,
    alt: "sun-horizon",
    label: "lake",
    fillColor: "#F9E076",
  },
  {
    icon: <CloudFog />,
    alt: "cloud-fog",
    label: "fog",
    fillColor: "#EFEFE4",
  },
  {
    icon: <CloudRain />,
    alt: "cloud-rain",
    label: "rain",
    fillColor: "#C4C4C4",
  },
];

const calculatedPositions = placeholderQuestions.map((_, idx) => {
  const STEP_SIZE = 100 / placeholderQuestions.length;
  return {
    left: Math.round(Math.random() * 85),
    top: Math.round(Math.random() * STEP_SIZE + idx * STEP_SIZE),
    animationDelay: Math.random() * 5,
    width: randomIntFromInterval(200, 600),
  };
});

// lake, rain, mist

export default function Home() {
  const [landingOpened, setLandingOpened] = useState(false);
  const [question, setQuestion] = useState("");
  const [isAnswering, setIsAnswering] = useState(false);
  const [weather, setWeather] = useState("lake");
  const [currentAudio, setCurrentAudio] = useState(null);

  function playAudio(currentWeather) {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null); // Ensure it's cleared
    }

    let newAudio;

    if (currentWeather === "rain") {
      newAudio = new Audio("/rain.mp3");
    } else if (currentWeather === "lake") {
      newAudio = new Audio("/pond.mp3");
    } else {
      newAudio = new Audio("/fog.mp3");
    }

    newAudio.loop = true;
    newAudio.play();
    newAudio.volume = 0;

    setCurrentAudio(newAudio); // Update state with the new audio instance

    const fadeIn = setInterval(() => {
      if (newAudio.volume < 0.3) {
        newAudio.volume += 0.005;
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }

  return (
    <div>
      <div className={styles.imageContainer}>
        {weather === "rain" && (
          <div className={styles.rain}>
            <Image
              src="/rain2.gif"
              layout="fill"
              alt="rain falling down gif"
              unoptimized
            />
          </div>
        )}
        {weather === "lake" && (
          <div className={styles.lake}>
            <Image
              src="/pond.gif"
              layout="fill"
              alt="rain falling down gif"
              unoptimized
            />
          </div>
        )}
        {weather === "fog" && (
          <>
            <CloudBackground />
          </>
        )}
      </div>

      <div className={styles.weatherButtons}>
        {WEATHER_STATES.map((state, idx) => {
          return (
            <motion.button
              whileHover={{ y: "-4px" }}
              whileTap={{ rotate: "360deg", transition: { duration: "250ms" } }}
              onClick={() => {
                setWeather(state.label);
                playAudio(state.label);
              }}
              key={idx}
            >
              <IconContext.Provider
                value={{
                  size: "24px",
                  weight: weather === state.label ? "fill" : "regular",
                  color: state.fillColor,
                }}
              >
                {state.icon}
              </IconContext.Provider>
            </motion.button>
          );
        })}
      </div>

      {landingOpened &&
        !isAnswering &&
        placeholderQuestions.map((placeholder, idx) => {
          const {
            left: randomLeft,
            top: randomTop,
            animationDelay: randomAnimationDelay,
            width,
          } = calculatedPositions[idx];

          return (
            <motion.div
              key={idx}
              className={styles.placeholderBlob}
              suppressHydrationWarning
              style={{
                left: `${randomLeft}vw`,
                top: `${randomTop}vh`,
                animationDelay: `${randomAnimationDelay}s`,
              }}
            >
              <p className={styles.text}>{placeholder}</p>
              <div
                style={{
                  "--width": width,
                  background: `radial-gradient(circle, ${LANDING_PAGE_COLORS[idx]} 10%, rgba(238, 238, 228, 0) 80%)`,
                  animationDelay: `${randomAnimationDelay}s`,
                }}
                suppressHydrationWarning
                className={styles.firework}
              />
            </motion.div>
          );
        })}
      <AnimatePresence>
        {landingOpened ? (
          isAnswering ? (
            <Questions
              setQuestion={setQuestion}
              setIsAnswering={setIsAnswering}
            />
          ) : (
            <GradientLanding
              key="gradient"
              question={question}
              setQuestion={setQuestion}
              setIsAnswering={setIsAnswering}
            />
          )
        ) : (
          <></>
        )}
      </AnimatePresence>
      {!landingOpened && (
        <LandingPage
          key="landing"
          handleClick={() => {
            setLandingOpened(true);
            playAudio();
          }}
        />
      )}
    </div>
  );
}
