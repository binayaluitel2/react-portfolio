import React from "react";
import note from "../images/note.png";
import employeeManager from "../images/employee-manager-app.png";
import portfolio from "../images/portfolio.png";
import fitnessTracker from "../images/fitness-tracker.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Note Taker
  const openPopupboxNote = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={note}
          alt="Note Taker Project..."
        />
        <p>
          This is a note taking application build using Node and ExpressJS and
          deployed on Heroku. .
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/binayaluitel2/note-taker")
          }
        >
          https://github.com/binayaluitel2/note-taker
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNote = {
    titleBar: {
      enable: true,
      text: "Note Taker project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Employee Manager App
  const openPopupboxEmployeeManager = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={employeeManager}
          alt="Employee Manager App Project..."
        />
        <p>
          Employee Manager is a CLI app for managing human resources. You can
          add, edit, and delete employees, departments, and roles, and manage
          the associations between them. See the database schema for more
          information about how it all works together.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/binayaluitel2/employee-manager",
              "_blank"
            )
          }
        >
          https://github.com/binayaluitel2/employee-manager
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigEmployeeManager = {
    titleBar: {
      enable: true,
      text: "Employee Manager App project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="Portfolio Project..."
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/binayaluitel2/react-portfolio",
              "_blank"
            )
          }
        >
          https://github.com/binayaluitel2/react-portfolio{" "}
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Poftfolio React and Material UI project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Fitness Tracker App
  const openPopupboxFitnessTracker = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={fitnessTracker}
          alt="Fitness Tracker React and Redux Project..."
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
 
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/binayaluitel2/fitness-tracker", "_blank")
          }
        >
          https://github.com/binayaluitel2/fitness-tracker
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigFitnessTracker = {
    titleBar: {
      enable: true,
      text: "Fitness Tracker React and Redux project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNote}>
            <img
              className="portfolio-image"
              src={note}
              alt="Note Taker Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxEmployeeManager}
          >
            <img
              className="portfolio-image"
              src={employeeManager}
              alt="Employee Manager Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img
              className="portfolio-image"
              src={portfolio}
              alt="Portfolio React and Material UI Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxFitnessTracker}
          >
            <img
              className="portfolio-image"
              src={fitnessTracker}
              alt="Fitness Tracker React and Redux Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNote} />
      <PopupboxContainer {...popupboxConfigEmployeeManager} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigFitnessTracker} />
    </div>
  );
};

export default Portfolio;
