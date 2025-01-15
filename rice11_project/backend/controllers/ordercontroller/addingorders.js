const mongoose = require('mongoose');
const Order = require('../../models/ordermodel');
const User = require('../../models/usermodel');
const Menu = require('../../models/menumodel');
const Customer = require('../../models/customermodel');

async function addingorders(req, res) {
  try {
    const { items, totalAmount, userId } = req.body;


    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    if (user.role !== 'customer') {
      return res.status(403).json({ message: 'Only customers can place orders' });
    }


    const menuItems = await Menu.find({ '_id': { $in: items } });
    if (menuItems.length !== items.length) {
      return res.status(400).json({ message: 'Some menu items are invalid' });
    }


    const newOrder = new Order({
      items,
      totalAmount,
      user: userId,
    });

    await newOrder.save();


    let customer = await Customer.findOne({ email: user.email });
    if (!customer) {

      customer = new Customer({
        name: user.name,
        email: user.email,
        orders: [newOrder._id],
      });


      await customer.save();
    } else {

      customer.orders.push(newOrder._id);
      await customer.save();
    }

    res.status(201).json({ message: 'Order placed successfully', newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

module.exports = addingorders;
