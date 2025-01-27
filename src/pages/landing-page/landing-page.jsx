import React from "react";
import styles from "./landing-page.module.css";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import CircleLogo from "@/app/components/circle-logo/circle-logo";

export default function LandingPage({ handleClick }) {
  const flipDoor = {
    default: {
      rotateY: "0deg",
      perspective: "1000px",
    },
    hover: {
      rotateY: "-120deg",
      perspective: "1000px",
    },
  };
  return (
    <>
      <motion.div
        className={styles.container}
        whileHover="hover"
        onClick={handleClick}
        // exit={{ opacity: 0 }}
      >
        <Image
          src={"/galaxy.png"}
          width={575}
          height={937}
          className={styles.background}
          alt="black"
        />
        <motion.div className={styles.door} variants={flipDoor}>
          <Image
            src={"/handle.svg"}
            width={25}
            height={25}
            className={styles.handle}
            alt="black"
          />
        </motion.div>
      </motion.div>
      <div className={styles.circleText}>
        <CircleLogo />
      </div>
    </>
  );
}
