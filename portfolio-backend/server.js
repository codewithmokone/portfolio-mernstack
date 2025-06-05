const express = require('express');
const app = express()
const port = 4000;



app.get('/', (req, res) => {
  res. send('Hello Coder')
})


app. listen(port, () => {
  console.log(`Listening port on ${port}`)
})