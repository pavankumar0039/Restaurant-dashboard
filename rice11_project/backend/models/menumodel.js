const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    dishname: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    popularity: {
      type: Number,
      default: 0, 
    },
  });
  

  const Menu = mongoose.model('Menu', menuSchema);
  module.exports = Menu;
  