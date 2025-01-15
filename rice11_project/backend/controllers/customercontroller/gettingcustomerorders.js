const Customer = require('../../models/customermodel'); 

async function gettingcustomerorders(req, res) {
  try {
    const customerEmail = req.body.email;  
    
  
    const customer = await Customer.findOne({ email: customerEmail }).populate('orders');

   
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    
    if (customer.orders.length === 0) {
      return res.status(404).json({ message: 'No orders found for this customer' });
    }

  
    res.status(200).json({ orders: customer.orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

module.exports = gettingcustomerorders;
