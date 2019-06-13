const mongoose = require("mongoose");

const Gratitude = mongoose.model("Gratitude", { message: String });

module.exports = Gratitude;
