import React, { useReducer } from "react";
import Button from "../button";
import styles from "./style.module.css";
import { AnimatePresence, motion } from "motion/react";
import Typewriter from "../typewriter/typewriter";

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
          <h1>
            <Typewriter text={question.title} delay={50} />
          </h1>
          <p>
            <Typewriter text={replacedQuestion} delay={50} />
          </p>
        </div>
        <div className={styles.buttonContainer}>
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
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
