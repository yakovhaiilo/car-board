import React, { useState, useEffect } from "react";
import axios from "axios";
import './carFilterBar.css';
import { FormControl, Select, MenuItem, InputLabel,Container} from "@material-ui/core";
import Layout from "../core/Layout";
import CarsList from "./CarsList";
import {isAuth} from '../auth/halpers';
import { Redirect } from "react-router-dom";



function CarFilterBar() {
  const [listToDisplay, setListToDisplay] = useState([]);
  const [isloading,setisloading]= useState(false);
  const [carYear, setCarYear] = useState("");
  const [carModel, setCarModel] = useState("");
  const carYears = ['2020','2019','2018','2017','2016'];
  const carNames = ['mazda','ford','seat','renault'];

  useEffect(() => {
    setisloading(true)
     axios.get('api/allCars').then((response) =>{
       if(response.status === 200){
         setListToDisplay(response.data);
         setisloading(false);
       }
     }).catch((error=>{
         console.log(error);
     }))
  }, []);

  useEffect(() => {
    if(carModel || carYear){
      setisloading(true)
      axios.get('api/filter',{
        params:{ 
        modelName: carModel,
        modelYear: carYear,
      }})
        .then((response) =>{
        if(response.status === 200){
          setListToDisplay(response.data);
          setisloading(false);
        }
      }).catch((error=>{
          console.log(error);
      }));
    }
  }, [carModel,carYear]);
 

  return (
    <Layout>
        {!isAuth() ? <Redirect to='/signup'/> : null } 
      <Container>
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
    <CarsList carsList = {listToDisplay} isloading={isloading} />
    </Container>
    </Layout>
  );
}

export default CarFilterBar;

