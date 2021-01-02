// 1. Require Express
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// 2. Create an instance of Express
const app = express();
// 3. Set the PORT
const PORT = process.env.PORT || 8080;

const db = require("./models");

// 5. Add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/donut-shop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose connected successfully.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});

// VIEW ROUTES
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

// API ROUTES
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/api/donuts", (req, res) => {
  db.Donut.find().then((foundDonuts) => {
    res.json(foundDonuts);
  });
});

// FIXME: Convert this to find by Id
app.get("/api/donuts/:name", (req, res) => {
  for (let i = 0; i < donuts.length; i++) {
    if (donuts[i].name === req.params.name) {
      return res.json(donuts[i]);
    }
  }
});

app.post("/api/donuts", (req, res) => {
  db.Donut.create(req.body).then((newDonut) => {
    res.json(newDonut);
  });
});

// TODO: Add PUT route for editing donuts
// TODO: Add DELETE route for removing donuts. 

// 4. Listen on the PORT.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
