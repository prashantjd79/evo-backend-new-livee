const express = require("express");
const { signupStudent,getMyCourseProgress,getStudentLessonSubmissions,updateStudentProfile,getStudentLessonScores,getStudentApplications,getApprovedJobsForStudents,getMyMentorBookings,getMyBatches,getBatchById,loginStudent,verifyOtp,getLessonsByCourseForStudent,getMyCertificates,getAllCoursesForStudents,getMyEnrolledCourses,getStudentProfile,applyPromoCode,applyPromoCodeAndPurchase,submitAssignment,submitQuiz, enrollInCourse, enrollInPath, getEnrolledCourses,getEnrolledPaths} = require("../controllers/studentController");
const { studentProtect } = require("../middleware/authMiddleware");
const uploadSubmittedAssignment = require("../middleware/uploadSubmittedAssignment");
const uploadStudentPhoto = require("../middleware/uploadStudentPhoto");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/signup", uploadStudentPhoto.single("photo"), signupStudent);
router.post("/verify-otp", verifyOtp);
router.post("/login", loginStudent);
router.get("/me", studentProtect,apiKeyProtect, getStudentProfile);
router.get("/lessons/:courseId", studentProtect,apiKeyProtect, getLessonsByCourseForStudent);
router.get("/batches", studentProtect,apiKeyProtect, getMyBatches);
router.get("/batches/:batchId",studentProtect,apiKeyProtect, getBatchById);
// router.post("/submit-assignment", studentProtect, submitAssignment);

router.post(
  "/submit-assignment",
  studentProtect,apiKeyProtect,
  uploadSubmittedAssignment.single("file"),
  submitAssignment
);
router.get("/courses", studentProtect,apiKeyProtect, getAllCoursesForStudents);
router.get("/enrolled-courses", studentProtect,apiKeyProtect, getMyEnrolledCourses);

router.post("/submit-quiz", studentProtect,apiKeyProtect, submitQuiz);
router.post("/apply-purchase", studentProtect,apiKeyProtect, applyPromoCodeAndPurchase); 
router.post("/course", studentProtect,apiKeyProtect, enrollInCourse); // Student enrolls in a course
router.post("/path", studentProtect,apiKeyProtect, enrollInPath); // Student enrolls in a path
router.get("/enroll/enrolled-courses/", studentProtect,apiKeyProtect, getEnrolledCourses);
router.get("/enrolled-paths", studentProtect,apiKeyProtect, getEnrolledPaths);
router.get("/certificates", studentProtect,apiKeyProtect, getMyCertificates);
router.get("/jobs", studentProtect,apiKeyProtect, getApprovedJobsForStudents);
router.get("/my-mentor-sessions", studentProtect,apiKeyProtect, getMyMentorBookings);
router.get("/my-applications", studentProtect,apiKeyProtect, getStudentApplications);
router.get("/my-progress", studentProtect,apiKeyProtect, getMyCourseProgress);
router.get("/scores/:lessonId", studentProtect,apiKeyProtect, getStudentLessonScores);
router.get("/lesson/:lessonId/submissions", studentProtect,apiKeyProtect, getStudentLessonSubmissions);
router.put("/profile", studentProtect,apiKeyProtect, uploadStudentPhoto.single("photo"), updateStudentProfile);
module.exports = router;
