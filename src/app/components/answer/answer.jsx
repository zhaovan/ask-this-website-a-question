import React from "react";
import Button from "../../button";
import { motion } from "motion/react";
import styles from "./styles.module.css";

export default function Answer({ response, resetPrompt }) {
  return (
    <div className={styles.container}>
      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {response.description}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Consider: {response.strategy}
        </motion.p>
      </div>

      <div className={styles.questionContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <Button onClick={resetPrompt}>I feel good about my question</Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
        >
          <Button onClick={resetPrompt}>I have a new question</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6 }}
        >
          <Button onClick={resetPrompt}>I want to let go of my question</Button>
        </motion.div>
      </div>
    </div>
  );
}
