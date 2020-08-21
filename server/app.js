const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/carsBoardDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, 
()=>{
  console.log("conect to db")
}
);

// routes 
const authRoute = require('./routes/auth');
const carsRoute = require('./routes/cars');

app.use('/api/user', authRoute);
app.use('/cars', carsRoute);


// feacbook strategy 

// const FacebookStrategy = require('passport-facebook');
// const passport = require('passport');
// const cors = require('cors');
// const User = require("./module/user");
// let user = {}


// passport.serializeUser((user,cb) =>{
//   cb(null,user)
// })

// passport.deserializeUser((user,cb) =>{
// cb(null,user)
// })


// passport.use(new FacebookStrategy({
//   clientID: '3668461106539952',
//   clientSecret: '4004706a8b21784539f87c2425f1eab2',
//   callbackURL: ""
// }, (accessToken, refreshToken, profile, done) =>{
//   console.log(profile);
//   user = {...profile};
//   return cb(null,profile);
// }
// ));

// app.use(cors());
// app.use(passport.initialize());

// app.get("/auth/facebook", passport.authenticate("facebook"));
// app.get("aute/facebook/callback",
// passport.authenticate("facebook"),
// (req,res)=>{
//   res.redirect("/login")
// })



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is up on port: " + PORT));



// function(accessToken, refreshToken, profile, done) {
//   User.findOrCreate({facebookId: user._id}, function(err, user) {
//     if (err) { return done(err); }
//     done(null, user);
//   });