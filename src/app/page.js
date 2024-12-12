"use client";
import { useState } from "react";
import styles from "./page.module.css";

const questions = [
  {
    number: 1,
    title: "Intuition",
    text: "When you sit quietly with this question, can you trust your gut and internal compass?",
  },
  {
    number: 2,
    title: "Resources",
    text: "Do you have the time and money to give this question the attention it deserves?",
  },
  {
    number: 3,
    title: "Skills",
    text: "Do you have the skills and knowledge to navigate this question?",
  },
  {
    number: 4,
    title: "Support",
    text: "When you talk to those who matter most – your friends, family, and community – do you feel supported and understood?",
  },
  {
    number: 5,
    title: "Emotions",
    text: "Do you feel emotionally prepared to face whatever truths and challenges may emerge when answering this question?",
  },
  {
    number: 6,
    title: "Impact",
    text: "Have you considered how your decision might impact the people around you, the environment, or the future?",
  },
];

export default function Home() {
  const [question, setQuestion] = useState("");
  const [questionResponses, setQuestionResponses] = useState("");
  const [stage, setStage] = useState(0);
  return (
    <div>
      <p>Should I </p>
      <input type="text" />

      <button>next</button>
    </div>
  );
}
