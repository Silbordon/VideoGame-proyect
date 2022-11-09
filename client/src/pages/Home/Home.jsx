import React from "react";
import style from "./Home.module.css";
//component
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import CreateVideogame from "../../components/CreateVideogame/CreateVideogame";
import Pagination from "../../components/Pagination/Pagination";
import SearchVideogame from "../../components/SearchVideogame/SearchVideogame";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions/REDUX
import {
  getAllVideogames,
  filterByGenre,
  getGenres,
  getPlatforms,
  filterSource,
  orderAlfabetic,
  orderRating,
  filterByPlatforms,
  changeLoader,
} from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  //logica paginado
  const [page, setPage] = useState(1);
  const [pageBooleano, setPageBooleano] = useState(false); //logica de mostrar el paginado
  const [order, setOrder] = useState("");
  const [order2, setOrder2] = useState("");

  //logica de get genres
  const allGenres = useSelector((state) => state.genres);

  //logica de get platforms
  const allPlatforms = useSelector((state) => state.platforms);

  //logica del boton de create para el renderizado del form
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const openModal = () => setIsVisibleModal(true);
  const closeModal = () => setIsVisibleModal(false);

  useEffect(() => {
    dispatch(changeLoader());
    dispatch(getGenres());
    dispatch(getPlatforms());
    dispatch(getAllVideogames());
    setPageBooleano(false);
  }, [dispatch]);

  //logica de filtrados:

  //generos
  const handlerFilterGenre = (e) => {
    setPage(1);
    if (e.target.value) dispatch(filterByGenre(e.target.value));
  };

  //plataformas
  const handlerFilterPlatforms = (e) => {
    setPageBooleano(false);
    setPage(1);
    if (e.target.value) dispatch(filterByPlatforms(e.target.value));
  };

  //origen de creacion
  const handlerFilterSource = (e) => {
    setPageBooleano(false);
    setPage(1);
    // console.log(e.target.value);
    if (e.target.value) dispatch(filterSource(e.target.value));
  };

  //logica de ordenamientos
  const handlerOrderByAlfabetic = (e) => {
    e.preventDefault();
    setPageBooleano(false);
    setPage(1);
    if (e.target.value) dispatch(orderAlfabetic(e.target.value));
    setOrder(e.target.value);
  };

  // console.log(pageBooleano)

  const handlerOrderByRating = (e) => {
    e.preventDefault();
    setPageBooleano(false);
    setPage(1);
    if (e.target.value) dispatch(orderRating(e.target.value));
    setOrder2(e.target.value);
  };


  //logica reset btn
  const handleReset = (e) =>{
    e.preventDefault();
    dispatch(changeLoader());
    dispatch(getAllVideogames());
    setPageBooleano(false);
  }

  if (isVisibleModal === false) {
    return (
      <div className={style.generalContainer}>
        <div className={style.bannerContainer}>
          <h1 className={style.landingTitle}>The Super Mega VideoGame Site</h1>
          <div className={style.filtersContainer}>
            <div className={style.selectContainer}>
              <label for="order">A-Z/Z-A-order</label>
              <select
                onChange={(e) => handlerOrderByAlfabetic(e)}
                className={style.select}
                name="order"
                id="order"
              >
                <option></option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>
            <div className={style.selectContainer}>
              <label for="order">Order-Rating</label>
              <select
                onChange={(e) => handlerOrderByRating(e)}
                className={style.select}
                name="order"
                id="order"
              >
                <option></option>
                <option value="0-5">0-5</option>
                <option value="5-0">5-0</option>
              </select>
            </div>
            <div className={style.selectContainer}>
              <label for="order">Filter-Gender</label>
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
              <label for="order">Filter-Platform</label>
              <select
                onChange={(e) => handlerFilterPlatforms(e)}
                className={style.select}
                name="order"
                id="order"
              >
                <option></option>
                {allPlatforms?.map((el) => {
                  return (
                    <option key={el.id} value={el.name}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={style.selectContainer}>
              <label for="order">Filter-Source</label>
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
            <button onClick={(e)=>handleReset(e)} className={style.btn}>
              Reset
            </button>
          </div>
          <SearchVideogame setPageBooleano={setPageBooleano} />
          {pageBooleano === false ? (
            <Pagination page={page} setPage={setPage} />
          ) : null}
          <CardsContainer page={page} />
        </div>
      </div>
    );
  } else {
    return <CreateVideogame func={closeModal} />;
  }
};

export default Home;
