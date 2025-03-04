import React from "react";
import styles from "./page.module.css";
import Button from "../../app/components/button/button";
import { motion } from "motion/react";
import TypewriterComponent from "typewriter-effect";

const paragraph = `
        To explore my waters, think of a decision that is close to your heart
        but clouded in mystery. It could be about a choice you're pondering, a
        relationship, a dream, or something magical and unknown.
`;

export default function Intro({ handleClick, handleBack }) {
  return (
    <motion.div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3, delay: 1 }}
      >
        Hi. I am a pool of reflections.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3, delay: 2 }}
      >
        <TypewriterComponent
          options={{
            cursor: "",
            delay: 50,
          }}
          onInit={(typewriter) => {
            typewriter.pauseFor(2000).typeString(paragraph).start();
          }}
        />
      </motion.div>
      <motion.div
        className={styles.buttonContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 18 }}
      >
        <Button onClick={handleBack}>
          Step away and return when you're ready
        </Button>
        <Button onClick={handleClick}>I’m ready to begin</Button>
      </motion.div>
    </motion.div>
  );
}
