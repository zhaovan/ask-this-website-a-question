"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import styles from "./styles.module.css";

export default function Button({ children, onClick }) {
  const [buttonAudio, setButtonAudio] = useState(null);

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
      onMouseEnter={playAudio}
      initial={{ top: "0px" }}
      whileHover={{ top: ["6px", "4px"], transition: { times: [0.8, 1] } }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
