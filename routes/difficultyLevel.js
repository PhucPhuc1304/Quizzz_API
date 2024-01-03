const express = require("express");
const router = express.Router();
const DifficultyLevelValidate = require("../validates/difficulty_level");
const difficultyLevelController = require("../controllers/difficultyLevelController");

router.get("/difficulty-levels", difficultyLevelController.getAll);

router.get(
  "/difficulty-levels/:difficultyName",
  difficultyLevelController.findByName
);

router.post(
  "/difficulty-levels",
  DifficultyLevelValidate.validator(),
  difficultyLevelController.createDifficultyLevel
);

router.delete(
  "/difficulty-levels/:id",
  difficultyLevelController.deleteDifficultyLevel
);

router.put(
  "/difficulty-levels/:id",
  DifficultyLevelValidate.validator(),
  difficultyLevelController.updateDifficultyLevel
);

module.exports = router;
