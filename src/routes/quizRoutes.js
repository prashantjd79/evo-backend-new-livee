const express = require("express");
const { createQuiz, getQuizzesByLesson, deleteQuiz,updateQuiz } = require("../controllers/quizController");
const { adminProtect } = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/",adminProtect,apiKeyProtect, createQuiz);
router.get("/:lessonId", adminProtect,apiKeyProtect, getQuizzesByLesson);
router.delete("/quiz/:quizId", adminProtect,apiKeyProtect, deleteQuiz);
router.put("/quiz", adminProtect,apiKeyProtect, updateQuiz);
module.exports = router;
