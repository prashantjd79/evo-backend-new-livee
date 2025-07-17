const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const { adminProtect } = require("../middleware/authMiddleware");

// POST - Publicly accessible
router.post("/form", dashboardController.submitDashboardForm);

// GET, DELETE, PUT - Admin-only (you can add auth middleware if needed)
router.get("/forms", adminProtect, dashboardController.getDashboardForms);
router.delete("/forms/:id", dashboardController.deleteDashboardForm);
router.put("/forms/:id", dashboardController.updateDashboardForm);

module.exports = router;
