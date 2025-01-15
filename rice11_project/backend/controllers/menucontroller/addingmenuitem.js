const Menu = require('../../models/menumodel'); 




async function addingmenuitem(req,res){
    try {
        const { dishname, category, price, popularity } = req.body;
    
       
        const newMenuItem = new Menu({
          dishname,
          category,
          price,
          popularity
        });
    
       
        await newMenuItem.save();
    
        res.status(201).json({ message: 'Menu item added successfully', newMenuItem });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
      }


}
module.exports=addingmenuitem