import React from "react";
import style from "./Card.module.css";
import { NavLink } from 'react-router-dom';

const Card = ({background_image, name, genres, platforms}) => {
  return (
    <div className={style.cardContainer}>
      <img className={style.cardImg} src={background_image} alt="" />
      <h3 className={style.cardTitle}>{name}</h3>
      <div>
      <h4 className={style.cardInf}>
        Genres:
        <span className={style.cardSpan}>{genres.toString()}</span>
      </h4>
      <h4 className={style.cardInf}>
        Platfmors:
        <span className={style.cardSpan}>{platforms.toString()}</span>
      </h4>
      </div>
      <NavLink to={`/videogame/id`} className={style.detailLink}>
        More Details
      </NavLink>
    </div>
  );
};

export default Card;
