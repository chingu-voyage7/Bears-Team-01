const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("/", (req, res, next) => {
  console.log(req.user);
  res.status(200).json(req.user);  
});

module.exports = router;
