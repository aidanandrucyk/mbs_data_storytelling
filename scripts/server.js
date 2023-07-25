const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const puppeteer = require('puppeteer');

const app = express();
app.use(bodyParser.json());
const port = 2525; //

// Create a Nodemailer transporter using Elastic Email SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.elasticemail.com',
  port: 2525,
  auth: {
    user: 'jibooks126@gmail.com', 
    pass: 'BDC87D6CE72279DC923E8E0244532F723EE15AB10F15AC310ADCB761F38B08E42D1DCE9C6D49DE2B9567D70636656E28' 
  }
});

// Endpoint to handle email sending
app.post('/sendEmail', async (req, res) => {
  const { recipient, subject, body } = req.body;

  try {
    // Create a browser instance with Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to a dummy HTML page (can be replaced with the actual quiz results page URL)
    await page.setContent(`<html><body>${body}</body></html>`);

    // Take a screenshot of the page
    const screenshotBuffer = await page.screenshot();
    await browser.close();

    // Create the email message with the screenshot as an attachment
    const mailOptions = {
      from: 'jibooks126@gmail.com', // Replace with your email address
      to: recipient,
      subject: subject,
      html: body,
      attachments: [{
        filename: 'quiz_results.png',
        content: screenshotBuffer
      }]
    };

    // this the email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  } catch (error) {
    console.error('Error taking screenshot:', error);
    res.status(500).send('Error taking screenshot');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
