const Order = require('../../models/ordermodel'); 

async function gettingorders(req,res){
    try {
        const userId = req.query.userId || req.userId; 
    
        let orders;
        
        
        if (userId) {
          orders = await Order.find({ user: userId })
            .populate('items') 
            .populate('user', 'name email'); 
        } else {
         
          orders = await Order.find()
            .populate('items') 
            .populate('user', 'name email'); 
        }
    
        if (orders.length === 0) {
          return res.status(404).json({ message: 'No orders found' });
        }
    
        res.status(200).json({ orders });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
      }

}
module.exports=gettingorders