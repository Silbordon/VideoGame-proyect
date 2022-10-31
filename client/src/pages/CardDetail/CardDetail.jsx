import React from "react";
import style from "./CardDetail.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux"; 
import {  getVideogameDetail} from '../../redux/actions';

const CardDetail = () => {

const dispatch = useDispatch()
const idVideogame = useParams()
let id = idVideogame.id


    useEffect (()=>{
        dispatch( getVideogameDetail(id))
    }, [dispatch, id])


const videogameDetail = useSelector((state) => state.videogameDetail)
console.log("desde detalles",videogameDetail)


  return (
    <div className={style.detailContainer}>
      <NavLink className={style.btn} to="/videogames">
        Back Home
      </NavLink>
      <img className={style.cardImg} src={videogameDetail.background_image} alt="" />
      <div className={style.detailText}>
        <h3 className={style.cardTitle}>{videogameDetail.name}</h3>
        <h4 className={style.cardInf}>
          Description:
          <span className={style.cardSpan}>{videogameDetail.description}</span>
        </h4>
        <h4 className={style.cardInf}>
          Released:
          <span className={style.cardSpan}>{videogameDetail.released}</span>
        </h4>
        <h4 className={style.cardInf}>
          Genres:
          <span className={style.cardSpan}>{videogameDetail.genres}</span>
        </h4>
        <h4 className={style.cardInf}>
          Platfmors:
          <span className={style.cardSpan}>{videogameDetail.platforms}</span>
        </h4>
        <h4 className={style.cardInf}>
          Rating:
          <span className={style.cardSpan}>{videogameDetail.rating}</span>
        </h4>
      </div>
    </div>
  );
};

export default CardDetail;
