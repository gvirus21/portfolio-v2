import React from "react";
import logo from "../img/logo.svg";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="nav__elephant--container">
      <div className="nav__horse--container">
        <div className="logo__container">
          <div className="logo">
            <img src={logo} alt="gv-logo" />
          </div>
        </div>
        <ul className="navlink__container">
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
        </ul>
        <div className="menu-icon">
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
