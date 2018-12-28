const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Beer = require("../models/beer.model.js");
const Review = require("../models/review.model.js");
const isLoggedIn = require("../middlewares/requireLogin");

// Get all the reviews of a beer
router.get("/all/:beerId", (req, res, next) => {
  Beer.findById(req.params.beerId)
    .then(beer => {
      if (beer) {
        console.log( beer.reviews.map(reviewId => new mongoose.Types.ObjectId(reviewId)) );
        Review.find({
          '_id': { $in: beer.reviews.map(reviewId => new mongoose.Types.ObjectId(reviewId)) }
        })
        .then(reviews => {
          if (reviews) {
            res.status(200).json(reviews);
          } else {
            res.status(404).json("No reviews found for this beer");
          }
        })
        .catch(err => {
          console.log(err);
          res.status(404).json({ error: err });
        });
        //res.status(200).json(beer.reviews[0]);
      } else {
        res.status(404).json("No beer found with this id");
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
        res.status(404).json("No review found with this id");
      }
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: err });
    });
});

//Reviews New
router.get("/new", isLoggedIn, function(req, res){
  //find beer by id
  Beer.findById(req.params.id, function(err, beer){
      if(err){
          console.log(err);
      } else {
          res.redirect('/beer/' + req.params.id);
      }
  });
});

//Reviews Create
router.post("/:beerId", isLoggedIn, function(req, res){
  //lookup beer using ID
  console.log("****debug**** : ", req.body);

  Beer.findById(req.body.beerId, function(err, beer){
      if(err){
         req.flash("error", "Error: Something went wrong!");
         res.redirect("/browse");
      } else {
          Review.create({
            text: req.body.textValue
          }, function(err, review){
              if(err){
                  console.log(err);
              } else {
                  review.author.id = req.user._id;
                  review.author.username = req.user.username;
                  review.author.name = req.user.name;
                  review.author.picture = req.user.picture;
                  review.date = new Date();
                  console.log(review)
                  //save review
                  review.save();
                  beer.reviews.push(review);
                  beer.save();
                  res.redirect("/beer/" + beer._id);
              }
          });
      }
  });
});

module.exports = router;
