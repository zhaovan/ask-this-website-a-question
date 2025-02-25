import React from "react";
import styles from "./landing-page.module.css";
import Image from "next/image";
import { motion } from "motion/react";
import CircleLogo from "../../app/components/circle-logo/circle-logo";

export default function LandingPage({ handleClick }) {
  return (
    <motion.div
      className={styles.circleText}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      key={"landing-page"}
    >
      <CircleLogo />
      <div className={styles.circle} />
    </motion.div>
  );
}
