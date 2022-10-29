import React from "react";
import style from "./Card.module.css";
import img from "../../img/img2.webp";
import { NavLink } from 'react-router-dom';


const Card = () => {
  return (
    <div className={style.cardContainer}>
      <img className={style.cardImg} src={img} alt="" />
      <h3 className={style.cardTitle}>Nombre</h3>
      <h4 className={style.cardInf}>
        Genres:
        <span className={style.cardSpan}>Horror</span>
      </h4>
      <h4 className={style.cardInf}>
        Platfmors:
        <span className={style.cardSpan}>Horror</span>
      </h4>
      <NavLink to={`/videogame/id`} className={style.detailLink}>
        More Details
      </NavLink>
    </div>
  );
};

export default Card;
