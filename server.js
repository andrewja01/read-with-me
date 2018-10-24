//set up dotenv for use
require('dotenv').config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
//const mongoose = require("mongoose");


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Database configuration with mongoose
//const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/readwithmeDB";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
//mongoose.Promise = Promise;
//mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// test mlab connection
//mongoose.connect("mongodb://");

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});