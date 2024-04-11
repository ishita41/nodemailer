// Import nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'imishitamahajan@gmail.com', // Your email address
        pass: 'fyse xwxq imwr xphe' // Your password
    }
});

// Define email options
let mailOptions = {
    from: 'imishitamahajan@gmail.com', // Sender address
    to: 'sanjeevmahajan@gmail.com', // List of recipients
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent from Node.js using nodemailer!' // Plain text body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error occurred: ", error);
    } else {
        console.log("Email sent: ", info.response);
    }
});
