import axios from "axios";
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_VIDEOGAMES_BYNAME = "GET_VIDEOGAMES_BYNAME";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_VIDEOGAME_DETAILS = "GET_VIDEOGAME_DETAILS";
export const FILTER_GENRE = "FILTER_GENRE";
export const FILTER_PLATFORM = " FILTER_PLATFORM";
export const FILTER_SOURCE = "FILTER_SOURCE";
export const ORDER_BY_ALFABETIC = "ORDER_BY_ALFABETIC";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const CHANGE_LOADER = "CHANGE_LOADER";
// export const REFRESH_VIDEOGAME_DETAILS = "REFRESH_VIDEOGAME_DETAILS"
// export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
// export const DELETE_VIDEOGAME = "DELETE_VIDEOGAME";

export const getAllVideogames = () => {
  return async function (dispatch) {
    try {
      let respuesta = await axios.get("http://localhost:3001/videogames");
      return dispatch({
        type: GET_ALL_VIDEOGAMES,
        payload: respuesta.data,
      });
    } catch (err) {}
  };
};

export const getVideogamesByName = (search) => {
  return async function (dispatch) {
    try {
      let respuesta = await axios.get(
        `http://localhost:3001/videogames?name=${search}`
      );
      return dispatch({
        type: GET_VIDEOGAMES_BYNAME,
        payload: respuesta.data,
      });
    } catch (err) {}
  };
};

export const getGenres = () => {
  return async function (dispatch) {
    try {
      let respuesta = await axios.get("http://localhost:3001/genres");
      return dispatch({
        type: GET_GENRES,
        payload: respuesta.data,
      });
    } catch (err) {}
  };
};

export const getPlatforms = () => {
  return async function (dispatch) {
    try {
      let respuesta = await axios.get("http://localhost:3001/platforms");
      return dispatch({
        type: GET_PLATFORMS,
        payload: respuesta.data,
      });
    } catch (err) {}
  };
};

export const getVideogameDetail = (id) => {
  return async (dispatch) => {
    try {
      const respuesta = await axios.get(
        `http://localhost:3001/videogame/${id}`
      );
      return dispatch({ type: GET_VIDEOGAME_DETAILS, payload: respuesta.data });
    } catch (err) {}
  };
};

export const postVideogames = (payload) => {
  return async function () {
    try {
      let respuesta = await axios.post("http://localhost:3001/videogames",payload);
      return respuesta;
    } catch (err) {}
  };
};


export const filterByGenre = (payload) => {
  return {
    type: FILTER_GENRE,
    payload,
  };
};

export const filterByPlatforms = (payload) => {
  return {
    type: FILTER_PLATFORM,
    payload,
  };
};

export const filterSource = (payload) => {
  return {
    type: FILTER_SOURCE,
    payload,
  };
};

export const orderAlfabetic = (payload) => {
  return {
    type: ORDER_BY_ALFABETIC,
    payload,
  };
};

export const orderRating = (payload) => {
  return {
    type: ORDER_BY_RATING,
    payload,
  };
};


export const changeLoader = () =>{
  return{
    type : CHANGE_LOADER,
    payload : true
  }
}


// export const deleteVideogame = (id) => {
//     return {
//       type: DELETE_MOVIE,
//       payload: id,
//     };
//   };
