const express = require("express");
const { createSubcategory, getAllSubcategories,getSubcategoriesByCategory,deleteSubcategory,getSubcategoriesByCategorySlug,updateSubcategory,getSubcategoryBySlug } = require("../controllers/subcategoryController");
const { adminProtect } = require("../middleware/authMiddleware");
const uploadSubcategoryIcon = require("../middleware/uploadSubcategory");
const router = express.Router();

// router.post("/", adminProtect, createSubcategory);

router.post(
    "/",
    adminProtect,
    uploadSubcategoryIcon.single("photo"),
    createSubcategory
  );

router.get("/", adminProtect, getAllSubcategories);

// Get subcategories by category ID (Protected)
router.get("/category/:categoryId",getSubcategoriesByCategory);
router.delete("/subcategory/:id", adminProtect, deleteSubcategory);
router.put("/update/:id", adminProtect,  uploadSubcategoryIcon.single("photo"), updateSubcategory);
router.get("/slug/:slug", getSubcategoryBySlug);
router.get("/category/slug/:slug", getSubcategoriesByCategorySlug);

module.exports = router;
