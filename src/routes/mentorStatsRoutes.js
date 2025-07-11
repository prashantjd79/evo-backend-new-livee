const express = require("express");
const { getMentorStats } = require("../controllers/mentorStatsController");
const {  managerProtect } = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get("/:managerId", managerProtect,apiKeyProtect, getMentorStats); // Manager views assigned mentor stats

module.exports = router;
