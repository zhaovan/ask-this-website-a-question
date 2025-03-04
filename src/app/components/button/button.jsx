"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import styles from "./styles.module.css";

export default function Button({ children, onClick }) {
  const [buttonAudio, setButtonAudio] = useState(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setButtonAudio(new Audio("/button.mp3"));
  }, []);

  function playAudio() {
    buttonAudio.volume = 0.1;
    buttonAudio.play();
  }
  return (
    <motion.button
      className={styles.customButton}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onMouseEnter={playAudio}
      initial={{ top: "0px" }}
      whileHover={{
        top: ["6px", "4px"],
        filter: "drop-shadow(0 0 var(--button-background-shadow))",
      }}
      transition={{
        top: {
          times: [0.8, 1],
          duration: 0.2,
        },
        filter: hovered
          ? {
              times: [0.8, 1],
              duration: 0.2,
            }
          : {
              duration: 0.05,
            },
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
