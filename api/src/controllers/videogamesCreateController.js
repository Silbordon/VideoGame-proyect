require("dotenv").config();
const { Genre, Videogame, Platforms } = require("../db");

const createVideogame = async (
  id,
  name,
  description,
  released,
  background_image,
  rating,
  createInDb,
  genres,
  platforms
) => {
  console.log(genres);
  if (!name && !description && !genres && !platforms) {
    throw new Error("falta completar datos");
  }
  let videoGamecreate = await Videogame.create({
    id,
    name,
    description,
    released,
    background_image,
    rating,
    createInDb,
  });


  let genreDb = await Genre.findAll({
    where: { name: genres },
  });
  videoGamecreate.addGenre(genreDb);
  console.log(genreDb);

  let platformsDb = await Platforms.findAll({
    where: { name: platforms },
  });
  videoGamecreate.addPlatforms(platformsDb);
  console.log(platformsDb);
};

module.exports = createVideogame;
