"use client";

import LandingPage from "../pages/landing-page/landing-page";
import Questions from "../pages/questions/questions";
import { useState } from "react";
import styles from "./page.module.css";

import GradientLanding from "../pages/gradient-page/gradient-page";
import Image from "next/image";
import { motion } from "motion/react";
import { placeholders, LANDING_PAGE_COLORS } from "../app/constants";

const placeholderQuestions = placeholders
  .sort(() => Math.random() - Math.random())
  .slice(0, 5);

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const calculatedPositions = placeholders.map(() => {
  return {
    left: Math.round(Math.random() * 10),
    top: Math.round(Math.random() * 90),
    animationDelay: Math.random() * 5,
    width: randomIntFromInterval(200, 600),
  };
});

export default function Home() {
  const [landingOpened, setLandingOpened] = useState(false);
  const [question, setQuestion] = useState("");
  const [isAnswering, setIsAnswering] = useState(false);

  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          src="/rain.gif"
          layout="fill"
          alt="rain falling down gif"
          unoptimized
        />
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
      {!landingOpened && (
        <LandingPage key="landing" handleClick={() => setLandingOpened(true)} />
      )}
    </div>
  );
}
