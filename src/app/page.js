"use client";

import LandingPage from "@/pages/landing-page/landing-page";
import Questions from "@/pages/questions/questions";
import { useState } from "react";
import CircleLogo from "./components/circle-logo/circle-logo";
import { AnimatePresence } from "motion/react";

export default function Home() {
  const [landingOpened, setLandingOpened] = useState(false);

  return (
    <AnimatePresence>
      <CircleLogo />
      {landingOpened ? (
        <Questions />
      ) : (
        <LandingPage handleClick={() => setLandingOpened(true)} />
      )}
    </AnimatePresence>
  );
}
