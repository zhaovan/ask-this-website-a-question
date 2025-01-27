import React from "react";
import Button from "../button";
import { motion } from "motion/react";
import styles from "../question/style.module.css";

export default function Answer({ response, resetPrompt }) {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div>
        <h2>{response.description}</h2>
        <p>Consider: {response.strategy}</p>
      </div>

      <Button onClick={resetPrompt}>Do you feel good about your answer?</Button>
      <Button onClick={resetPrompt}>
        Do you have a new question in light of this answer?
      </Button>
      <Button onClick={resetPrompt}>
        Do you want to let go of your question?
      </Button>
    </motion.div>
  );
}
