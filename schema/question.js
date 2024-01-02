const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
  questionText: String,
  questionA: String,
  questionB: String,
  questionC: String,
  questionD: String,
  correctAnswer: String,
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subject",
  },
  difficultyLevel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "difficulty_level",
  },
});

const Question = mongoose.model("question", questionSchema);

module.exports = Question;
