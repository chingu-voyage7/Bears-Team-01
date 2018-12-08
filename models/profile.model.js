const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  bio: {
    type: String
  },
  totalReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "review"
    }
  ],
  totalFriends: {
    type: Number,
    default: 0
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  rank: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model("Profile", ProfileSchema)