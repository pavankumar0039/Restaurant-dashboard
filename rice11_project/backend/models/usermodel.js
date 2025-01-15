const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  }, 
  role: {
    type: String,
    enum: ['admin', 'customer'], 
    required: true,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
