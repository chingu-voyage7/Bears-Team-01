const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Beer = require("../models/beer.model.js");
const User = require("../models/user.model.js");
const Review = require("../models/review.model.js");
const isLoggedIn = require("../middlewares/requireLogin");
const checkReviewOwnership = require('../middlewares/checkReviewOwnership');

// Get all the reviews of a beer
router.get("/all/:beerId", (req, res, next) => {
  Beer.findById(req.params.beerId)
    .then(beer => {
      if (beer) {
        Review.find({
          '_id': { $in: beer.reviews.map(reviewId => new mongoose.Types.ObjectId(reviewId)) }
        })
        .then(reviews => {
          if (reviews) {
            res.status(200).json(reviews);
          } else {
            res.status(404).json({ msg: "No reviews found for this beer" });
          }
        })
        .catch(err => {
          console.log(err);
          res.status(404).json({ error: err });
        });
      } else {
        res.status(404).json({ msg: "No beer found with this id" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: err });
    });
});

// Get a single review
router.get("/:reviewId", (req, res, next) => {
  Review.findById(req.params.reviewId)
    .then(review => {
      if (review) {
        res.status(200).json(review);
      } else {
        res.status(404).json({ msg: "No review found with this id" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: err });
    });
});

// Create a review instance
router.post("/:beerId", isLoggedIn, (req, res, next) => {
  Beer.findById(req.body.beerId, (err, beer) => {
    if(err){
      res.status(404).json({ error: err });
    } else {
      const review = new Review({
        author: {
          id: req.user._id, 
          username: req.user.username,
          name: req.user.name,
          picture: req.user.picture
          //redundant data; does not require saving
        },
        date: new Date(),
        text: req.body.textValue,
        lookRating: req.body.categoryValues.look + '',
        category: {
          look: req.body.categoryValues.look + '',
          smell: req.body.categoryValues.smell + '',
          taste: req.body.categoryValues.taste + '',
          feel: req.body.categoryValues.feel + '',
          overall: req.body.categoryValues.overall + ''
        }
      });
      review
      .save()
      .then(data => {
        beer.reviews.push(review);
        beer.save();
        res.status(201).json(data);
      })
      .then(data => {
        User.findById(req.user._id, (err, user) => {
          if(err){
            res.status(404).json({ error: err });
          } else {
            user.reviews.push(review);
            user.save();
            res.status(201).json(data);
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          message: err.message || "some error occurred!"
        });
      });
    }
  });
});

router.delete("/:reviewId", checkReviewOwnership, (req, res, next) => {
  const id = req.params.reviewId;
  Review.deleteOne({ _id: id })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: err || "Could not delete item with id: " + id });
    });
});

module.exports = router;


