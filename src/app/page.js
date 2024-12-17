"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { questions, responses } from "./constants";
import Question from "./components/question/question";
import Button from "./components/button";
import Answer from "./components/answer/answer";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [userResponse, setUserResponse] = useState("");
  const [stage, setStage] = useState(0);
  const [isAnswering, setIsAnswering] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

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

  return (
    <div>
      <div className={styles.titleContainer}>
        <h1>Ask this website a question</h1>
      </div>
      <div className={styles.container}>
        {isAnswering ? (
          !isFinished ? (
            <Question
              question={questions[stage]}
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
          <div className={styles.textContainer}>
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
                placeholder="move to nyc?"
              />
            </div>
            <Button onClick={() => setIsAnswering(true)}>Ponder further</Button>
          </div>
        )}
      </div>
    </div>
  );
}
