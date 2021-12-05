/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../img/logo.svg";

const Navbar = () => {
  return (
    <div className="nav__elephant--container">
      <div className="nav__horse--container">
        <div className="logo__container">
          <div className="logo">
            <img src={logo} alt="gv-logo" />
          </div>
        </div>
        <ul className="navlinks__container">
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
      </div>
    </div>
  );
};

export default Navbar;
