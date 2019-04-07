const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const isLogedIn = require("../middlewares/requireLogin");

// get info about currently logged in user
router.get("/current", (req, res, next) => {
  console.log(req.user);
  if (!req.user) {
    res.status(400).json({
      message: "Currently no user logged in",
      route: "users/current",
      method: "GET"
    });
  } else {
    res.status(200).json({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      picture: req.user.picture,
      date: req.user.date,
      ml: req.user.ml,
      reviews: req.user.reviews,
      bio: req.user.bio
    });
  }
});

// update user info
router.put("/:userId", isLogedIn, (req, res, next) => {
  if (req.params.userId === req.user.id) {
    User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true
    }) // TOO TRUSTING OF DATA GIVEN BY CLIENT!!
      .then(user => {
        if (user) {
          res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            date: user.date,
            ml: user.ml,
            bio: user.bio
          });
        } else {
          res.status(404).json({
            message: "Could not find user"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: err.message || "some error occurred while updating the user",
          route: "users/USERID",
          method: "PUT"
        });
      });
  } else {
    res
      .status(400)
      .json("Your ID does not match the user you're trying to update");
  }
});

// delete a user
router.delete("/:userId", isLogedIn, (req, res, next) => {
  if (req.params.userId === req.user.id) {
    User.findByIdAndDelete(req.params.userId)
      .then(user => {
        if (user) {
          res.status(200).json({
            message: `${user.name}'s profile was successfully deleted`
          });
        } else {
          res.status(404).json({
            message: "Could not find user"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message ||
            `Could not delete user with id: ${req.params.userId}`,
          route: "users/USERID",
          method: "DELETE"
        });
      });
  } else {
    res
      .status(400)
      .json("Your ID does not match the user you're trying to delete");
  }
});

module.exports = router;
