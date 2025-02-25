import React from "react";
import Button from "../button/button";
import styles from "./styles.module.css";
import { motion } from "motion/react";

import TypewriterComponent from "typewriter-effect";

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
          transition={{ delay: 8 }}
        >
          <Button onClick={handleBack}>Back</Button>
        </motion.span>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {question.title}
          </motion.h1>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <TypewriterComponent
              options={{
                cursor: "",
                delay: 50,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(2500).typeString(replacedQuestion).start();
              }}
            />
          </motion.span>
        </div>
      </div>

      <motion.div
        className={styles.buttonContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 8 }}
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
