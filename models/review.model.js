const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    date: Date,
    text: String,
    beer: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Beer"
      },
      name: String
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
        name: String,
        picture: String,
    },
    category: {
      look: String,
      smell: String,
      taste: String,
      feel: String,
      overall: String
    },
});

module.exports = mongoose.model("Review", ReviewSchema);
