require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
// const multer = require('multer');
const portfolioRoutes = require('./routes/records');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

// Express app
const app = express();


// Templeting engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Routes
app.use('/api/portfolio', portfolioRoutes);

// app.get('/', (req,res) => {
//     res.send("Hello PLP Coder").status(200);
// })

// Endpoint for sending contact email
// app.post('/api/send-email', (req,res) => {
//   const { recipient, subject, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: process.env.EMAIL_SERVICE,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS
//     },
//     tls:{
//       rejectUnauthorized: false
//     }
//   });

//   // Define the mail options
//   const mailOptions = {
//     from: process.env.FROM_EMAIL,
//     to: recipient,
//     subject: subject,
//     text: message
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.error("Error occured:", error);
//       res.status(500).send('Error in sending email. Please try again later.')
//     } else {
//       console.log('Email sent: ', info.response);
//       res.send('Email sent successfully!')
//     }
//   });
// });


// Connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(()=> {
    // Listen for request
    app. listen(port, () => {
      console.log(`Connected to DB and listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.log(error);
    
  })

