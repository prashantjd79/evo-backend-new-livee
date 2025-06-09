const express = require("express");
const { registerAdmin,updateAssignedMentorsToManager,deleteReviewByAdmin,toggleUserBanStatus,
    updateAdminProfile,markTransactionAsPaid,createTransaction,getUserProfileById,
    getAllReviews,getBatchStudents,getAssignmentByLessonId,deleteBatch,deleteCourse,
    deletePromoCode,deleteTicket,deleteAnnouncement,getAllStudentsProgress,addReviewByAdmin,
    getAdminProfile,loginAdmin,getAllCategories,getAllSubcategories,getAllWannaBeInterests,
    getMyAdminProfile,getAllCourses,getAllCourseCreators,approveUser,getPendingApprovals,approveMentor,getPendingMentors,
    getUserProfile,getUserTransactions,getAllCertificates,updateReviewByAdmin,
    getStudentBatchesByAdmin,getAllJobs,getCoursesWithDetails,getUsersByRole,
    getBatchesByCourseId,getAllBatches,getStudentsByCourseId ,getPlatformAnalytics,
    getAllSubmittedAssignments, updateUserStatus,getAllTransactions,assignMentorsToManager,
     exportTransactionsCSV,getAllBlogs,approveOrRejectBlog,generateApiKey,removeApiKey,listApiKeys
    
} = require("../controllers/adminController");
const { adminProtect } = require("../middleware/authMiddleware");
const upload = require("../middleware/multer"); // or your upload middleware path
const { apiKeyProtect } = require('../middleware/authMiddleware');




const router = express.Router();
router.get("/student/:studentId/batches", adminProtect,apiKeyProtect, getStudentBatchesByAdmin);
router.post("/register", registerAdmin);
router.get("/blogs", adminProtect,apiKeyProtect, getAllBlogs);
router.put("/blogs/:blogId", adminProtect,apiKeyProtect, approveOrRejectBlog);
router.post("/login", loginAdmin);
router.put("/approve-user", adminProtect,apiKeyProtect, approveUser);
router.get("/pending-approvals", adminProtect,apiKeyProtect, getPendingApprovals);
router.get("/me", adminProtect,apiKeyProtect, getMyAdminProfile);
router.get("/admin/all-progress", adminProtect,apiKeyProtect, getAllStudentsProgress);
router.put("/approve", adminProtect,apiKeyProtect, approveMentor);
router.get("/pending", adminProtect,apiKeyProtect, getPendingMentors);
router.put("/manager/update-mentors",adminProtect,apiKeyProtect, updateAssignedMentorsToManager);
router.get("/jobs", adminProtect,apiKeyProtect, getAllJobs);
router.get("/profile/:userId", adminProtect,apiKeyProtect, getUserProfile); // Get specific user profile
router.get("/role/:role", adminProtect,apiKeyProtect, getUsersByRole); // Get all users by role
router.get("/analytics", adminProtect,apiKeyProtect, getPlatformAnalytics); // Get platform-wide analytics
router.put("/status", adminProtect,apiKeyProtect, updateUserStatus); // Update user status (Active/Inactive/Banned)
router.get("/courses", adminProtect,apiKeyProtect, getCoursesWithDetails);
router.get("/admin/transactions",adminProtect,apiKeyProtect, getAllTransactions);
 // Get transactions (filtered by Course & Path)
 // Export transactions as CSV
router.put("/assign-mentors", adminProtect,apiKeyProtect, assignMentorsToManager);
router.get("/assignments", adminProtect,apiKeyProtect, getAllSubmittedAssignments);
router.get("/certificates", adminProtect,apiKeyProtect, getAllCertificates);
router.get("/batches/by-course/:courseId", adminProtect,apiKeyProtect, getBatchesByCourseId);
router.get("/batches", adminProtect,apiKeyProtect, getAllBatches);
router.get("/students/by-course/:courseId", adminProtect,apiKeyProtect, getStudentsByCourseId);
router.get("/course-creators", adminProtect,apiKeyProtect, getAllCourseCreators);
router.get("/Allcourses",apiKeyProtect, getAllCourses);
router.get("/allcat",apiKeyProtect, getAllCategories);
router.get("/allsubcat",apiKeyProtect, getAllSubcategories);
router.get("/allwanna",apiKeyProtect,getAllWannaBeInterests);
router.get("/me", adminProtect,apiKeyProtect, getAdminProfile);
router.get("/transactions/export", adminProtect,apiKeyProtect, exportTransactionsCSV);
//router.get("/transactions", adminProtect, getTransactions);
router.post("/review", adminProtect,apiKeyProtect, addReviewByAdmin);
router.delete("/batch/:id",adminProtect, apiKeyProtect,deleteBatch);
router.delete("/course/:id",adminProtect,apiKeyProtect, deleteCourse);
router.delete("/promocode/:id",adminProtect,apiKeyProtect, deletePromoCode);
router.delete("/ticket/:id",adminProtect,apiKeyProtect, deleteTicket);
router.delete("/announcement/:id",adminProtect,apiKeyProtect, deleteAnnouncement);
router.get("/by-lesson/:lessonId",apiKeyProtect, getAssignmentByLessonId);
router.get("/admin/batch/:batchId/students",adminProtect,apiKeyProtect, getBatchStudents);
router.get("/reviews",apiKeyProtect, getAllReviews);
router.get("/user-profile/:id", adminProtect,apiKeyProtect, getUserProfileById);
//router.put("/course/update/:id", adminProtect, upload.single("photo"), updateCourse);
router.put("/ban-user/:id", adminProtect,apiKeyProtect, toggleUserBanStatus);
router.post("/transactions", createTransaction);
router.put("/transactions/:id/mark-paid",apiKeyProtect, markTransactionAsPaid);
router.put("/profile", adminProtect,apiKeyProtect, upload.single("photo"), updateAdminProfile);
router.get("/user/:userId/transactions",apiKeyProtect, getUserTransactions);
router.put("/admin/:reviewId", adminProtect,apiKeyProtect, updateReviewByAdmin);
router.delete("/admin/:reviewId", adminProtect,apiKeyProtect, deleteReviewByAdmin);
router.post('/generate-key', adminProtect, generateApiKey);
router.delete('/remove-key', adminProtect, removeApiKey);
router.post('/list-api', adminProtect, listApiKeys);
module.exports = router;
