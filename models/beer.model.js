const mongoose = require("mongoose");

const BeerSchema = mongoose.Schema({
  beerName: String,
  brewer: {
    name: String,
    location: String,
    url: String
  },
  author: {
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
  },
  rating: {
    look: Number,
    smell: Number,
    taste: Number,
    feel: Number,
    overall: Number
  },
  image: String,
  style: String,
  abv: String,
  ibu: String,
  availability: String,
  notes: String,
  reviews: [
    {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Review"
    }
  ]
})

module.exports = mongoose.model("Beer", BeerSchema);

