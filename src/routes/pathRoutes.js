const express = require("express");
const { createPath, assignWannaBeInterestToPath,getPaths,getPathBySlug,deletePath,getPathById,updatePath } = require("../controllers/pathController");
const {adminProtect } = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const upload = require("../middleware/multer");
const multer = require('multer');
const router = express.Router();

const setPathUploadType = (req, res, next) => {
    req.uploadType = "path";
    next();
  };
  
  router.post(
    "/",
    adminProtect,apiKeyProtect,
    setPathUploadType,
    upload.single("photo"),
    createPath
  );
  router.get("/",apiKeyProtect, getPaths);

// router.post("/", adminProtect, createPath);

router.put(
  "/assign-wanna-be-interest",
  adminProtect,apiKeyProtect,
  assignWannaBeInterestToPath
);
router.delete("/:id",adminProtect,apiKeyProtect, deletePath);
router.get("/:id",apiKeyProtect, getPathById);
router.put("/update/:id", adminProtect,apiKeyProtect, upload.single("photo"), updatePath);
router.get("/slug/:slug",apiKeyProtect, getPathBySlug);

module.exports = router;
