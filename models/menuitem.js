const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuitemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  pricing: {
    type: { type: String },
    required: true,
  },
});

const MenuItem = mongoose.model("MenuItem", menuitemSchema);

module.exports = MenuItem;
