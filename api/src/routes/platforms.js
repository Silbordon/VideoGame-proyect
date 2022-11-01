const { Router } = require("express");
const router = Router();
const getAllPlatforms = require("../controllers/platformController.js");

router.get("/", async (req, res) => {
  try {
    res.status(200).json( await getAllPlatforms());
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports = router;