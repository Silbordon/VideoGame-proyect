export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_VIDEOGAME_DETAILS = "GET_VIDEOGAME_DETAILS";
export const FILTER_GENRE = "FILTER_GENRE";
export const FILTER_SOURCE = "FILTER_SOURCE";
export const ORDER_BY_ALFABETIC = "ORDER_BY_ALFABETIC";
export const ORDER_BY_RATING = "ORDER_BY_RATING"


// export const REFRESH_VIDEOGAME_DETAILS = "REFRESH_VIDEOGAME_DETAILS"
// export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
// export const DELETE_VIDEOGAME = "DELETE_VIDEOGAME";

const initialState = {
  videogames: [],
  allVideoGames: [],
  videogameDetail: {},
  genres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        allVideoGames: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    //   case CREATE_MOVIE:
    //     return {
    //       ...state,
    //       movies: [...state.movies, action.payload],
    //     };

    case GET_VIDEOGAME_DETAILS:
      return {
        ...state,
        videogameDetail: action.payload,
      };

    case FILTER_GENRE:
      const allVideoGames = state.allVideoGames;
      const filteredVideogame = allVideoGames.filter((el) =>
        el.genres.includes(action.payload)
      );
      return {
        ...state,
        videogames: filteredVideogame,
      };

    case FILTER_SOURCE:
      const allVideoGamesSource = state.allVideoGames;
      const filterCreates =
        action.payload === "db"
          ? allVideoGamesSource.filter((el) => el.createInDb)
          : allVideoGamesSource.filter((el) => !el.createInDb);
      return {
        ...state,
        videogames:
          action.payload === "all" ? allVideoGamesSource : filterCreates,
      };

      case ORDER_BY_ALFABETIC:
        let sortAlfabetic= action.payload === "a-z" ?
        state.videogames.sort(function (a,b){
          if(a.name > b.name){
            return 1;
          }
          if(b.name > a.name){
            return -1;
          }
          return 0
        }) :
        state.videogames.sort(function (a,b){
          if(a.name > b.name){
            return -1;
          }
          if(b.name > a.name){
            return 1;
          }
          return 0
        })
        return {
          ...state,
          videogames: sortAlfabetic
        };
  

        case ORDER_BY_RATING:
        let sortRating= action.payload === "0-5" ?
        state.videogames.sort(function (a,b){
          if(a.rating > b.rating){
            return 1;
          }
          if(b.rating > a.rating){
            return -1;
          }
          return 0
        }) :
        state.videogames.sort(function (a,b){
          if(a.rating > b.rating){
            return -1;
          }
          if(b.rating > a.rating){
            return 1;
          }
          return 0
        })
        return {
          ...state,
          videogames: sortRating
        };

     
    // case  REFRESH_VIDEOGAME_DETAILS:
    //   return {
    //     ...state,
    //     videogameDetail: action.payload,
    //   };

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
