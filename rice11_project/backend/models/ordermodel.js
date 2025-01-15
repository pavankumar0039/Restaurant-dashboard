const mongoose = require('mongoose');




const orderSchema = new mongoose.Schema({
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Menu', 
      required: true,
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
