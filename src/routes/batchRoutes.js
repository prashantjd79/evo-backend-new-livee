const express = require("express");
const { createBatch, assignStudentsToBatch, assignMentorToBatch, getBatchesByCourse,updateBatch ,getBatchBySlug} = require("../controllers/batchController");
const { adminProtect } = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/", adminProtect,apiKeyProtect, createBatch);
router.put("/assign-students", adminProtect,apiKeyProtect, assignStudentsToBatch);
router.put("/assign-mentor", adminProtect,apiKeyProtect, assignMentorToBatch);
router.get("/:courseId", adminProtect,apiKeyProtect, getBatchesByCourse);
router.put("/update/:id", adminProtect,apiKeyProtect, updateBatch);
router.get("/slug/:slug",apiKeyProtect, getBatchBySlug);

module.exports = router;
