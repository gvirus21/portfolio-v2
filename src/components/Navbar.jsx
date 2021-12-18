import React from "react";
import logo from "../img/logo.svg";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";

const navAnimationVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.5, type: "tween" },
  },
};

const Navbar = () => {
  return (
    <div className="nav__elephant--container">
      <div className="nav__horse--container">
        <div className="logo__container">
          <motion.div
            className="logo"
            variants={navAnimationVariants}
            initial="initial"
            animate="visible"
          >
            <img src={logo} alt="gv-logo" />
          </motion.div>
        </div>
        <motion.ul
          className="navlink__container"
          variants={navAnimationVariants}
          initial="initial"
          animate="visible"
        >
          <li>
            <a className="navlink" href="">
              Home
            </a>
          </li>
          <li>
            <a className="navlink" href="">
              About
            </a>
          </li>
          <li>
            <a className="navlink" href="">
              Projects
            </a>
          </li>
          <li>
            <a className="navlink" href="">
              Contact me
            </a>
          </li>
        </motion.ul>
        <motion.div
          className="menu-icon"
          variants={navAnimationVariants}
          initial="initial"
          animate="visible"
        >
          <FiMenu />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
