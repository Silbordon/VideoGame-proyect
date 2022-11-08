require("dotenv").config();
const axios = require("axios");
const { Platforms } = require("../db");
const { API_KEY, URL } = process.env;

const getAllPlatforms = async () => {
  let dbPlatforms = await Platforms.findAll();
  if (dbPlatforms.length !== 0) {
    return dbPlatforms;
  }

  let apiVideogames = [];
  // traer las 5 primeras paginas de la api
  for (let i = 1; i <= 5; i++) {
    let apiData = await axios.get(
      `${URL}/games?key=${API_KEY}&page=${i}`
    );
    apiVideogames = apiVideogames.concat(apiData.data.results);
  }
  // mapeo videogames de la api para obtener las plataformas. pero solo de las primeras 100
//   console.log(apiVideogames.length)
  let videogamesData = apiVideogames.map((el) =>
    el.platforms.map((el) => el.platform.name)
  );
  //videogames es un array con array hijos [[],[],[]]
  console.log(videogamesData);

  videogamesData.forEach((e) => {
    e.forEach((el) => {
      Platforms.findOrCreate({
        where: { name: el },
      });
    });
  });
  return await Platforms.findAll();
};

module.exports = getAllPlatforms;
