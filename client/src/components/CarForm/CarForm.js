import React, { useState, useEffect } from "react";
import axios from "axios";
import CarTable from "../CarTable/CarTable";
import './CarForm.css';
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";


function CarForm() {
  const [carsList, setCarsList] = useState([]);
  const [carYear, setCarYear] = useState("");
  const [carModel, setCarModel] = useState("");
  const carYears = ['2020','2019','2018','2017','2016'];
  const carNames = ['mazda','ford','seat','renault'];

  useEffect(() => {
    async function getNewCars() {
      const response = await axios.get("/cars/curentYear");
      try {
        if (response.status === 200) {
          setCarsList(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getNewCars();
  }, []);

  useEffect(() => {
    if (carModel || carYear) {
      async function getfilterdCars() {
        const response = await axios.get("/cars/filter", {
          params: {
            modelName: carModel,
            modelYear: carYear,
          },
        });
        try {
          if (response.status === 200) {
            setCarsList(response.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
      getfilterdCars();
    }
  }, [carModel, carYear]);

  return (
    <>
    <div className = "CarForm">
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <FormControl>
          <InputLabel>Model</InputLabel>
          <Select value = {carModel} onChange={(e) => setCarModel(e.target.value)}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
             {carNames.map((name,i) => <MenuItem key = {i} value={name}>{name}</MenuItem>)} 
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel> Year </InputLabel>
          <Select value = {carYear} onChange={(e) => setCarYear(e.target.value)}>
            <MenuItem value=""><em>None</em></MenuItem>
            {carYears.map((year,i) => <MenuItem key = {i} value={year}>{year}</MenuItem>)} 
          </Select>
        </FormControl>
      </form>
    </div>
    <CarTable carsList = {carsList} />
    </>
  );
}

export default CarForm;
