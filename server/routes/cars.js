const router = require("express").Router();
const cars = require("../api/api.json");
const carsModule = require("../module/cars");
const verifay = require('../middleware/verifyToken')


router.get("/curentYear",verifay,(req, res) => {
  const newCars = carsModule.filterByCurentYear(cars);
  res.status(200).send(newCars);
});

router.get("/filter",verifay, (req, res) => {
  const query = req.query;
  const filterdCars = carsModule.filterByQuery(query, cars);
  res.status(200).send(filterdCars);
});

module.exports = router;