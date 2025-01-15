const User = require('../../models/usermodel');


async function updatinguser(req, res) {
    try {
        const userId = req.params.id; 
        const updateData = req.body; 
    
       
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.status(200).json(updatedUser); 
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
      }

}
module.exports = updatinguser