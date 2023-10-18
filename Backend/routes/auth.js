const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser")
const JWT_SECRET = "Rushiisagoodb$oy";

//ROUTE:1 Create a User using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
      // Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success=false;
        return res
          .status(400)
          .json({success, error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      success=true; 
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//ROUTE:2 Authenticate a User using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Take the email and password
    const { email, password } = req.body;
    try {
      // Is email exists?
      let user = await User.findOne({ email });

      // NO
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({success, error: "Please try to login with correct credentials" });
      }

      // Comapare the entered password and the hash string in out database
      const passwordCompare = await bcrypt.compare(password, user.password);

      // if they dont match
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({success, error: "Please try to login with correct credentials" });
      }

      // if match then send the data
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE:3 Get Logged in  User details using: POST "/api/auth/getuser". login required
router.post("/getuser", fetchuser, 
  async (req, res) => {
try{
  userId = req.user.id;
  const user = await User.findById(userId).select("-password");
  res.send(user)
}
catch(error){
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
  })
module.exports = router;
