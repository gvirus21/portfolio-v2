import React from "react";
import graphic from "../img/undraw-1.svg";

const HeroSection = () => {
  return (
    <div className="herosection__elephant--container">
      <div className="herosection__greet--container">
        <h2>
          Hi, <span>I am</span>
        </h2>
      </div>
      <div className="herosection__info--container">
        <div className="herosection__info--container-upper">
          <h1>Gourav</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="herosection__info--container-lower">
          <h1>Kumar</h1>
          <a href="">Know more </a>
        </div>
      </div>
      <div className="herosection__graphic">
        <img className="herosection__graphic-art" src={graphic} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
