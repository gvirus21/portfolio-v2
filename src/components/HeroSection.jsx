import React from "react";
import { motion } from "framer-motion";

const greetVariant = {
  initial: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeInOut",
      type: "spring",
    },
  },
};
const containerVariant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childVariant = {
  initial: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      type: "spring",
    },
  },
};

const HeroSection = () => {
  return (
    <div className="herosection__elephant--container">
      <div className="herosection__greet--container">
        <motion.h2 variants={greetVariant} initial="initial" animate="visible">
          Hi, <span>I am</span>
        </motion.h2>
      </div>
      <div className="herosection__info--container">
        <motion.div
          className="herosection__info--container-name"
          variants={containerVariant}
          initial="initial"
          animate="visible"
        >
          <motion.h1 className="h1_name" variants={childVariant}>
            Gourav
          </motion.h1>
          <motion.h1 className="h1_title" variants={childVariant}>
            Kumar
          </motion.h1>
        </motion.div>
        <motion.div
          className="herosection__info--container-info"
          variants={containerVariant}
          initial="initial"
          animate="visible"
        >
          <motion.p variants={childVariant}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </motion.p>
          <motion.a href="#" variants={childVariant}>
            Know more{" "}
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
