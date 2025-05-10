const mongoose = require("mongoose");
const config = require("config");

const db = config.get("MONGO_DB");

const connectMongoDb = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB Connected....");
  } catch (err) {
    console.error(err.message);
    // to stop the server
    process.exit(1);
  }
};

module.exports = connectMongoDb;
