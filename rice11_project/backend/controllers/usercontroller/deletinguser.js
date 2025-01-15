const User = require('../../models/usermodel'); 
async function deletinguser(req, res) {
    try {
        const userId = req.params.id; 
    
        const deletedUser = await User.findByIdAndDelete(userId);
    
        if (!deletedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
      }

}
module.exports = deletinguser