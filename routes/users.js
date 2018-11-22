
const express = require('express');
const router = express.Router();
const User = require('../models/user.model');


// get all users  ONLY FOR DEVELOPMENT PURPOSES
router.get("/", (req, res, next) => {
  User.find()
  .then(data => res.status(200).json(data))
  .catch(err => console.log(err))
})

// get single user 
router.get('/:userId', (req, res, next) => {
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
    res.status(404).json({error: err});
  });
})

// create a user
router.post('/', (req, res, next) => {
  const user = new User({
    authId: req.body.authId,
    username: req.body.username,
    picture: req.body.picture,
    isAdmin: req.body.isAdmin
  })
  user.save()
  .then(data => {
    res.status(201).json(data);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({
      message: err.message || "some error occurred!"
    });
  });
})

// update user info
router.put('/:userId', (req, res, next) => {
  User.findByIdAndUpdate(req.params.userId, req.body, {new:true}) // TOO TRUSTING OF DATA GIVEN BY CLIENT!!
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json({message: err.message || "some error occurred!"})
  });
})

// delete a user
router.delete('/:userId', (req, res, next) => {
  User.deleteOne({_id: req.params.userId})
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json({message: err || "Could not delete user with id: " + id })
  });
})

module.exports = router;
