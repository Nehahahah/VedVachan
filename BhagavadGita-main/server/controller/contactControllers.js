const sendEmail = require("../utils/sendEmail");
const { SMPT_MAIL } = require("../config/keys");

// Handle contact form submission
const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic input validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Optional: Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Email to user (confirmation)
    const confirmationEmailOptions = {
      name,
      email,
      subject: "VedVachan | We’ve received your message!",
      message_Content: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to <b>VedVachan</b>. Your message has been received, and we’ll get back to you within 24–48 hours.</p>
        <p><b>Your Message:</b><br/>"${message}"</p>
        <p>Warm regards,<br/><b>Neha Pal</b><br/>Founder, VedVachan</p>
      `,
    };
    await sendEmail(confirmationEmailOptions);

    // Email to site owner (you)
    const ownerNotificationOptions = {
      name,
      email: SMPT_MAIL,
      subject: "📩 New Contact Form Submission | VedVachan",
      message_Content: `
        <p><b>New Query Received on VedVachan</b></p>
        <ul>
          <li><b>Name:</b> ${name}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Message:</b> ${message}</li>
        </ul>
        <p>Please respond from your dashboard or via email promptly.</p>
      `,
    };
    await sendEmail(ownerNotificationOptions);

    // Respond with success
    res.status(201).json({
      success: true,
      message: "Message successfully sent to both sender and admin.",
    });
  } catch (error) {
    console.error("❌ Contact form error:", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

module.exports = {
  contact,
};
