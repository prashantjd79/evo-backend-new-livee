// // utils/email.js
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const sendOtpEmail = (email, otp) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: "Verify your Email - OTP",
//     text: `Your OTP is: ${otp}. It expires in 10 minutes.`,
//   };

//   return transporter.sendMail(mailOptions);
// };

// module.exports = { sendOtpEmail };




const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOtpEmail = (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "🔐 Verify Your Email - OTP Inside",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://evoskillgrowth.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1614b71d.png&w=640&q=75" alt="Evo Logo" style="max-width: 150px;" />
        </div>
        <h2 style="color: #333; text-align: center;">Welcome to Evo 🎉</h2>
        <p style="font-size: 16px; color: #555; text-align: center;">Your One-Time Password (OTP) is:</p>
        <h1 style="color: #007bff; font-size: 32px; text-align: center;">${otp}</h1>
        <p style="font-size: 14px; color: #999; text-align: center;">This OTP will expire in 10 minutes. Please do not share it with anyone.</p>
        <hr>
        <p style="font-size: 12px; color: #ccc; text-align: center;">If you didn’t request this, you can ignore this email.</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendOtpEmail };
