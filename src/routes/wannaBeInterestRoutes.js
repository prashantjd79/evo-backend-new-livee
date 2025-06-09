const express = require("express");
const { createWannaBeInterest,updateWannaBeInterest, getAllWannaBeInterest, deleteWannaBeInterest,getWannaBeInterestBySlug } = require("../controllers/wannaBeInterestController");
const { adminProtect} = require("../middleware/authMiddleware");
const uploadWannaBePhoto = require("../middleware/uploadWannaBePhoto");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/", adminProtect,apiKeyProtect, uploadWannaBePhoto.single("image"), createWannaBeInterest);
router.put("/update/:id", adminProtect,apiKeyProtect, uploadWannaBePhoto.single("image"), updateWannaBeInterest);
router.get("/",apiKeyProtect, getAllWannaBeInterest);
router.delete("/:id", adminProtect,apiKeyProtect, deleteWannaBeInterest);
router.get("/slug/:slug",apiKeyProtect, getWannaBeInterestBySlug);

module.exports = router;
