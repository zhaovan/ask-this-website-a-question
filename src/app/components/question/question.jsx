import React, { useReducer } from "react";
import Button from "../button";
import styles from "./style.module.css";
import { AnimatePresence, motion } from "motion/react";

export default function Question({ question, handleClick }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  return (
    <AnimatePresence>
      <motion.div
        key={question.title}
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <div>
          <h1>{question.title}</h1>
          <p>{question.text}</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => {
              handleClick("N");
              forceUpdate();
            }}
          >
            No
          </Button>
          <Button
            onClick={() => {
              handleClick("Y");
              forceUpdate();
            }}
          >
            Yes
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
