const router = require("express").Router();
const User = require("../module/user");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {

  // chaking if the user is alredy in DB
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) return res.send("Email already exists");

  // hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  
  // create user 
  const user = new User({
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.status(201).send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
   // chaking if the user is alredy in DB
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.send("Email not found");

  const valisPass = await bcrypt.compare(req.body.password, user.password);
  if (!valisPass) return res.send('invalid password');

   // create and assign a token 
   const token = jwt.sign({ _id: user._id}, process.env.TOKEN_SECRET);
   res.status(201).send(token)

});

module.exports = router;
