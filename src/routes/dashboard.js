const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');


router.post('/form', dashboardController.submitDashboardForm);

module.exports = router;
