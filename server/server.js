require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Gratitude = require("./Gratitude");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());

const mongoose = require("mongoose");
const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/local";
mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

app.get("/api/gratitudes", (req, res, next) => {
  Gratitude.find()
    .then(gratitudes => {
      res.json(gratitudes);
    })
    .catch(err => next(err));
});

app.post("/api/gratitudes", (req, res, next) => {
  const { message } = req.body;
  const gratitude = new Gratitude({ message });

  gratitude
    .save()
    .then(() => {
      console.log("saved");
      res.json({
        message: `saved: ${message}`,
      });
    })
    .catch(err => next(err));
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Order matters. Put all API endpoints above app.get("*")
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "./../build/index.html"));
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log("App is listening on port " + server.address().port);
});
