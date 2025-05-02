const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;  // Make sure to use environment-specific port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter setup (using Gmail as an example)
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use SSL
    auth: {
        user: 'itsanjali2410@gmail.com',
        pass: 'qaeqkcxswqprjvce'
    }
});

// POST route for handling form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,        // Sender's email address
        to: 'itsanjali2410@gmail.com', // Recipient's email address
        subject: `Contact Form Submission from ${name}`,
        text: `
            You have received a new message from the contact form:

            Name: ${name}
            Email: ${email}

            Message:
            ${message}
        `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ success: false, error: error.message });
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).json({ success: true });
        }
    });
});

// Start server on the correct port
app.listen(port, () => {
    console.log(`Server is running on https://contact.tripstars.in:${port}`);
});
