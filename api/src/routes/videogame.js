const { Router } = require("express");
const router = Router();
const getVideogameById = require("../controllers/videogameController");
const { Videogame } = require("../db");


router.get("/:idVideogame", async (req, res) => {
  let { idVideogame } = req.params;
  try {
    res.status(200).json(await getVideogameById(idVideogame));
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});


router.delete("/:idVideogame", async (req, res) => {
  let { idVideogame } = req.params;

  const deleteFc = async(id) =>{
    const newVideogame = Videogame.destroy({
      where:{id}
    })
    return newVideogame
  }
  try {
    res.status(200).json(await deleteFc(idVideogame));
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});






module.exports = router;
