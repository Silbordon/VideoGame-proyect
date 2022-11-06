import { GET_ALL_VIDEOGAMES,GET_VIDEOGAMES_BYNAME, GET_VIDEOGAME_DETAILS, GET_GENRES, GET_PLATFORMS, FILTER_GENRE, FILTER_PLATFORM, FILTER_SOURCE, ORDER_BY_ALFABETIC, ORDER_BY_RATING, CHANGE_LOADER } from "../actions";


// export const DELETE_VIDEOGAME = "DELETE_VIDEOGAME";

const initialState = {
  videogames: [],
  allVideoGames: [],
  videogameDetail: {},
  genres: [],
  platforms: [],
  isLoader : false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        allVideoGames: action.payload,
        isLoader : false
      };

    case GET_VIDEOGAMES_BYNAME:
      return {
        ...state,
        videogames: action.payload,
        isLoader : false
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };


    case GET_VIDEOGAME_DETAILS:
      return {
        ...state,
        videogameDetail: action.payload,
        isLoader : false
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

    case FILTER_PLATFORM:
      const allVideoGamesPlat = state.allVideoGames;
      const filteredVideogamePlat = allVideoGamesPlat.filter((el) =>
        el.platforms.includes(action.payload)
      );
      return {
        ...state,
        videogames: filteredVideogamePlat,
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
      let sortAlfabetic =
        action.payload === "a-z"
          ? state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortAlfabetic,
      };

    case ORDER_BY_RATING:
      let sortRating =
        action.payload === "0-5"
          ? state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return -1;
              }
              if (b.rating > a.rating) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortRating,
      };

      //paso el isLoader a true
      case CHANGE_LOADER:
        return{
          ...state,
          isLoader : true
        }

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
