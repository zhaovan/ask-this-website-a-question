import React, { useState, useEffect } from "react";

const Typewriter = ({ text, typingSpeed = 100, startDelay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const typeText = async () => {
      let index = 0;
      while (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        await new Promise((resolve) => setTimeout(resolve, typingSpeed));
      }
    };

    const startTypingWithDelay = setTimeout(() => {
      typeText();
    }, startDelay);

    return () => clearTimeout(startTypingWithDelay);
  }, [text, typingSpeed, startDelay]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
