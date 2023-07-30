const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const puppeteer = require('puppeteer');

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
const port = 2525; //

// Create a Nodemailer transporter using Elastic Email SMTP settings
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 2525,
  auth: {
    user: 'bob440073@gmail.com',
    pass: 'dpglewxjtlzmflcj'
  }
});
app.get('/', (req, res) => {
  res.render("index");
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