const mongoose = require("mongoose");
require('dotenv').config()

const db = process.env.MONGO_DB;

const connectMongoDb = async () => {
  try {
    await mongoose.connect(db);
    console.log("@@@@@@@@@@@@@@@@-----MongoDB Connected....@@@@@@@@@@@@@");
  } catch (err) {
    console.error(err.message);
    // to stop the server
    process.exit(1);
  }
};

module.exports = connectMongoDb;
