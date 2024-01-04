const modelQuestion = require("../models/question");
const modelQuizz = require("../models/quizz");

const createQuizz = async (req, res, next) => {
  try {
    const subject = req.body.subject;
    const easyQuestions = await modelQuestion.getRandomQuestions(
      subject,
      "6594c05f87aeaa02bb04659a",
      5
    );
    const mediumQuestions = await modelQuestion.getRandomQuestions(
      subject,
      "6594c31d054997639350e002",
      3
    );
    const hardQuestions = await modelQuestion.getRandomQuestions(
      subject,
      "6594c1ddaa7ba5fb6dce1ab0",
      2
    );
    const questions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
    const quizz = await modelQuizz.createQuizz(questions);
    responseData.responseReturn(res, 200, "Success", quizz);
  } catch (error) {
    console.error(error);
    responseData.responseReturn(res, 500, true, "Internal Server Error");
  }
};

module.exports = {
  createQuizz,
};
