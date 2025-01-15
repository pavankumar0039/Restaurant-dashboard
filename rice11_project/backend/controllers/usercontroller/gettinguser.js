const User = require('../../models/usermodel'); 


async function gettinguser(req, res) {
    try {
    
        const users = await User.find();
    
        if (users.length === 0) {
          return res.status(404).json({ message: 'No users found' });
        }
    
        res.status(200).json(users); 
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
      }


}
module.exports = gettinguser