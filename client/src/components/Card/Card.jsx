import React from "react";
import style from "./Card.module.css";
import { NavLink } from 'react-router-dom';

const Card = ({id,background_image, name, genres, platforms}) => {

let newGenres;
let newPlatforms;
  if(typeof genres[0] === 'string'){
    newGenres = genres.toString()
    newPlatforms = platforms.toString()
  }else{
    newGenres = (genres.map(e=> e.name)).toString()
    newPlatforms = (platforms.map(e=> e.name)).toString()
  }
  // console.log(newGenres);
  // console.log(newPlatforms);

  return (
    <div className={style.cardContainer}>
      <img className={style.cardImg} src={background_image} alt="" />
      <h3 className={style.cardTitle}>{name}</h3>
      <div>
      <h4 className={style.cardInf}>
        Genres:
        <span className={style.cardSpan}>{newGenres}</span>
      </h4>
      <h4 className={style.cardInf}>
        Platfmors:
        <span className={style.cardSpan}>{newPlatforms}</span>
      </h4>
      </div>
      <NavLink to={`/videogame/${id}`} className={style.detailLink}>
        More Details
      </NavLink>
    </div>
  );
};

export default Card;
