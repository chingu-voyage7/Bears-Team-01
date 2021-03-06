const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  profileID: String,
  name: { type: String, required: true },
  email: String,
  picture: String,
  date: { type: Date, default: Date.now },
  ml: {
    look: Array,
    smell: Array,
    taste: Array,
    feel: Array
  }
});

module.exports = mongoose.model("User", UserSchema);
