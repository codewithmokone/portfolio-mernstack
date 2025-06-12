const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  res. send('Hello Coder')
})



// Handles email sending
app.post('/api/send-email', (req,res) => {
  const { recipient, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls:{
      rejectUnauthorized: false
    }
  });

  // Define the mail options
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: recipient,
    subject: subject,
    text: message
  };

  // Send the email
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.error("Error occured:", error);
      res.status(500).send('Error in sending email. Please try again later.')
    } else {
      console.log('Email sent: ', info.response);
      res.send('Email sent successfully!')
    }
  });
});




app. listen(port, () => {
  console.log(`Listening port on ${port}`)
})