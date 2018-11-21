const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// get single user 
router.get('/:userId', (req, res, next) => {
  res.json('respond with a resource');
})

// create a user
router.post('/', (req, res, next) => {
  res.json('respond with a resource');
})

// update user info
router.put('/:userId', (req, res, next) => {
  res.json('respond with a resource');
})

// delete a user
router.delete('/:userId', (req, res, next) => {
  res.json('respond with a resource');
})


module.exports = router;
