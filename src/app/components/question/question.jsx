import React, { useReducer } from "react";
import Button from "../../button";
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
      <div className={styles.container}>
        <div>
          <span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
          >
            <Button onClick={handleBack}>Back</Button>
          </span>
          <h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} delay={1}>
            {question.title}
          </h1>
          <p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {replacedQuestion}
          </p>
        </div>
        <div
          className={styles.buttonContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
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
        </div>
      </div>
    </AnimatePresence>
  );
}
