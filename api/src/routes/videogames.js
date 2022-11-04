const { Router } = require("express");
const router = Router();
const getVideogames = require("../controllers/videogamesController.js");
const createVideogame = require("../controllers/videogamesCreateController.js")

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
    let { id,name,description,released, background_image,rating, createInDb, genres, platforms } = req.body;
    
    try {
      res.status(200).json(await createVideogame(id,name,description,released, background_image,rating, createInDb, genres, platforms));
    } catch (error) {
      res.status(500).json({ err: error.message });
    }
  });


module.exports = router;
