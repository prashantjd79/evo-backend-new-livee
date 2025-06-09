


// const router = require("express").Router();
// const { createReview } = require("../controllers/reviewController");
// const { studentProtect } = require("../middleware/authMiddleware");

// // Only students allowed
// router.post("/Review", studentProtect, createReview);

// module.exports = router;


const express = require("express");
const { createReview, updateReview, deleteReview,getReviewsByCourseSlug } = require("../controllers/reviewController");
const { studentProtect } = require("../middleware/authMiddleware"); // protect for student login
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

// Create Review
router.post("/Create", studentProtect,apiKeyProtect, createReview);

// Update Review
router.put("/:reviewId", studentProtect,apiKeyProtect, updateReview);

// Delete Review
router.delete("/:reviewId", studentProtect,apiKeyProtect, deleteReview);
router.get("/course/slug/:slug",apiKeyProtect, getReviewsByCourseSlug);
module.exports = router;
