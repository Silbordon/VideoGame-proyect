export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
// export const GET_VIDEOGAME_DETAILS = "GET_VIDEOGAME_DETAILS";
// export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
// export const DELETE_VIDEOGAME = "DELETE_VIDEOGAME";

const initialState = {
  videogames: [],
  // videogameDetail: {},
  // genres: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };

  //   case CREATE_MOVIE:
  //     return {
  //       ...state,
  //       movies: [...state.movies, action.payload],
  //     };

  //   case GET_MOVIE_DETAILS:
  //     return {
  //       ...state,
  //       movieDetail: action.payload,
  //     };

  //   case DELETE_MOVIE:
  //     return {
  //       ...state,
  //       movies: state.movies.filter((movie) => movie.id !== action.payload),
  //     };

    default:
      return state;
  }
};

export default rootReducer;
