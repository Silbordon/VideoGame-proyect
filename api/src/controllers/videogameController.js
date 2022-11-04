require("dotenv").config();
const axios = require("axios");
const { Videogame, Genre, Platforms} = require("../db");
const { API_KEY } = process.env;

// total de videogames de la api con los de la db
const getVideogameById = async (idVideogame) => {
//valido si el ID tiene formato de uuii para ver si lo buscamos en la DB o en la api
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    const testId = regexExp.test(idVideogame)
    console.log(testId)
//si el id da true y es de tipo uuii lo busco en la db
    if(testId){
        const dbDataById = await getDbVideoGames(idVideogame);
       return dbDataById
    }else{
        const apiDataById = await getApiVideogamesById(idVideogame);
        return apiDataById
    }
};

// busco por id dentro de la api externa
const getApiVideogamesById = async (idVideogame) => {
  let apiData = await axios.get(
    `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`
  );
  let genres = apiData.data.genres.map(g => g.name).join(', ');
  let platforms = apiData.data.platforms.map(g => g.platform.name).join(', ');
  // y retorno con los campos requeridos
  let videogameDetails = {
    id: apiData.data.id,
    name: apiData.data.name,
    background_image: apiData.data.background_image,
    description: apiData.data.description_raw,
    released: apiData.data.released,
    rating: apiData.data.rating,
    platforms: platforms,
    genres: genres,  
      };
      return videogameDetails
};

// trae el videojuego por id de la db
const getDbVideoGames = async (idVideogame) => {
    return await Videogame.findByPk(idVideogame, {
        include: [
            {
              model: Genre,
              attributes: ["name"],
              through: {
                attributes: [],
              },
            },
            {
              model: Platforms,
              attributes: ["name"],
              through: {
                attributes: [],
              },
            }
          ],
})
};

module.exports = getVideogameById;
