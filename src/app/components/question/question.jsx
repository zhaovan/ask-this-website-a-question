import React, { useReducer } from "react";
import Button from "../../button";
import styles from "./style.module.css";
import { AnimatePresence, motion } from "motion/react";
import Typewriter from "../typewriter/typewriter";
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
    <div className={styles.container} key={question.number}>
      <div className={styles.textContainer}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <Button onClick={handleBack}>Back</Button>
        </motion.span>
        <span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {question.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <Typewriter startDelay={3000} text={replacedQuestion} />
          </motion.p>
        </span>
      </div>
      <motion.div
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
      </motion.div>
    </div>
  );
}
