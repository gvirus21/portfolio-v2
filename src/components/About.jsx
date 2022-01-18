import React from "react";
import { motion } from "framer-motion";

const techStack = [
  "React js",
  "Javascript",
  "Solidity",
  "Hardhat",
  "ethers.js",
  "swift",
];

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

const About = () => {
  return (
    <div className="about__elephant--container">
      <motion.h1 className="about-heading" variants={childVariant}>
        About Me
      </motion.h1>
      <div className="about__horse--container">
        {/* image container */}
        <div className="about__horse--container-image-container">
          <div className="profile-image"></div>
          <div className="profile-image-shadow"></div>
        </div>

        <div className="about__horse--container-info">
          <p>
            • Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quibusdam aut odit in, unde tempora rem dignissimos minima est
            autem, atque soluta eaque nulla.
          </p>

          <p>
            • Mesciunt qui distinctio iste nisi recusandae totam animi excepturi
            sed incidunt dolor necessitatibus.
          </p>

          <p>
            • Eaque consectetur laborum quas ratione repellendus possimus quam
            error.
          </p>

          <p>• My Most used Technologies 😺</p>

          <ul className="techstack__list">
            {techStack.map((tech) => {
              return <li>{tech}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
