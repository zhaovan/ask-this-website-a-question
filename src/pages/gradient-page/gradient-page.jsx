import React from "react";
import styles from "./page.module.css";
import { motion } from "motion/react";

export default function GradientLanding({
  question,
  setQuestion,
  setIsAnswering,
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={styles.container}
      >
        <div className={styles.questionContainer}>
          <p>Should I</p>
          <input
            type="text"
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setIsAnswering(true);
              }
            }}
            className={styles.input}
            value={question}
            placeholder={"..."}
          />

          <motion.button
            whileHover={{ opacity: 0.4, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={styles.submitButton}
            onClick={() => setIsAnswering(true)}
          >
            →
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
