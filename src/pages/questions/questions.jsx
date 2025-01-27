"use client";
import { useEffect, useState } from "react";
import styles from "./questions.module.css";
import { questions, responses, placeholders } from "@/app/constants";
import Question from "@/app/components/question/question";
import Button from "@/app/components/button";
import Answer from "@/app/components/answer/answer";
import { motion } from "motion/react";

export default function Questions() {
  const [question, setQuestion] = useState("");
  const [userResponse, setUserResponse] = useState("");
  const [stage, setStage] = useState(0);
  const [isAnswering, setIsAnswering] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [placeholderText, setPlaceholderText] = useState(placeholders[0]);

  function handleClickThrough(response) {
    setUserResponse(userResponse + response);
    // Last stage
    if (stage === 5) {
      setIsFinished(true);
      return;
    }

    setStage(stage + 1);
  }

  function resetPrompt() {
    setQuestion("");
    setStage(0);
    setIsAnswering(false);
    setIsFinished(false);
    setUserResponse("");
  }

  function handleBack() {
    if (stage !== 0) {
      setStage(stage - 1);
      setUserResponse(userResponse.slice(0, userResponse.length - 1));
    } else {
      setIsAnswering(false);
    }
  }

  useEffect(() => {
    const timeoutId = setInterval(() => {
      const randIndex = Math.round(Math.random() * (placeholders.length - 1));
      setPlaceholderText(placeholders[randIndex]);
    }, 2000);
    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <div>
      <div className={styles.container}>
        {isAnswering ? (
          !isFinished ? (
            <>
              <Question
                question={questions[stage]}
                userQuestion={question}
                handleBack={handleBack}
                handleClick={handleClickThrough}
              />
            </>
          ) : (
            <div>
              <Answer
                response={responses[userResponse]}
                resetPrompt={resetPrompt}
              />
            </div>
          )
        ) : (
          <motion.div
            className={styles.textContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <div className={styles.questionContainer}>
              <p>Should I </p>
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
                placeholder={placeholderText}
              />
            </div>
            <Button onClick={() => setIsAnswering(true)}>Ponder further</Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
