const router = require("express").Router();
const User = require("../module/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fetch = require('node-fetch');

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({ error: "Email is taken" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = new User({ name, email, password: hashPassword });
  try {
    const savedUser = await user.save();
    res
      .status(201)
      .json({
        success: `You have successfully signup ${savedUser.name}  now you can SIGNIN`,
      });
  } catch (err) {
    res.status(400).send(err);
  }
});


// ----------------------------------------------------------------------
router.post("/signin", async (req, res) => {

  const user = await User.findOne({ email: req.body.email });
  if (!user){
    return res.status(400).json({ error: "Email not found" });
  }
    

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass){
    return res.status(400).json({ error: "Email and password do not match" });
  } 

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {expiresIn: "3d"});
  const { _id, email, name } = user;
  return res.json({token, user: { _id, email, name }, success: `Hy ${name} Welcome back!`});
});

// ------------------------------------------------------------


router.post("/facebookLogin", async (req, res) => {

   const {userID , accessToken} = req.body;

   const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;
   return (
    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            const { email, name } = response;
            User.findOne({ email }).exec((err, user) => {
                if (user) {
                    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '3d' });
                    const { _id, email, name } = user;
                    return res.json({
                        token,
                        user: { _id, email, name }
                    });
                } else {
                    let password = email + process.env.TOKEN_SECRET;
                    user = new User({ name, email, password });
                    user.save((err, data) => {
                        if (err) {
                            console.log(err);
                            return res.status(400).json({
                                error: 'User signup failed with facebook'
                            });
                        }
                        const token = jwt.sign({ _id: data._id }, process.env.TOKEN_SECRET, { expiresIn: '3d' });
                        const { _id, email, name } = data;
                        return res.json({
                            token,
                            user: { _id, email, name }
                        });
                    });
                }
            });
        })
        .catch(error => {
            res.json({
                error: 'Facebook login failed'
            });
        })
);
  
});

module.exports = router;
