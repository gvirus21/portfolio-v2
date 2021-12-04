import React from "react";
import graphic from "../img/undraw-1.svg";

const HeroSection = () => {
  return (
    <div className="herosection__elephant--container">
      <div className="herosection__info--container">
        <h1>Hi</h1>
        <h1>I am Gourav kumar</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          esse soluta libero, laboriosam officia minima et harum dolorum nemo
          dolor magni sit voluptatum ad suscipit maxime. Ad eveniet repellat
          voluptate.
        </p>
      </div>

      <div className="herosection__hero--graphics">
        <img src={graphic} alt="hero section graphics" />
      </div>
    </div>
  );
};

export default HeroSection;
