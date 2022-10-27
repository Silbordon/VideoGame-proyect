const { Router } = require("express");
const router = Router();
const getVideogameById = require("../controllers/videogameController");

router.get("/:idVideogame", async (req, res) => {
  let { idVideogame } = req.params;
  try {
    res.status(200).json(await getVideogameById(idVideogame));
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports = router;
