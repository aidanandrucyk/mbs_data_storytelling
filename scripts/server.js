const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());
const port = 3000; // Change this to your desired port number

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'datastorytellingemail@gmail.com', 
    pass: 'datastorytelling email password' 
  }
});

// Endpoint to handle form submissions and send email
app.post('/sendEmail', (req, res) => {
  const formData = req.body;

  // Customize the email content
  const mailOptions = {
    from: 'your_email@gmail.com', // Replace with your email address
    to: formData.email,
    subject: 'No-Code Results',
    text: `Dear ${formData.name},\n\nThank you for completing the quiz! Your results are...\n\nYour message: ${formData.message}\n\nBest regards,\nYour Name`
  };

  // Send the email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
