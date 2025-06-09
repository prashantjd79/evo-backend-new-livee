const express = require("express");
const { createAssignment,updateAssignment,deleteAssignment} = require("../controllers/assignmentController");
const { adminProtect } = require("../middleware/authMiddleware");
const uploadAssignment = require("../middleware/uploadAssignment");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

//router.post("/", adminProtect, createAssignment);
router.post("/", adminProtect,apiKeyProtect, uploadAssignment.single("attachment"), createAssignment);

router.put("/update", adminProtect,apiKeyProtect, uploadAssignment.single("pdf"), updateAssignment);

router.delete("/assignment/:assignmentId", adminProtect,apiKeyProtect, deleteAssignment);
module.exports = router;
