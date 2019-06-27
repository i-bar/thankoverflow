const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Gratitude = require("./Gratitude");
const Algorithmia = require("algorithmia");

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

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
      res.json({
        message: `saved: ${message}`
      });
    })
    .catch(err => next(err));
});

app.get("/api/gratitude", (req, res, next) => {
  Gratitude.aggregate([{ $sample: { size: 3 } }])
    .then(function(gratitude) {
      res.json(gratitude);
    })
    .catch(err => next(err));
});

app.post("/api/predict-sentiment", (req, res, next) => {
  const message = req.body.message;
  try {
    Algorithmia.client(process.env.ALGORITHMIA_API_KEY)
      .algo("nlp/SentimentAnalysis/1.0.5")
      .pipe({
        document: message
      })
      .then(function(response) {
        res.json(response.get());
      });
  } catch (err) {
    next(err);
  }
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "./../build")));

// Order matters. Put all API endpoints above app.get("*")
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "./../build/index.html"));
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log("App is listening on port " + server.address().port);
});
