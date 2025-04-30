import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, companySize } = req.body;

    // Basic validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }

    if (!companySize) {
      return res.status(400).json({ error: "Please select your company size." });
    }

    // Set up transporter using your email service (e.g., Gmail, SendGrid, etc.)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email address
      to: process.env.RECEIVER_EMAIL, // The email address where you want to receive the request
      subject: "Demo Request Received",
      html: `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; color: #333; }
            </style>
          </head>
          <body>
            <h2>New Demo Request</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company Size:</strong> ${companySize}</p>
          </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Demo request submitted successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send the request." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
