require("dotenv").config();
const { Genre, Videogame } = require("../db");

const createVideogame = async (id,name,description,release,rating, createInDb, genres, platforms) => {
    console.log(genres);
    if(!name  && !description && !genres && !platforms){
        throw new Error("falta completar datos");
      }
  let videoGamecreate = await Videogame.create({
    id,
    name,
    description,
    release,
    rating,
    createInDb,
    platforms
  });

//genres > [ 'Action', 'Adventure', 'Casual', 'Indie' ]

    let genreDb = await Genre.findAll({
                  where: {name : genres}
              })
    videoGamecreate.addGenre(genreDb)
    console.log(genreDb)
};
    
   

module.exports = createVideogame;


  