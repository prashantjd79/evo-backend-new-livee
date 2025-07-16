const requestIp = require('request-ip');

exports.submitDashboardForm = (req, res) => {
  let ip = requestIp.getClientIp(req);

  // Clean local values
  if (ip === '::1' || ip === '::ffff:127.0.0.1') {
    ip = '127.0.0.1';
  }

  const { name, email, phoneNumber, subject, message } = req.body;

  if (!name || !email || !phoneNumber || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  console.log("📥 Form Submitted:", {
    name,
    email,
    phoneNumber,
    subject,
    message,
    ip,
  });

  return res.status(200).json({
    message: "Form submitted successfully!",
    ipAddress: ip,
  });
};
