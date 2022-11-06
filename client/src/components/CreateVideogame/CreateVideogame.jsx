import React from "react";
import style from "./CreateVideogame.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validation } from "./validations";
//actions/REDUX
import { getAllVideogames, getGenres, getPlatforms, postVideogames, changeLoader } from "../../redux/actions";

const CreateVideogame = ({ func }) => {
  const dispatch = useDispatch();
 
  //logica de get genres
  const allGenres = useSelector((state) => state.genres);

  //logica de get platforms
  const allPlatforms = useSelector((state) => state.platforms);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    background_image: "",
    rating: "",
    genres: [],
    platforms: [],
  });

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  //logica de modificar el input
  const handlerInputvalue = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };


  const handlerselectvalue = (e) => {
    if (input[e.target.name].includes(e.target.value) === false) {
      setInput({
        ...input,
        [e.target.name]: [...input[e.target.name], e.target.value],
      });
    } else {
      return alert("OPPS! :( you can not repeat the same choice");
    }
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  // console.log(errors);

  const deleteOptionGenres = (e, element) => {
    e.preventDefault();
    const newGenres = input.genres.filter((el) => el !== element);
    setInput({
      ...input,
      genres: newGenres,
    });
  };

  const deleteOptionPlatforms = (e, element) => {
    e.preventDefault();
    const newPlatforms = input.platforms.filter((el) => el !== element);
    setInput({
      ...input,
      platforms: newPlatforms,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postVideogames(input));
    alert("Successfully created Videogame");
    setInput({
      name: "",
      description: "",
      released: "",
      background_image: "",
      rating: "",
      genres: [],
      platforms: [],
    });
    func()
    dispatch(changeLoader())
    dispatch(getAllVideogames())
  };

  return (
    <form
      onSubmit={(e) => {
        handlerSubmit(e);
      }}
      className={style.generalContainer}
    >
      <div className={style.bannerContainer}>
        <div className={style.formContainer}>
          <h3>Create new Videogame</h3>
          <div className={style.inputContainer}>
            <label for="name">Name: </label>
            <input
              placeholder="Game`s name"
              onChange={(e) => handlerInputvalue(e)}
              value={input.name}
              type="text"
              name="name"
              id="name"
            />
          </div>
          {errors.name && <p className={style.danger}>{errors.name}</p>}
          <div className={style.inputContainer}>
            <label for="released">Realeased Date: </label>
            <input
              name="released"
              placeholder="YYYY-MM-DD"
              onChange={(e) => handlerInputvalue(e)}
              value={input.released}
              type="text"
            />
          </div>
          {errors.released && <p className={style.danger}>{errors.released}</p>}
          <div className={style.inputContainer}>
            <label for="rating">Rating: </label>
            <input
              name="rating"
              placeholder='4.9'
              onChange={(e) => handlerInputvalue(e)}
              value={input.rating}
              min="1"
              max="5"
              type="number"
            />
          </div>
          {errors.rating && <p className={style.danger}>{errors.rating}</p>}
          <div className={style.inputContainer}>
            <label for="background_image">Image-URL </label>
            <input
              placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpCW4O6AT0orARolhUqwpgg4auA-MmmB8-LaALvB1zZNszhjGmrPzZ0wSVwznLpk-n8nU&usqp=CAU"
              name="background_image"
              onChange={(e) => handlerInputvalue(e)}
              value={input.background_image}
              type="text"
            />
          </div>
          {errors.background_image && <p className={style.danger}>{errors.background_image}</p>}
          <div className={style.inputContainer}>
            <label for="description">Description: </label>
            <textarea
              name="description"
              maxLength="100"
              placeholder="This game is characterized by"
              onChange={(e) => handlerInputvalue(e)}
              value={input.description}
              type="text"
            />
          </div>
          {errors.description && <p className={style.danger}>{errors.description}</p>}
          <div className={style.selectsContainer}>
            <div className={style.selectContainer}>
              <label for="genres">Genres</label>
              <select
                onChange={(e) => handlerselectvalue(e)}
                className={style.select}
                name="genres"
                id="genres"
              >
                {allGenres?.map((el) => {
                  return (
                    <option key={el.id} value={el.name}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
              <div>
                {input.genres?.map((element, i) => {
                  return (
                    <div key={i} className={style.optionSelectContainer}>
                      <p>{element}</p>
                      <button onClick={(e) => deleteOptionGenres(e, element)}>
                        X
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            {errors.genres && <p className={style.danger}>{errors.genres}</p>}
            <div className={style.selectContainer}>
              <label for="platforms">Platforms</label>
              <select
                onChange={(e) => handlerselectvalue(e)}
                className={style.select}
                name="platforms"
                id="platforms"
              >
                {allPlatforms?.map((el) => {
                  return (
                    <option key={el.id} value={el.name}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
              <div>
                {input.platforms?.map((element, i) => {
                  return (
                    <div key={i} className={style.optionSelectContainer}>
                      <p>{element}</p>
                      <button
                        onClick={(e) => deleteOptionPlatforms(e, element)}
                      >
                        X
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            {errors.platforms && <p className={style.danger}>{errors.platforms}</p>}
          </div>

          <div className={style.btnContainer}>
            <button className={Object.entries(errors).length !== 0 ? style.none : style.btnSubmit} type="submit">
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
