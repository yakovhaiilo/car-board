const router = require("express").Router();
const User = require("../module/user");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
   console.log(req.body)
  const {email, password, name} = req.body;
 
  const userExist = await User.findOne({ email });
  if (userExist) return res.status(400).json({error:"Email already exists"});

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = new User({name, email, password: hashPassword});
  try {
    const savedUser = await user.save();
    res.status(201).json({savedUser , success: 'You have successfully registered and now you can login' });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
   // chaking if the user is alredy in DB
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: "Email not found"});
 
  const valisPass = await bcrypt.compare(req.body.password, user.password);
  if (!valisPass) return res.status(400).json({ error: "Email and password do not match"});
  
   // create and assign a token 
   const token = jwt.sign({ _id: user._id}, process.env.TOKEN_SECRET, {expiresIn: '3d'});
   const { _id, email, name } = user

   return res.json({
     token,
     user: {_id , email, name }
   })
});

module.exports = router;
