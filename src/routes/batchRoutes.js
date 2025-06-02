const express = require("express");
const { createBatch, assignStudentsToBatch, assignMentorToBatch, getBatchesByCourse,updateBatch ,getBatchBySlug} = require("../controllers/batchController");
const { adminProtect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", adminProtect, createBatch);
router.put("/assign-students", adminProtect, assignStudentsToBatch);
router.put("/assign-mentor", adminProtect, assignMentorToBatch);
router.get("/:courseId", adminProtect, getBatchesByCourse);
router.put("/update/:id", adminProtect, updateBatch);
router.get("/slug/:slug", getBatchBySlug);

module.exports = router;
