const mongoose = require("mongoose");

const quizzSchema = new mongoose.Schema({
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "question",
    },
  ],
  difficultyLevel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "difficulty_level",
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subject",
  },
});

const Quizz = mongoose.model("quizz", quizzSchema);

module.exports = Quizz;
