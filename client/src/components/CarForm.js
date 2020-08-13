import React, { useState, useEffect } from "react";
import CarTable from "./CarTable";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import axios from "axios";

function CarSerch() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState("");
  const [carModel, setCarModel] = useState("");

  useEffect(() => {
    async function getNewCars() {
      const response = await axios.get("/cars/curentYear");
      try {
        if (response.status === 200) {
          setCars(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getNewCars();
  }, []);

  useEffect(() => {
    if (carModel !== "" || carYear !== "") {
      async function getfilterdCars() {
        const response = await axios.get("/cars/filter", {
          params: {
            modelName: carModel,
            modelYear: carYear,
          },
        });
        try {
          if (response.status === 200) {
            setCars(response.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
      getfilterdCars();
    }
  }, [carModel, carYear]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={{
          width: "50% auto",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <FormControl>
          <InputLabel disabled value="">
            {" "}
            Model{" "}
          </InputLabel>
          <Select
            value = {carModel}
            onChange={(e) => setCarModel(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="mazda">mazda</MenuItem>
            <MenuItem value="ford">ford</MenuItem>
            <MenuItem value="seat">seat</MenuItem>
            <MenuItem value="renault">renault</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel disabled value="">
            {" "}
            Year{" "}
          </InputLabel>
          <Select
            value = {carYear}
            onChange={(e) => setCarYear(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
            <MenuItem value="2018">2018</MenuItem>
            <MenuItem value="2017">2017</MenuItem>
            <MenuItem value="2016">2016</MenuItem>
          </Select>
        </FormControl>
      </form>
      <CarTable cars={cars} />
    </div>
  );
}

export default CarSerch;
