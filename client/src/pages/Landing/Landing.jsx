import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.textContainer}>
        <div className={style.landingTitle}>
          <p>Welcome!</p>
          <p>what are you waiting for to start?</p>
        </div>
        <NavLink to="/videogames" className={style.start}>
          START
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
