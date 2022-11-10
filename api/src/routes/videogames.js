const { Router } = require("express");
const router = Router();
const getVideogames = require("../controllers/videogamesController.js");
const createVideogame = require("../controllers/videogamesCreateController.js");
const { Videogame, Genre, Platforms } = require("../db");

router.get("/", async (req, res) => {
  let { name } = req.query;
  let { page } = req.query;
  try {
    res.status(200).json(await getVideogames(name, page));
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

router.post("/", async (req, res) => {
  let {
    name,
    description,
    released,
    background_image,
    rating,
    createInDb,
    genres,
    platforms,
  } = req.body;

  try {
    res
      .status(200)
      .json(
        await createVideogame(
          name,
          description,
          released,
          background_image,
          rating,
          createInDb,
          genres,
          platforms
        )
      );
  } catch (error) {
    if (error.message === "videogame_exits") {
      return res
        .status(400)
        .json({ err: "Sorry this videogame already exists" });
    }
    if (error.message === "missing_data") {
      return res.status(400).json({ err: "Sorry you are missing some data" });
    }
    return res.status(500).json({ err: error.message });
  }
});





router.put("/", async (req, res) => {
  let {id,name, description,released,background_image, rating, createInDb, genres,platforms} = req.body;
  
  const putVideogame = async (
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
    const newVideogame = await Videogame.update(
      {
        name,
        description,
        released,
        background_image,
        rating,
        createInDb: true,
      },
      {
        where: { id: id },
      }
    );

    let updatedVideoGame = await Videogame.findByPk(id, {
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
        },
      ],
    });

 
    let genreDb = await Genre.findAll({
      where: { name: genres },
    });
    updatedVideoGame.setGenres(genreDb);

    let platformsDb = await Platforms.findAll({
      where: { name: platforms },
    });
    updatedVideoGame.setPlatforms(platformsDb);
  };

  try {
    res
      .status(200)
      .json(
        await putVideogame(
          id,
          name,
          description,
          released,
          background_image,
          rating,
          createInDb,
          genres,
          platforms
        )
      );
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports = router;
