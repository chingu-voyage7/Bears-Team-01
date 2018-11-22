
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  authId: {type: String, required: true},
  username: {type: String, required: true},
  picture: String,
  isAdmin: Boolean
})

module.exports = mongoose.model("User", UserSchema);