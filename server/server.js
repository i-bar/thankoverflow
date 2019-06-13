require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();
const bodyParser = require("body-parser");

app.use(morgan("tiny"));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "build")));

app.post("/api/gratitudes", (req, res, next) => {
  const { message } = req.body;

  res.json({
    message: `received: ${message}`,
  });
});

// Order matters. Put all API endpoints above app.get("*")
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log("App is listening on port " + server.address().port);
});
