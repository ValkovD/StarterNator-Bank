const { check, validationResult, body } = require("express-validator");

const carDataValidator = [
  // requirements

  check("make", "Make incorrect").isString().trim().escape(),
  check("model", "Model incorrect").isString().trim().escape(),
  check("year", "Year incorrect").isInt({ min: 1800, max: 2025 }),
  // .isLength({ min: 4, max: 4 }),
  check("reg", "Reg incorrect").isString().trim().escape(),
  // check('vin', 'Make incorrect').isString(),
  // check('engineNum', 'Engine Number incorrect').isString(),
  check("engineVolume", "Engine cc incorrect. Write it as 2.0 1.6 1.5")
    .isDecimal({ force_decimal: true })
    .isFloat({
      min: 0.5,
      max: 13,
    }),
  check("fuel")
    .trim()
    .escape()
    .toLowerCase()
    .custom(async (value) => {
      if (value !== "diesel" && value !== "petrol") {
        throw new Error(`Fuel Type : "${value}" is Error. petrol or diesel`);
      }
    }),
  check("milegeBroke", "Milege incorrect")
    .isInt({
      min: 1,
      allow_leading_zeroes: false,
    })
    .notEmpty(),
  check("dateBroke", "Date incorrect")
    .isDate({
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
    })
    .optional(),
  check("fault")
    .isString()
    .toLowerCase()
    .trim()
    .escape()
    .isString()
    .trim()
    .escape()
    .custom(async (value) => {
      if (value !== "alternator" && value !== "starter") {
        throw new Error(`Fault : "${value}" is Error. starter or alternator`);
      }
    }),
  check("make", "Make incorrect"),

  // validation check
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }
];

// validation controll is in cars controller
module.exports = carDataValidator;
