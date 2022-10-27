const { Router } = require("express");
const router = Router();
const getAllGenres = require("../controllers/genreController");

router.get("/", async (req, res) => {
  try {
    res.status(200).json( await getAllGenres());
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports = router;