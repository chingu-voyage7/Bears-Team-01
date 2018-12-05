
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  profileID: String,
  name: {type: String, required: true},
  email: String,
  avatar: String,
  picture: String,
  date: {type: Date, default: Date.now},
  provider: String,
  ml: {
    look: Array,
    smell: Array,
    taste: Array,
    feel: Array
  },
  facebook: {
    id: String,
    token: String,
  }
})

module.exports = mongoose.model("User", UserSchema);