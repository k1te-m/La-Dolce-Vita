const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: "Please enter a valid password.",
    trim: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  past_orders: {
    type: Object,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
