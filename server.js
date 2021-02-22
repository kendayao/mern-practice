require('dotenv').config()
const express = require("express");
const path = require("path");
const mongoose = require ("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
require('./routes/apiRoutes.js')(app)

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect("mongodb://localhost/mernpractice")
// 'mongodb://localhost/mernpractice'
// "mongodb+srv://kendayao:"+process.env.DB_PASS+"@practice.zj8pj.mongodb.net/practice?retryWrites=true&w=majority"
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
