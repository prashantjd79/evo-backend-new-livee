const express = require("express");
const {  bookMentorSession,deleteSession,getBatchById,replyToStudentSession,getAssignedBatches, getStudentBookings, updateBookingStatus,getMentorBookings } = require("../controllers/mentorBookingController");
const {  studentProtect, protectMentor } = require("../middleware/authMiddleware");
const MentorBooking = require("../models/MentorBooking");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

//router.get("/available", protect, getAvailableMentors); // Get available mentors
router.post("/book", studentProtect,apiKeyProtect, bookMentorSession); // Book a mentor session
router.get("/student/:studentId", protectMentor,apiKeyProtect, getStudentBookings); // View student's booked sessions
router.put("/update-status", protectMentor,apiKeyProtect, updateBookingStatus); // Mentor updates booking status
router.put("/reply-booking/:bookingId", protectMentor,apiKeyProtect, replyToStudentSession);
router.get("/my-batches", protectMentor,apiKeyProtect, getAssignedBatches);
router.get("/batch/:batchId",protectMentor,apiKeyProtect, getBatchById);
router.delete("/session/:id",protectMentor,apiKeyProtect, deleteSession);

router.get("/:mentorId", protectMentor,apiKeyProtect, getMentorBookings); 
module.exports = router;
