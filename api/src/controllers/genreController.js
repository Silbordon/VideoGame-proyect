require("dotenv").config();
const axios = require("axios");
const { Genre } = require("../db");
const { API_KEY } = process.env;

const getAllGenres = async () => {
  let dbGenres = await Genre.findAll();
  if (dbGenres.length !== 0) {
    return dbGenres;
  }

  // if db is empty
  let genresApi = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  let genresNames = genresApi.data.results.map((el) => {
    return {
      id: el.id,
      name: el.name,
    };
  });
  await Genre.bulkCreate(genresNames);
  return await Genre.findAll();
};

module.exports = getAllGenres;
