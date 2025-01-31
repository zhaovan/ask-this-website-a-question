import React, { useReducer } from "react";
import Button from "../button";
import styles from "./style.module.css";
import { AnimatePresence, motion } from "motion/react";
// import Typewriter from "../typewriter/typewriter";

export default function Question({
  question,
  handleClick,
  handleBack,
  userQuestion,
}) {
  const replacedQuestion = question.text.replace(
    "this question",
    `"Should I ${userQuestion}"`
  );
  return (
    <AnimatePresence>
      <motion.div
        key={question.title}
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <Button onClick={handleBack}>Back</Button>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            delay={0.5}
          >
            {question.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            {replacedQuestion}
          </motion.p>
        </div>
        <motion.div
          className={styles.buttonContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          delay={1}
        >
          <Button
            onClick={() => {
              handleClick("N");
            }}
          >
            No
          </Button>
          <Button
            onClick={() => {
              handleClick("Y");
            }}
          >
            Yes
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
