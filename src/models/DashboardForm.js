const mongoose = require("mongoose");

const dashboardFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    ip: { type: String }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("DashboardForm", dashboardFormSchema);
