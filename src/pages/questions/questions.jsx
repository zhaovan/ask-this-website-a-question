"use client";
import { useEffect, useState } from "react";
import styles from "./questions.module.css";
import { questions, responses, placeholders } from "@/app/constants";
import Question from "@/app/components/question/question";
import Button from "@/app/button";
import Answer from "@/app/components/answer/answer";
import { motion } from "motion/react";
import { COOL_COLORS, WARM_COLORS } from "@/app/constants";

export default function Questions() {
  const [question, setQuestion] = useState("");
  const [userResponse, setUserResponse] = useState("");
  const [stage, setStage] = useState(0);
  const [isAnswering, setIsAnswering] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [answerColorYes, setAnswerColorYes] = useState(0);
  const [answerColorNo, setAnswerColorNo] = useState(0);

  const [placeholderText, setPlaceholderText] = useState(placeholders[0]);

  function handleClickThrough(response) {
    if (response === "Y") {
      setAnswerColorYes(answerColorYes + 1);
    } else {
      setAnswerColorNo(answerColorNo + 1);
    }
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
    setAnswerColorNo(0);
    setAnswerColorYes(0);
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
      <div
        className={styles.container}
        style={{
          "--answer-color-yes": WARM_COLORS[answerColorYes],
          "--answer-color-no": COOL_COLORS[answerColorNo],
        }}
      >
        {isAnswering ? (
          !isFinished ? (
            <Question
              question={questions[stage]}
              userQuestion={question}
              handleBack={handleBack}
              handleClick={handleClickThrough}
            />
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
            <Button
              onClick={() => {
                setUserResponse("YYYYYY");
                setIsAnswering(true);
                setIsFinished(true);
              }}
            >
              jump to end
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
