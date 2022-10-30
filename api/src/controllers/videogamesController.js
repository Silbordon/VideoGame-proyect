require("dotenv").config();
const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;

// total de videogames de la api con los de la db
const getVideogames = async (name, page) => {
  const apiData = await getApiVideogames();
  const dbData = await getDbVideoGames();

  let totalVideogames = [];
  if (dbData.length > 0) {
    totalVideogames = dbData.concat(apiData);
  } else {
    totalVideogames = apiData;
  }

  if (name){
    let result = totalVideogames.filter(el => { return el.name.toLowerCase().includes(name.toLowerCase()) });
    return paginateVideogames(result, 1);
  }

  // logica de paginacion
  return paginateVideogames(totalVideogames, page);
};

// trae los 100 primers videjuegos desde la api
const getApiVideogames = async () => {
  // inicializo array de videogames de la api externa
  let apiVideogames = [];
  // traer las 5 primeras paginas de la api
  for (let i = 1; i <= 5; i++) {
    let apiData = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
    );
    apiVideogames = apiVideogames.concat(apiData.data.results);
  }

  // mapeo videogames de la api con los campos requeridos
  let videogamesData = apiVideogames.map((el) => {
    return {
      id: el.id,
      name: el.name,
      genres: el.genres.map((gen) => gen.name),
      platforms: el.platforms.map((el) => el.platform.name),
      background_image: el.background_image,
    };
  });
  console.log(videogamesData);
  return videogamesData;
};

// trae todos los videojuegos de la db
const getDbVideoGames = async () => {
  return await Videogame.findAll({
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
};

const paginateVideogames = (totalVideogames, page) => {
  if (!page) {
    page = 1;
  }
  let start = (page - 1) * 15;
  let end = start + 15;
  return totalVideogames.slice(start, end);
};

module.exports = getVideogames
