const express = require("express");
const { createCategory, getCategories,deleteCategory,updateCategory,getCategoryBySlug } = require("../controllers/categoryController");
const { adminProtect } = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const uploadCategoryIcon = require("../middleware/uploadCategory");
const router = express.Router();

// router.post("/", adminProtect, createCategory);

router.post(
    "/",
    adminProtect,apiKeyProtect,
    uploadCategoryIcon.single("photo"),
    createCategory
  );
  router.get("/slug/:slug",apiKeyProtect, getCategoryBySlug);

  router.put("/update/:id", adminProtect,apiKeyProtect, uploadCategoryIcon.single("photo"), updateCategory);
router.get("/",apiKeyProtect, getCategories);
router.delete("/category/:id", adminProtect,apiKeyProtect, deleteCategory);

module.exports = router;
