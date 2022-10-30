import axios from "axios";
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
// export const GET_VIDEOGAME_DETAILS = "GET_VIDEOGAME_DETAILS";
// export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
// export const DELETE_VIDEOGAME = "DELETE_VIDEOGAME";

export const getAllMovies = () => { 
    return async function (dispatch) {
       try {
         let respuesta = await axios.get(' http://localhost:3001/videogames');
         return dispatch({
           type:GET_ALL_VIDEOGAMES, 
           payload:respuesta.data })
       }
       catch (err){ }; 
      };
};

// export const getVideogameDetail = (id) => {
//         return async (dispatch) => {
//           try {
//             const respuesta = await axios.get(`http://localhost:3001/movies/${id}`);
//             return dispatch({type:GET_MOVIE_DETAILS, payload:respuesta.data })
//           }
//           catch (err) {
//           }
//         };
//  };



// export const createVideogame = (payload) => {
//     return {
//         type: CREATE_MOVIE,
//         payload: { ...payload,
//             id : id++,
//         },
//       };
//  };


// export const deleteVideogame = (id) => {
//     return {
//       type: DELETE_MOVIE,
//       payload: id,
//     };
//   };


