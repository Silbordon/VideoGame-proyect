import React from "react";
import style from "./CreateVideogame.module.css";
import { NavLink } from "react-router-dom";

const CreateVideogame = ({ func }) => {
  return (
    <form className={style.generalContainer}>
      <div className={style.bannerContainer}>
        <div className={style.formContainer}>
          <h3>Create new Videogame</h3>
          <div className={style.inputContainer}>
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="">Description: </label>
            <textarea type="text" />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="">Realeased Date: </label>
            <input type="text" />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="">Rating: </label>
            <input min="1" max="5" type="number" />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="">Image-URL </label>
            <input type="text" />
          </div>
          <div className={style.selectContainer}>
            <div>
              <label for="order">Genres</label>
              <select className={style.select} name="order" id="order">
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>
            <div>
              <label for="order">Platfmors</label>
              <select className={style.select} name="order" id="order">
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>
          </div>
          <div className={style.btnContainer}>
            <button className={style.btnSubmit} type="submit">
              Create
            </button>
            <NavLink
              className={style.btnCancel}
              onClick={func}
              to="/videogames"
            >
              Cancel
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateVideogame;
