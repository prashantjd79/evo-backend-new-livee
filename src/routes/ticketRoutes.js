const express = require("express");
const { createTicket, respondToTicket, getAllTickets, getUserTickets } = require("../controllers/ticketController");
const { adminProtect } = require("../middleware/authMiddleware");
const uploadTicketFile = require("../middleware/uploadTicketFile");
const { apiKeyProtect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/", uploadTicketFile.single("file"), createTicket);

router.put("/respond", adminProtect,apiKeyProtect, respondToTicket); // Admin responds to a ticket
router.get("/", adminProtect,apiKeyProtect, getAllTickets); // Get all tickets (optional filter by status)
router.get("/:userId",apiKeyProtect, getUserTickets); // Get tickets of a specific user

module.exports = router;
