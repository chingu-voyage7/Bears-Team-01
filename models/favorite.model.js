const mongoose = require("mongoose");

const FavoriteSchema = mongoose.Schema({
  userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  },
  beerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Beer"
  },
  rating: Boolean
});

module.exports = mongoose.model("Favorite", FavoriteSchema);
