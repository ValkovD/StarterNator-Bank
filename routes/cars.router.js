const express = require("express");
const carsRouter = express.Router();
const auth = require("./middleware/auth");
const carsController = require("./cars.controller");
const carDataValidator = require("./middleware/carDataValidator");
// @cars         POST api/cars
// @description  submit car
// @acces        private
carsRouter.post("/", auth.authUser, carDataValidator, carsController.submitCar);

// @cars         DELETE api/cars/delete?id
// @description  delete car
// @acces        private
// MUST MAKE SURE SOME ID IS PASSED
carsRouter.delete("/delete/:id", auth.authUser, carsController.deleteCar);

// @cars         GET api/cars
// @description  get all cars
// @acces        private
carsRouter.get("/", auth.authUser, carsController.getAllCars);

// @cars/alternators  GET api/cars/alternators
// @description       GET all alternators
// @acces             private
carsRouter.get("/alternators", auth.authUser, carsController.getAllAlter);

// @cars/starters     GET api/cars/starters
// @description       GET all starters
// @acces             private
carsRouter.get("/starters", auth.authUser, carsController.getAllStarter);

// @cars/search       GET api/cars/search/?make=......&model=....... ect
// querry string used for easy passing to mongo db
// @acces             private
carsRouter.get("/search", auth.authUser, carsController.getByDescription);
// -------------------------------------

// @cars/deletecar    DELETE api/cars/delete/:id
// @description       DELETE car by id
// @acces             private
// carsRouter.delete("/delete/:id", auth.authUser, carsController.deleteCarById);

module.exports = carsRouter;
