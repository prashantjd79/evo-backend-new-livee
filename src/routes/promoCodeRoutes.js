const express = require("express");
const { createPromoCode,applyPromoCode, getAllPromoCodes, updatePromoStatus,  } = require("../controllers/promoCodeController");
const { adminProtect, studentProtect } = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/", adminProtect,apiKeyProtect, createPromoCode); // Create promo code
router.post("/apply",studentProtect,apiKeyProtect,applyPromoCode);
router.get("/promocodes", adminProtect,apiKeyProtect, getAllPromoCodes); // Get all promo codes
router.put("/status", adminProtect,apiKeyProtect, updatePromoStatus); 
// Activate/Deactivate a promo code
 // Apply a promo code

module.exports = router;
