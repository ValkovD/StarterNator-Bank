const express = require("express");
require('dotenv').config()
const connectMongoDb = require("./config/db");
const usersRegRouter = require("./routes/usersReg.router");
const usersLoginRouter = require("./routes/users.Login.router");
const carsRouter = require("./routes/cars.router");
const cors = require("cors");

const app = express();
// CORS Origin WHitelisting-------------------------
app.use(
  cors({
    // origin: ["http://localhost:3000", "http://192.168.0.12:3000"],
    // origin: "*",
    origin: ['https://starternator.pdeit.com'],
    credentials: true
  })
);
// --------------------------------------------------
connectMongoDb();

// Middleware
app.use(express.json());

// Server listen
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}....`);
});

// Routes:

// users POST
app.use("/api/users", usersRegRouter);

// auth POST
app.use("/api/auth", usersLoginRouter);

// cars
app.use("/api/cars", carsRouter);

// alternators
app.use("/api/cars/alternators", carsRouter);

// starters
app.use("/api/cars/starters", carsRouter);

// delete car
app.use("/api/cars/delete?:id", carsRouter);
