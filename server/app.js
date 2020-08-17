require('dotenv').config();
const express = require("express");
const cars = require("./api/api.json");
const carsModule = require("./module/cars");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema ({
  email: String,
  password: String
});

console.log( process.env.SECRET )
userSchema.plugin(encrypt, {secret: process.env.SECRET , encryptedFields:["password"] });

const User = new mongoose.model("User", userSchema);


app.get("/cars/curentYear", (req, res) => {
  const newCars = carsModule.filterByCurentYear(cars);
  res.status(200).send(newCars);
});

app.get("/cars/filter", (req, res) => {
  const query = req.query;
  const filterdCars = carsModule.filterByQuery(query, cars);
  res.status(200).send(filterdCars);
});

app.post('/register' , (req,res) => {
  const newUser = new User({
  email: req.body.userName,
  password: req.body.userPassword
  });
   console.log(newUser)
  newUser.save(function(err){
    if(err) console.log(err)
    else{
      console.log("register sucsses")
    }
  });  
});


app.post('/login' , (req,res) => {
  const {userName, userPassword}  = req.body;
  // console.log(userName,userPassword);
  User.findOne({email:userName},function(err,fondUser){
    if(err){
      console.log(err);
    } else{
      if(fondUser){
         if (fondUser.password === userPassword){
           console.log("login sucses")
         }
      }
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is up on port: " + PORT));
