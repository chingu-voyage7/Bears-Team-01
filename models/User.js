const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  profileID: String
});

module.exports = mongoose.model('users', userSchema);
