import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Home.module.css";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

const home = () => {
  return (
    <div className={style.generalContainer}>
      <div className={style.bannerContainer}>
        <h1>La Super Mega API de VideoJuegos</h1>
        <div className={style.filtersContainer}>
          <div className={style.selectContainer}>
            <label for="order">Order by</label>
            <select className={style.select} name="order" id="order">
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
          <div className={style.selectContainer}>
            <label for="order">Order by Rating</label>
            <select className={style.select} name="order" id="order">
              <option value="0-5">0-5</option>
              <option value="5-0">5-0</option>
            </select>
          </div>
          <div className={style.selectContainer}>
            <label for="order">Genres</label>
            <select className={style.select} name="order" id="order">
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
          <div className={style.selectContainer}>
            <label for="order">Platfmors</label>
            <select className={style.select} name="order" id="order">
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
          <div className={style.selectContainer}>
            <label for="order">All</label>
            <select className={style.select} name="order" id="order">
              <option value="a-z">All</option>
              <option value="z-a">API</option>
              <option value="z-a">DB</option>
            </select>
          </div>
          <button className={style.btn}>Create Videogame</button>
        </div>
        <div className={style.inputContainer}>
        <input placeholder="busca por el nombre" className={style.input} type="text" />
        <button className={style.btn}>Search</button>
      </div>
      <div className={style.paginationContainer}>
        <button className={style.pageBtn}>Next</button>
        <p className={style.pageNumber}>1</p>
        <button className={style.pageBtn}>Preview</button>
      </div>
      <CardsContainer />
      </div>
    </div>
  );
};

export default home;
