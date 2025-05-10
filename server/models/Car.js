const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  reg: {
    type: String,
    required: true,
  },
  vin: {
    type: String,
    default: "N/A",
  },
  engineNum: {
    type: String,
    default: "N/A",
  },
  engineVolume: {
    type: String,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  powerHp: {
    type: String,
    default: "N/A",
  },
  powerKw: {
    type: String,
    default: "N/A",
  },
  milegeBroke: {
    type: Number,
    required: true,
  },
  dateBroke: {
    type: String,
    default: "N/A",
  },

  fault: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    default: "N/A",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cars",
  },
  addedBy: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("car", CarSchema);
