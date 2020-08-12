const express = require("express");
const cars = require("./api/api.json");
const carsModule = require("./module/cars");
const app = express();

app.get("/cars/curentYear", (req, res) => {
  const newCars = carsModule.filterByCurentYear(cars);
  res.status(200).send(newCars);
});

app.get("/cars/filter", (req, res) => {
    const query = req.query;
    const filterdCars =  carsModule.filterByQuery(query,cars);
    res.status(200).send(filterdCars);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is up on port: " + PORT));
