import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "motion/react";
import styles from "./page.module.css";

export default function CloudBackground() {
  const NUM_CLOUDS = 10;
  const calculatedValues = useMemo(() => {
    return [...Array(NUM_CLOUDS)].map(() => {
      const width = Math.floor(Math.random() * 200) + 100;
      return {
        randomDuration: Math.floor(Math.random() * 50) + 40,
        randomDelay: Math.floor(Math.random() * 50) + 3,
        width: width,
        height: width * 0.6,
      };
    });
  }, []);
  return (
    <div className={styles.container}>
      {[...Array(10)].map((_, index) => {
        const cloudIndex = index % 6;
        const { randomDuration, randomDelay, width, height } =
          calculatedValues[index];
        return (
          <motion.div
            initial={{ x: "-30vw" }}
            animate={{ x: "150vw" }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
            }}
            key={index}
          >
            <Image
              src={`/clouds/cloud${cloudIndex}.png`}
              alt="cloud"
              width={width}
              height={height}
            />
          </motion.div>
        );
      })}
      <div>
        {[...Array(50)].map((_, index) => {
          const left = -30 + index * 4.25;
          return (
            <Image
              key={index}
              src="/tree.png"
              alt="cloud"
              width={300}
              height={300}
              style={{
                objectFit: "cover",
                position: "absolute",
                bottom: "-10vh",
                left: `${left}vw`,
                filter: "brightness(0%)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
