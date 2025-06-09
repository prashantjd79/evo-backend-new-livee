const express = require("express");
const { registerManager, loginManager ,updateManagerProfile,getAssignedMentors} = require("../controllers/managerAuthController");
const uploadManagerPhoto = require("../middleware/uploadManagerPhoto");
const { managerProtect } = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/signup", uploadManagerPhoto.single("photo"), registerManager);
router.post("/login", loginManager); // Manager login after approval
router.get("/my-mentors", managerProtect,apiKeyProtect, getAssignedMentors);
router.put("/profile", managerProtect,apiKeyProtect, uploadManagerPhoto.single("photo"), updateManagerProfile);
module.exports = router;
