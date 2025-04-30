import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Destructure the 'email' from the request body
    const { email } = req.body;

    // Server-side validation for email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }

    // Create a transporter using your email service (e.g., Gmail, SendGrid, etc.)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Change this to the service you're using
      auth: {
        user: process.env.EMAIL_USER, // Your email address (set as an environment variable)
        pass: process.env.EMAIL_PASS, // Your email password or app password (set as an environment variable)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.RECEIVER_EMAIL, // Receiver address (could be an email for you or a business email)
      subject: `New Signup from ${email}`, // Email subject
      html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .email-container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #007bff;
            }
            .email-content {
              font-size: 16px;
              line-height: 1.6;
              color: #555;
            }
            .email-content p {
              margin-bottom: 10px;
            }
            .email-footer {
              margin-top: 30px;
              text-align: center;
              font-size: 14px;
              color: #777;
            }
            .email-footer a {
              color: #007bff;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <h2>New Signup Received</h2>
            <div class="email-content">
              <p><strong>Email:</strong> ${email}</p>
            </div>
            <div class="email-footer">
              <p>Thank you for signing up. We will contact you soon.</p>
            </div>
          </div>
        </body>
      </html>
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Details sent successfully, we will contact you shortly!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
