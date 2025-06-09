const express = require("express");
const {
	postJob,
	reviewJob,
	updateEmployerProfile,
	updateJobByEmployer,
	deleteJobByEmployer,
	updateApplicationStatus,
	getEmployerJobs,
	getStudentById,
	applyForJob,
	getJobApplicants,
	registerEmployer,
	loginEmployer,
} = require("../controllers/jobController");
const { employerProtect } = require("../middleware/authMiddleware");
const { adminProtect } = require("../middleware/authMiddleware");
const { studentProtect } = require("../middleware/authMiddleware");
const uploadEmployerPhoto = require("../middleware/uploadEmployerPhoto");
const uploadResume = require("../middleware/uploadResume");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/", employerProtect,apiKeyProtect, postJob); // Employer posts a job
router.put("/review", adminProtect,apiKeyProtect, reviewJob); // Admin approves/rejects a job
router.get("/my-jobs", employerProtect,apiKeyProtect, getEmployerJobs); // Get all jobs (optional filter by status)
router.post(
	"/apply",
	studentProtect,apiKeyProtect,
	uploadResume.single("resume"),
	applyForJob
); // Student applies for a job
router.get("/:jobId/applicants", employerProtect,apiKeyProtect, getJobApplicants); // Get job applicants
router.post("/signup", uploadEmployerPhoto.single("photo"), registerEmployer);
router.post("/login", loginEmployer);
router.get("/student/:id", apiKeyProtect,getStudentById);
router.put("/update-status", employerProtect,apiKeyProtect, updateApplicationStatus);
router.put("/job/update/:id", employerProtect,apiKeyProtect, updateJobByEmployer);
router.delete("/job/delete/:id", employerProtect,apiKeyProtect, deleteJobByEmployer);
router.put(
	"/profile",
	employerProtect,apiKeyProtect,
	uploadEmployerPhoto.single("photo"),
	updateEmployerProfile
);
module.exports = router;
