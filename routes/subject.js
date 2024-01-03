const express = require("express");
const router = express.Router();
const SubjectValidate = require("../validates/subject");
const subjectController = require("../controllers/subjectController");

router.get("/subjects", subjectController.getAll);

router.get("/subjects/:subjectName", subjectController.findByName);

router.post(
  "/subjects",
  SubjectValidate.validator(),
  subjectController.createSubject
);

router.delete("/subjects/:id", subjectController.deleteSubject);

router.put(
  "/subjects/:id",
  SubjectValidate.validator(),
  subjectController.updateSubject
);

module.exports = router;    