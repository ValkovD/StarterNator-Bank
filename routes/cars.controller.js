const { validationResult } = require("express-validator");
const iterateObject = require("iterate-object");
const bcrypt = require("bcryptjs");
const Car = require("../models/Car");
const User = require("../models/User");
const { default: mongoose } = require("mongoose");
// submit car
async function submitCar(req, res) {
  // validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    make,
    model,
    year,
    reg,
    vin,
    engineNum,
    engineVolume,
    fuel,
    powerHp,
    powerKw,
    milegeBroke,
    dateBroke,
    fault,
    notes,
  } = req.body;

  try {
    let existingReg = await Car.findOne({ reg });

    let existingMilegeBroke = await Car.findOne({ milegeBroke });

    let loggedUser = await User.findById(req.userId, "-password");

    if (existingReg && existingMilegeBroke) {
      return res.status(400).json([{ msg: "Car already in database" }]);
    }
    console.log(loggedUser);
    car = new Car({
      make,
      model,
      year,
      reg,
      vin,
      engineNum,
      engineVolume,
      fuel,
      powerHp,
      powerKw,
      milegeBroke,
      dateBroke,
      fault,
      notes,
      user: req.userId,
      addedBy: `${loggedUser.name} ${loggedUser.surname}`,
    });
    await car.save();
    res.send([{ msg: "SUCCESS Car submited" }]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json([{ msg: "Server error" }]);
  }
}
// ---------------------------------
// delete car
async function deleteCar(req, res) {
  // validation of the id input it MUST have some input
  // or server crashes

  if (req.params.id.length !== 24) {
    return res
      .status(400)
      .json([{ msg: "Incorrect id format requested from client" }]);
  }

  try {
    let carTodelete = await Car.findById(req.params.id).exec();
    if (!carTodelete) {
      return res
        .status(404)
        .json({ msg: "Car id not found in database no such id found" });
    }
    let delCar = await Car.findByIdAndRemove(carTodelete);
    return res.status(200).json([{ msg: `Car with id ${delCar.make} ${delCar.model} deleted`, id: delCar._id }]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json([{ msg: "Server error" }]);
  }
}
// ---------------------------------
// get all cars
async function getAllCars(req, res) {
  try {
    let allCars = await Car.find();
    res.send(allCars);
  } catch (err) {
    console.error(err.message);
    res.status(500).json([{ msg: "Server error" }]);
  }
}
// ---------------------------------------
// get all alternators
async function getAllAlter(req, res) {
  try {
    let allAlternators = await Car.find({ fault: "alternator" });
    res.send(allAlternators);
  } catch (err) {
    console.error(err.message);
    res.status(500).json([{ msg: "Server error" }]);
  }
}
// ---------------------------------------
// get all starters
async function getAllStarter(req, res) {
  try {
    let allAllStarter = await Car.find({ fault: "starter" });
    res.send(allAllStarter);
  } catch (err) {
    console.error(err.message);
    res.status(500).json([{ msg: "Server error" }]);
  }
}
// --------------------------------------
// get cars by Description
async function getByDescription(req, res) {

  // if (req.query === null) {
  //   return res.status(400).json([{ msg: "Bad query string" }]);
  // }
  let test = { year: { $gt: '1996', $lt: '1999' } };
  let test2 = { make: 'renault' };
  let test3 = { make: 'renault', year: { '$gte': '1996', '$lte': '1999' } };
  // let searchQuerry = {}
  try {
    // ======== Check The CLIENT query and format it for the Database Query======

    let clientQuerry = req.query
    console.log("clientQuerry", clientQuerry)
    const yearRange = {}
    iterateObject(clientQuerry, (value, key) => {
      if (key === '$gte' || key === '$lte') {
        yearRange[key] = value

      }
    });
    if (Object.keys(yearRange).length >= 1) {
      delete clientQuerry['$gte']
      delete clientQuerry['$lte']
      console.log("yearRangeDone", yearRange)
      console.log("clientQuerry is now", clientQuerry)
      clientQuerry = { ...clientQuerry, year: { ...yearRange } }
      console.log("finalQuerry is ", clientQuerry)
    }

    //============================================================== 
    let searchResult = await Car.find(clientQuerry);

    if (!searchResult.length) {
      return res.status(404).json([{ msg: "No cars Found" }])
    }
    res.send(searchResult);
  } catch (err) {
    console.error(err);
    res.status(500).json([{ msg: "Server error" }]);
  }
}
module.exports = {
  submitCar,
  getAllCars,
  getAllAlter,
  getAllStarter,
  deleteCar,
  getByDescription,
};
