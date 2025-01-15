const Menu = require('../../models/menumodel');


async function updatingmenuitem(req,res){
    try {
        const menuItemId = req.params.id; 
        const updateData = req.body; 
    
        
        const updatedMenuItem = await Menu.findByIdAndUpdate(menuItemId, updateData, { new: true });
    
        if (!updatedMenuItem) {
          return res.status(404).json({ message: 'Menu item not found' });
        }
    
        res.status(200).json(updatedMenuItem);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
      }

}

module.exports=updatingmenuitem