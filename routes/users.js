const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const isLogedIn = require("../middlewares/requireLogin");

// get all users  ONLY FOR DEVELOPMENT PURPOSES
router.get("/", (req, res, next) => {
  User.find()
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err));
});

// get single user
router.get("/:userId", isLogedIn, (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json("No user found with this id");
      }
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: err });
    });
});

// update user info
router.put("/:userId", isLogedIn, (req, res, next) => {
  console.log(req.user);
  if (req.params.userId === req.user.profileID) {
    User.findOneAndUpdate({ profileID: req.params.userId }, req.body, {
      new: true
    }) // TOO TRUSTING OF DATA GIVEN BY CLIENT!!
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({
          message: err.message || "some error occurred while updating the user"
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
  if (req.params.userId === req.user.profileID) {
    User.deleteOne({ profileID: req.params.userId })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({
          message: err || `Could not delete user with id: ${req.params.userId}`
        });
      });
  } else {
    res
      .status(400)
      .json("Your ID does not match the user you're trying to delete");
  }
});

// create a user
// router.post('/', (req, res, next) => {
//   const user = new User({
//     authId: req.body.authId,
//     username: req.body.username,
//     picture: req.body.picture,
//     isAdmin: req.body.isAdmin
//   })
//   user.save()
//   .then(data => {
//     res.status(201).json(data);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).send({
//       message: err.message || "some error occurred!"
//     });
//   });
// });

module.exports = router;
