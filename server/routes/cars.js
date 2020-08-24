const router = require("express").Router();
const cars = require("../api/api.json");
const carsModule = require("../module/cars");

router.get("/filter", (req, res) => {
  const query = req.query;
  const filterdCars = carsModule.filterByQuery(query, cars);
  res.status(200).send(filterdCars);
});

router.get("/allCars", (req, res) => {
  res.status(200).send(cars);
});


module.exports = router;