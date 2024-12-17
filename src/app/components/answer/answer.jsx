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
      <Button onClick={resetPrompt}>Ask another question...</Button>
    </div>
  );
}
