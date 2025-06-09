const express = require("express");
const { registerCourseCreator, updateCourseCreatorProfile,loginCourseCreator ,createCourseByCreator,updateCourseByCreator,getAllCourses,deleteCourse} = require("../controllers/courseCreatorAuthController");
const { courseCreatorProtect } = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const uploadCourseCreatorPhoto = require("../middleware/uploadCourseCreatorPhoto");
const upload = require("../middleware/multer");
const router = express.Router();

router.post("/signup", uploadCourseCreatorPhoto.single("photo"), registerCourseCreator); // Course Creator sign up
router.post("/login", loginCourseCreator); // Course Creator login after approval
router.post(
    "/create",
    courseCreatorProtect,apiKeyProtect, // your auth middleware
    upload.single("photo"),
    createCourseByCreator
  );
  router.put(
    "/course/update/:id",
    courseCreatorProtect,apiKeyProtect,
    upload.single("photo"), // for image upload
    updateCourseByCreator
  );
  

router.get("/",courseCreatorProtect,apiKeyProtect,getAllCourses);
router.delete("/:courseId", courseCreatorProtect,apiKeyProtect, deleteCourse);
//router.put("/course/update/:id", courseCreatorProtect, upload.single("photo"), updateCourseByCreator);
router.put("/profile", courseCreatorProtect,apiKeyProtect, uploadCourseCreatorPhoto.single("photo"), updateCourseCreatorProfile);
module.exports = router;
