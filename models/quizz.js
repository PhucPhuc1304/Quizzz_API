var SchemaQuizz = require("../schema/quizz");

module.exports = {
  createQuizz: function (questions) {
    return new SchemaQuizz(questions).save();
  },
};
