const express = require("express");
const router = express.Router();
const Beer = require("../models/beer.model.js");
const Review = require("../models/review.model.js");
const isLoggedIn = require("../middlewares/requireLogin");

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
router.post("/", isLoggedIn, function(req, res){
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
