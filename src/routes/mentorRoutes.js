const express = require("express");
const { registerMentor, loginMentor,getSubmittedAssignments,getApprovedBlogs,getReviewsByCourseId,gradeAssignment,getMyProfileByRole, updateMentorProfile} = require("../controllers/mentorController");
const { protectMentor, adminProtect,studentProtect,
    employerProtect,
    courseCreatorProtect,
    publisherProtect,
    managerProtect } = require("../middleware/authMiddleware");
    const { apiKeyProtect } = require('../middleware/authMiddleware');
const uploadMentorPhoto = require("../middleware/uploadMentorPhoto");
const router = express.Router();

// router.post("/register", registerMentor);

router.post("/signup", uploadMentorPhoto.single("photo"), registerMentor);

router.post("/login", loginMentor);
router.get("/submitted-assignments",protectMentor,apiKeyProtect, getSubmittedAssignments);
router.post("/grade-assignment", protectMentor,apiKeyProtect, gradeAssignment);


router.get("/mentor/me", protectMentor,apiKeyProtect, getMyProfileByRole);
router.get("/student/me", studentProtect,apiKeyProtect, getMyProfileByRole);
router.get("/employer/me", employerProtect,apiKeyProtect, getMyProfileByRole);
router.get("/coursecreator/me", courseCreatorProtect,apiKeyProtect, getMyProfileByRole);
router.get("/publisher/me", publisherProtect,apiKeyProtect, getMyProfileByRole);
router.get("/manager/me", managerProtect,apiKeyProtect, getMyProfileByRole);
router.get("/course/:courseId",apiKeyProtect, getReviewsByCourseId);
router.get("/approved",apiKeyProtect, getApprovedBlogs);
router.put("/profile", protectMentor,apiKeyProtect, uploadMentorPhoto.single("photo"), updateMentorProfile);
module.exports = router;
