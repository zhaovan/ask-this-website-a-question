import React from "react";
import styles from "./style.module.css";

export default function CircleLogo() {
  const SENTENCE = "Ask This Website A Question ❋ ";
  const CHARS = [...SENTENCE];

  const INNER_ANGLE = 360 / CHARS.length;

  return (
    <p
      className={styles.textRing}
      style={{
        "--total": CHARS.length,
        "--radius": 1 / Math.sin(INNER_ANGLE / (180 / Math.PI)),
      }}
      suppressHydrationWarning
    >
      {CHARS.map((char, index) => {
        return (
          <span
            style={{ "--index": index }}
            className={styles.char}
            key={`${index}-${Math.random()}`}
          >
            {char}
          </span>
        );
      })}
    </p>
  );
}
