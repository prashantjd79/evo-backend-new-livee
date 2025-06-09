const express = require("express");
const { 
  createTagCode, 
  updateTagCode, 
  deleteTagCode, 
  getAllTagCodes 
} = require("../controllers/tagCodeController");

const { adminProtect } = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

// Create TagCode
router.post("/", adminProtect,apiKeyProtect, createTagCode);

// Update TagCode
router.put("/:id", adminProtect,apiKeyProtect, updateTagCode);

// Delete TagCode
router.delete("/:id", adminProtect,apiKeyProtect, deleteTagCode);

// Get All TagCodes (Public)
router.get("/",apiKeyProtect, getAllTagCodes);

module.exports = router;
