const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const isLogedIn = require("../middlewares/requireLogin");

router.get("/", isLogedIn, (req, res, next) => {
  res.status(200).json(req.user);
});

module.exports = router;
