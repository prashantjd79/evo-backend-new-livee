const express = require("express");
const { createCourse,updateCourseByAdmin,getAllCourses,getCourseById,assignWannaBeInterestToCourse ,getCourseBySlug} = require("../controllers/courseController");
const { adminProtect } = require("../middleware/authMiddleware");
const multer = require('multer');
const upload = require("../middleware/multer");
const { apiKeyProtect } = require('../middleware/authMiddleware');


const router = express.Router();

// router.post("/", adminProtect, createCourse);
const setCourseUploadType = (req, res, next) => {
    req.uploadType = "course"; 
    next();
  };
  
  router.post(
    "/",
    adminProtect,apiKeyProtect,
    setCourseUploadType,
    upload.single("photo"),
    createCourse
  );


router.get("/", apiKeyProtect,getAllCourses);
router.get("/:id", adminProtect,apiKeyProtect, getCourseById);
router.put("/assign-wanna-be-interest", adminProtect,apiKeyProtect, assignWannaBeInterestToCourse);
router.put("/course/update/:id", adminProtect,apiKeyProtect, upload.single("photo"), updateCourseByAdmin);
router.get("/slug/:slug",apiKeyProtect, getCourseBySlug);

module.exports = router;
