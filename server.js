const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const orders = require('./routes/api/orders');
const appointments = require('./routes/api/appointments');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  
// Use Routes 
app.use('/api/orders', orders);
app.use('/api/appointments', appointments);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));

