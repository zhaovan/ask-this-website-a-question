"use client";

import LandingPage from "@/pages/landing-page/landing-page";
import Questions from "@/pages/questions/questions";
import { useState } from "react";
import styles from "./page.module.css";
import { AnimatePresence } from "motion/react";
import GradientLanding from "@/pages/gradient-page/gradient-page";
import Image from "next/image";
// import rain from "@/../public/rain.gif";

export default function Home() {
  const [landingOpened, setLandingOpened] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <div className={styles.imageContainer}>
        <Image src="/rain.gif" layout="fill" />
      </div>
      {/* <CircleLogo /> */}
      {landingOpened && <GradientLanding key="gradient" />}
      {!landingOpened && (
        <LandingPage key="landing" handleClick={() => setLandingOpened(true)} />
      )}
      {/* {landingOpened ? (
        <GradientLanding />
      ) : (
        // <Questions />
        <LandingPage
          handleClick={() => {
            setLandingOpened(true);
          }}
        />
      )} */}
    </AnimatePresence>
  );
}
