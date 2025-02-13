import React, { useEffect, useState } from "react";
import { placeholders, LANDING_PAGE_COLORS } from "@/app/constants";
import styles from "./page.module.css";
import { motion } from "motion/react";

export default function GradientLanding() {
  const [placeholderQuestions, setPlaceholderQuestions] = useState(
    placeholders.sort(() => Math.random() - Math.random()).slice(0, 5)
  );

  useEffect(() => {
    const audio = new Audio("/background.mp3");
    audio.loop = true;
    audio.play();
    audio.volume = 0;
    const intervalId = setInterval(() => {
      if (audio.volume < 0.3) {
        audio.volume += 0.005;
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, delay: 1 }}
      className={styles.container}
    >
      {placeholderQuestions.map((placeholder, idx) => {
        const randomLeft = Math.round(Math.random() * 10);
        const randomTop = Math.round(Math.random() * 90);

        const randomAnimationDelay = Math.random() * 5;
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
                background: `radial-gradient(
                circle,
                ${LANDING_PAGE_COLORS[idx]} 10%,
                rgba(238, 238, 228, 0) 80%
              )`,
                animationDelay: `${randomAnimationDelay}s`,
              }}
              suppressHydrationWarning
              className={styles.firework}
            />
          </motion.div>
        );
      })}
      <div className={styles.questionContainer}>
        <p>Should I</p>
        <input
          type="text"
          // onChange={(e) => setQuestion(e.target.value)}
          // onKeyDown={(event) => {
          //   if (event.key === "Enter") {
          //     setIsAnswering(true);
          //   }
          // }}
          className={styles.input}
          // value={question}
          placeholder={"..."}
        />
      </div>
    </motion.div>
  );
}
