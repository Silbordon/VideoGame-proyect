require("dotenv").config();
const { Genre, Videogame, Platforms } = require("../db");

const createVideogame = async (
  name,
  description,
  released,
  background_image,
  rating,
  createInDb,
  genres,
  platforms
) => {
  // console.log(genres);
  if (!name && !description && !genres && !platforms) {
    throw new Error("missing_data");
  }

  let videoGameName = await Videogame.findOne({
    where: { name },
  });

  if (videoGameName) {
    throw new Error("videogame_exits");
  }

  let videoGamecreate = await Videogame.create({
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
  // console.log(genreDb);

  let platformsDb = await Platforms.findAll({
    where: { name: platforms },
  });
  videoGamecreate.addPlatforms(platformsDb);
  // console.log(platformsDb);
};

module.exports = createVideogame;
