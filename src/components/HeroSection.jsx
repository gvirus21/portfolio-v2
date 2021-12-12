import React from "react";

const HeroSection = () => {
  return (
    <div className="herosection__elephant--container">
      <div className="herosection__greet--container">
        <h2>
          Hi, <span>I am</span>
        </h2>
      </div>
      <div className="herosection__info--container">
        <div className="herosection__info--container-name">
          <h1 className="h1_name">Gourav</h1>
          <h1 className="h1_title">Kumar</h1>
        </div>
        <div className="herosection__info--container-info">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <a href="#">Know more </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

