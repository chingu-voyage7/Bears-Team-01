
const express = require('express');
const router = express.Router();
const Beer = require("../models/beer.model.js");

// Get all beers
router.get('/', function(req, res, next) {
  console.log('beers route');
  Beer.find()
  .then(beers => {
    res.send(beers);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({
      message: err.message || "some error occurred!"
    });
  })
});

// Get a single beer
router.get('/:beerId', (req, res, next) => {
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
    res.status(404).json({error: err});
  });
})

// Create a beer instance 
router.post('/', (req, res, next) => {
  if (!req.body.brewer.name || !req.body.style) {
    return res.status(400).json({
      message: "Brewer name and style fields must be filled out"
    });
  }
  const beer = new Beer({
    beerName: req.body.beerName,
    brewer: {
      name: req.body.brewer.name,
      location: req.body.brewer.location,
      url: req.body.brewer.url
    },
    style: req.body.style,
    abv: req.body.abv,
    availability: req.body.availability,
    notes: req.body.notes
  });
  beer.save()
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

// Update a beer
router.put('/:beerId', (req, res, next) => {
  Beer.findByIdAndUpdate(req.params.beerId, req.body, {new:true}) // TOO TRUSTING OF DATA GIVEN BY CLIENT!!
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json({message: err.message || "some error occurred!"})
  });
})


// Delete a beer
router.delete('/:beerId', (req, res, next) => {
  const id = req.params.beerId;
  Beer.deleteOne({_id: id})
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json({message: err || "Could not delete item with id: " + id })
  });
})


module.exports = router;
