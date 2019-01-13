const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Beer = require("../models/beer.model.js");
const User = require("../models/user.model.js");
const Review = require("../models/review.model.js");
const isLoggedIn = require("../middlewares/requireLogin");
const checkReviewOwnership = require("../middlewares/checkReviewOwnership");

// FOR DEV ONLY!!
const clearAllBeerReviews = async () =>
  await Beer.updateMany({}, { $set: { reviews: [] } });

const clearAllUserReviews = async () =>
  await User.updateMany({}, { $set: { reviews: [] } });

const clearAllReviews = async () => await Review.remove({});

// Get all the reviews of a beer
router.get("/all/:beerId", (req, res, next) => {
  Beer.findById(req.params.beerId)
    .then(beer => {
      if (beer) {
        Review.find({
          _id: {
            $in: beer.reviews.map(
              reviewId => new mongoose.Types.ObjectId(reviewId)
            )
          }
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

// Get all of a user's reviews
router.get("/user/:userId", async (req, res) => {
  // clearAllBeerReviews();
  // clearAllUserReviews();
  // clearAllReviews();
  const id = mongoose.Types.ObjectId(req.params.userId);
  const reviews = await Review.find({ "author.id": id });

  res.send({ reviews });
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

//Reviews Create
router.post("/:beerId", isLoggedIn, async function(req, res) {
  try {
    const { body } = req;
    const { userData, categoryValues, beerId, beerName } = req.body;
    const review = await new Review({
      date: Date.now(),
      text: body.textValue,
      beer: {
        id: beerId,
        name: beerName
      },
      author: {
        id: mongoose.Types.ObjectId(userData.id),
        username: "",
        name: userData.name,
        picture: userData.picture
      },
      category: { ...categoryValues }
    }).save();
    const [updatedBeer, updatedUser] = await Promise.all([
      Beer.findByIdAndUpdate(
        beerId,
        { $push: { reviews: review } },
        { new: true }
      ),
      User.findByIdAndUpdate(
        userData.id,
        { $push: { reviews: review } },
        { new: true }
      )
    ]);
    const updatedReviews = await Review.find({
      _id: {
        $in: updatedBeer.reviews.map(
          reviewId => new mongoose.Types.ObjectId(reviewId)
        )
      }
    });

    res.send({ updatedReviews });
  } catch (e) {
    res.status(500).send({ error: "An error occurred" });
  }
});

//Delete review route

router.delete("/:reviewId", checkReviewOwnership, function(req, res) {
  Review.findByIdAndRemove(req.params.reviewId, function(err) {
    if (err) {
      console.log("ERROR: Unable to delete review. ", err);
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ msg: "successfully deleted review." });
    }
  });
});

module.exports = router;
