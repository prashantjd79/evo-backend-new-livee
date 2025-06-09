const express = require("express");
const { createSubcategory, getAllSubcategories,getSubcategoriesByCategory,deleteSubcategory,getSubcategoriesByCategorySlug,updateSubcategory,getSubcategoryBySlug } = require("../controllers/subcategoryController");
const { adminProtect } = require("../middleware/authMiddleware");
const uploadSubcategoryIcon = require("../middleware/uploadSubcategory");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

// router.post("/", adminProtect, createSubcategory);

router.post(
    "/",
    adminProtect,apiKeyProtect,
    uploadSubcategoryIcon.single("photo"),
    createSubcategory
  );

router.get("/", adminProtect,apiKeyProtect, getAllSubcategories);

// Get subcategories by category ID (Protected)
router.get("/category/:categoryId",apiKeyProtect,getSubcategoriesByCategory);
router.delete("/subcategory/:id", adminProtect,apiKeyProtect, deleteSubcategory);
router.put("/update/:id", adminProtect,apiKeyProtect,  uploadSubcategoryIcon.single("photo"), updateSubcategory);
router.get("/slug/:slug",apiKeyProtect, getSubcategoryBySlug);
router.get("/category/slug/:slug",apiKeyProtect, getSubcategoriesByCategorySlug);

module.exports = router;
