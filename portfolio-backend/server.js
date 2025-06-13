const express = require('express');
const route = require('./routes/records.js');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/route', route);
app.use(cors());


app.set('view engine', 'ejs');


// const uri = `mongodb+srv://simonlephotojr:${process.env.DB_PASS}@cluster0.ngydtym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



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