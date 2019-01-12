
const mongoose = require("mongoose");

const BeerSchema = mongoose.Schema({
  beerName: String,
  brewer: {
    name: String,
    location: String,
    url: String
  },
  rating: {
    look: Number,
    smell: Number,
    taste: Number,
    feel: Number,
    overall: Number
  },
  style: String,
  abv: String,
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

