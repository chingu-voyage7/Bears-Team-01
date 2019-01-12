const express = require("express");
const router = express.Router();
const Beer = require("../models/beer.model.js");
const isLoggedIn = require("../middlewares/requireLogin");
const multer = require("multer");
const path = require('path');
const upload = multer({ dest: path.join(__dirname, '../client/public/images')});

// Get all beers
router.get("/", function(req, res, next) {
  console.log("beers route");
  Beer.find()
    .then(beers => {
      res.send(beers);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: err.message || "some error occurred!"
      });
    });
});

// Get a single beer
router.get("/:beerId", (req, res, next) => {
  Beer.findById(req.params.beerId)
    .then(beer => {
      if (beer) {
        res.status(200).json(beer);
      } else {
        res.status(404).json("No beer found with this id");
      }
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: err });
    });
});

// Create a beer instance
router.post("/", isLoggedIn, upload.single('beerImage'), (req, res, next) => {
  const beerData = JSON.parse(req.body.beerData);
    // console.log(beerData);
    // console.log(req.file);

  // if (!req.body.brewer.name) {
  //   return res.status(400).json({
  //     message: "Brewer name must be filled out"
  //   });
  // }
  const beer = new Beer({
    beerName: beerData.beerName,
    brewer: {
      name: beerData.brewer.name,
      location: beerData.brewer.location,
      url: beerData.brewer.url
    },
    author: {
      id: req.user._id
    },
    style: beerData.style,
    abv: beerData.abv,
    availability: beerData.availability,
    notes: beerData.description,
    image: (req.file && req.file.filename ? req.file.filename : null)
  });
  beer
    .save()
    .then(data => {
      res.status(201).json({id: data._id});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: err.message || "some error occurred!"
      });
    });
});

// Update a beer
router.put("/:beerId", isLoggedIn, (req, res, next) => {
  Beer.findByIdAndUpdate(req.params.beerId, req.body, { new: true }) // TOO TRUSTING OF DATA GIVEN BY CLIENT!!
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: err.message || "some error occurred!" });
    });
});

// Delete a beer
router.delete("/:beerId", isLoggedIn, (req, res, next) => {
  const id = req.params.beerId;
  Beer.deleteOne({ _id: id })
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
