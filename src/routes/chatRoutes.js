
const express = require("express");
const {
	sendMessage,
	getBatchChat,
	sendMessageMentor,
	pinMessage,
	getBatchChatMentor,
	scheduleSession,
	updateScheduledSession,
	cancelScheduledSession,
	getStudentUpcomingSessions,
} = require("../controllers/chatController");

const {
	studentProtect,
	protectMentor,
} = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

// Student routes
router.post("/send", studentProtect,apiKeyProtect, sendMessage);
router.get("/:batchId", studentProtect,apiKeyProtect, getBatchChat);

// Mentor routes
router.post("/mentor/send", protectMentor,apiKeyProtect, sendMessageMentor);
router.get("/mentor/:batchId", protectMentor,apiKeyProtect, getBatchChatMentor);
router.post("/mentor/pin", protectMentor,apiKeyProtect, pinMessage);
router.post("/mentor/schedule", protectMentor,apiKeyProtect, scheduleSession);
router.put("/mentor/schedule/update", protectMentor,apiKeyProtect, updateScheduledSession);
router.delete(
	"/mentor/schedule/cancel/:batchId/:sessionId",
	protectMentor,apiKeyProtect,
	cancelScheduledSession
);
router.get(
	"/student/upcoming-sessions",
	studentProtect,apiKeyProtect,
	getStudentUpcomingSessions
);
module.exports = router;