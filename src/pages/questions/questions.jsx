"use client";
import { useState } from "react";
import styles from "./questions.module.css";
import { questions, responses } from "../../app/constants";
import Question from "../../app/components/question/question";
import Answer from "../../app/components/answer/answer";
import { AnimatePresence } from "motion/react";

export default function Questions({ question, setQuestion, setIsAnswering }) {
  const [userResponse, setUserResponse] = useState("");
  const [stage, setStage] = useState(0);

  const [isFinished, setIsFinished] = useState(false);
  const [answerColorYes, setAnswerColorYes] = useState(0);
  const [answerColorNo, setAnswerColorNo] = useState(0);

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

  return (
    <div
      className={styles.container}
      style={
        {
          // "--answer-color-yes": WARM_COLORS[answerColorYes],
          // "--answer-color-no": COOL_COLORS[answerColorNo],
        }
      }
    >
      {!isFinished ? (
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
      )}
    </div>
  );
}
