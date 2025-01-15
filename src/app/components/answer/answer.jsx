import React from "react";
import Button from "../button";

import styles from "../question/style.module.css";

export default function Answer({ response, resetPrompt }) {
  return (
    <div className={styles.container}>
      <div>
        <h2>{response.description}</h2>
        <p>Consider: {response.strategy}</p>
      </div>

      <Button onClick={resetPrompt}>Do you feel good about your answer?</Button>
      <Button onClick={resetPrompt}>
        Do you have a new question in light of this answer?
      </Button>
      <Button onClick={resetPrompt}>
        Do you want to let go of your question?
      </Button>
    </div>
  );
}
