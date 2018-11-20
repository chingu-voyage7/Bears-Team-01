
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  authId: {type: String, required: true},
  username: {type: String, required: true},
  picture: String,
  isAdmin: {type: Boolean, required: true}
})

module.exports = mongoose.model("Beer", UserSchema);