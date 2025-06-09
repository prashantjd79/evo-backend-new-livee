// routes/certificateRoutes.js
const router = require("express").Router();
const { issueCertificate } = require("../controllers/certificateController");
const { uploadCertificate } = require("../middleware/certificate");
const { adminProtect } = require("../middleware/authMiddleware");
const { apiKeyProtect } = require('../middleware/authMiddleware');
// Issue Certificate (Admin only)
router.post(
  "/issue",
  adminProtect,apiKeyProtect,
  uploadCertificate.single("certificate"),
  issueCertificate
);

module.exports = router;
