import React from "react";
import style from "./Home.module.css";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import CreateVideogame from "../../components/CreateVideogame/CreateVideogame";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllVideogames,
  filterByGenre,
  getGenres,
  filterSource,
  orderAlfabetic,
  orderRating
} from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getAllVideogames());
  }, [dispatch]);

  //logica paginado
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("")
  const [order2, setOrder2] = useState("")


  //logica de get genres
  const allGenres = useSelector((state) => state.genres);
  
  //logica del boton de create para el renderizado del form
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const openModal = () => setIsVisibleModal(true);
  const closeModal = () => setIsVisibleModal(false);

  //logica de filtrados:
  //generos
  const handlerFilterGenre = (e) => {
    setPage(1);
    if (e.target.value) dispatch(filterByGenre(e.target.value));
  };
  //origen
  const handlerFilterSource = (e) => {
    setPage(1);
    console.log(e.target.value)
    if (e.target.value) dispatch(filterSource(e.target.value));
  };



  //logica de ordenamientos
  const handlerOrderByAlfabetic = (e) => {
    e.preventDefault()
    setPage(1);
    if (e.target.value) dispatch(orderAlfabetic(e.target.value));
    setOrder(e.target.value)
  };


  const handlerOrderByRating = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    setPage(1);
    if (e.target.value) dispatch(orderRating(e.target.value));
    setOrder2(e.target.value)
  };


  if (isVisibleModal === false) {
    return (
      <div className={style.generalContainer}>
        <div className={style.bannerContainer}>
          <h1>La Super Mega API de VideoJuegos</h1>
          <div className={style.filtersContainer}>
            <div className={style.selectContainer}>
              <label for="order">Order by</label>
              <select 
                   onChange={(e) => handlerOrderByAlfabetic(e)}
                  className={style.select} 
                  name="order" 
                  id="order">
                     <option></option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
              </select>
            </div>
            <div className={style.selectContainer}>
              <label for="order">Rating</label>
              <select 
               onChange={(e) => handlerOrderByRating(e)}
                className={style.select} 
                name="order" 
                id="order">
                   <option></option>
                  <option value="0-5">0-5</option>
                  <option value="5-0">5-0</option>
              </select>
            </div>
            <div className={style.selectContainer}>
              <label for="order">Genres</label>
              <select
                onChange={(e) => handlerFilterGenre(e)}
                className={style.select}
                name="order"
                id="order"
              >
                <option></option>
                {allGenres?.map((el) => {
                  return (
                    <option key={el.id} value={el.name}>
                      {el.name}
                    </option>
                  );
                })}
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
              <label for="order">Source</label>
              <select
                onChange={(e) => handlerFilterSource(e)}
                className={style.select}
                name="order"
                id="order"
              >
                <option></option>
                <option value="all">All</option>
                <option value="api">API</option>
                <option value="db">DB</option>
              </select>
            </div>
            <button onClick={openModal} className={style.btn}>
              Create Videogame
            </button>
          </div>
          <div className={style.inputContainer}>
            <input
              placeholder="busca por el nombre"
              className={style.input}
              type="text"
            />
            <button className={style.btn}>Search</button>
          </div>
          <Pagination page={page} setPage={setPage} />
          <CardsContainer page={page} />
        </div>
      </div>
    );
  } else {
    return <CreateVideogame func={closeModal} />;
  }
};

export default Home;
