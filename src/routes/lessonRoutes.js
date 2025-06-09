const express = require("express");
const { createLesson, getLessonsByCourse, deleteLesson } = require("../controllers/lessonController");
const { adminProtect } = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/", adminProtect,apiKeyProtect, createLesson);
router.get("/:courseId", adminProtect,apiKeyProtect, getLessonsByCourse);
router.delete("/:lessonId", adminProtect,apiKeyProtect, deleteLesson);

module.exports = router;
