import React from "react";
import style from "./CardDetail.module.css";
import img from "../../img/img2.webp";
import { NavLink } from "react-router-dom";

const CardDetail = () => {
  return (
    <div className={style.detailContainer}>
      <NavLink className={style.btn} to="/videogames">
        Back Home
      </NavLink>
      <img className={style.cardImg} src={img} alt="" />
      <div className={style.detailText}>
        <h3 className={style.cardTitle}>Nombre</h3>
        <h4 className={style.cardInf}>
          Genres:
          <span className={style.cardSpan}>Horror</span>
        </h4>
        <h4 className={style.cardInf}>
          Description:
          <span className={style.cardSpan}>Horror</span>
        </h4>
        <h4 className={style.cardInf}>
          Released:
          <span className={style.cardSpan}>Horror</span>
        </h4>
        <h4 className={style.cardInf}>
          Platfmors:
          <span className={style.cardSpan}>Horror</span>
        </h4>
        <h4 className={style.cardInf}>
          Rating:
          <span className={style.cardSpan}>Horror</span>
        </h4>
      </div>
    </div>
  );
};

export default CardDetail;
