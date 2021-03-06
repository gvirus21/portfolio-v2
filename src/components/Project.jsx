import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import projectImg from "../img/project-img.jpg";

const Project = () => {
  return (
    <div className="Project__elephant-container">
      <h1 className="project-heading">Projects</h1>
      <div className="Project__horse-container">
        <div className="project-container">
          <img src={projectImg} alt="" />
          <div className="project-info">
            <h1>Yogavan</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              laudantium asperiores eaque nihil ab soluta a, pariatur aliquid
              quasi dolores!
            </p>
            <div className="btn-container">
              <div className="btn-innerContainer">
                <div className="github-icon icon">
                  <AiOutlineGithub />
                </div>
                <div className="open-icon icon">
                  <HiOutlineExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img src={projectImg} alt="" />
          <div className="project-info">
            <h1>Yogavan</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              laudantium asperiores eaque nihil ab soluta a, pariatur aliquid
              quasi dolores!
            </p>
            <div className="btn-container">
              <div className="btn-innerContainer">
                <div className="github-icon icon">
                  <AiOutlineGithub />
                </div>
                <div className="open-icon icon">
                  <HiOutlineExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img src={projectImg} alt="" />
          <div className="project-info">
            <h1>Yogavan</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              laudantium asperiores eaque nihil ab soluta a, pariatur aliquid
              quasi dolores!
            </p>
            <div className="btn-container">
              <div className="btn-innerContainer">
                <div className="github-icon icon">
                  <AiOutlineGithub />
                </div>
                <div className="open-icon icon">
                  <HiOutlineExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
