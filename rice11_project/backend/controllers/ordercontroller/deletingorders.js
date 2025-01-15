const Order = require('../../models/ordermodel'); 

async function deletingorders(req, res) {
    try {
        const orderId = req.params.id; 
    
       
        const order = await Order.findByIdAndDelete(orderId);
    
        if (!order) {
          return res.status(404).json({ message: 'Order not found' });
        }
    
        res.status(200).json({ message: 'Order deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
      }

}
module.exports = deletingorders