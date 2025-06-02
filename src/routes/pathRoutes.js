const express = require("express");
const { createPath, assignWannaBeInterestToPath,getPaths,getPathBySlug,deletePath,getPathById,updatePath } = require("../controllers/pathController");
const {adminProtect } = require("../middleware/authMiddleware");
const upload = require("../middleware/multer");
const multer = require('multer');
const router = express.Router();

const setPathUploadType = (req, res, next) => {
    req.uploadType = "path";
    next();
  };
  
  router.post(
    "/",
    adminProtect,
    setPathUploadType,
    upload.single("photo"),
    createPath
  );
  router.get("/", getPaths);

// router.post("/", adminProtect, createPath);

router.put(
  "/assign-wanna-be-interest",
  adminProtect,
  assignWannaBeInterestToPath
);
router.delete("/:id",adminProtect, deletePath);
router.get("/:id", getPathById);
router.put("/update/:id", adminProtect, upload.single("photo"), updatePath);
router.get("/slug/:slug", getPathBySlug);

module.exports = router;
