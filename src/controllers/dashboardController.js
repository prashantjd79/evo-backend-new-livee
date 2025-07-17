const DashboardForm = require("../models/DashboardForm");

// POST: Submit form
exports.submitDashboardForm = async (req, res) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const { name, email, phoneNumber, subject, message } = req.body;

    const newForm = new DashboardForm({
      name,
      email,
      phoneNumber,
      subject,
      message,
      ip,
    });

    await newForm.save();

    console.log("📥 Form Submitted:", newForm);

    res.status(200).json({
      message: "Form submitted successfully!",
      ipAddress: ip,
    });
  } catch (error) {
    console.error("❌ Form submission error:", error);
    res.status(500).json({ message: "Failed to submit form." });
  }
};

// GET: All dashboard forms (admin use)
exports.getDashboardForms = async (req, res) => {
  try {
    const forms = await DashboardForm.find().sort({ createdAt: -1 });
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: "Error fetching forms" });
  }
};

// DELETE: Single form
exports.deleteDashboardForm = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await DashboardForm.findByIdAndDelete(id);
    if (!form) return res.status(404).json({ message: "Form not found" });

    res.status(200).json({ message: "Form deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting form" });
  }
};

// PUT: Update a form (optional)
exports.updateDashboardForm = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await DashboardForm.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Form not found" });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating form" });
  }
};
