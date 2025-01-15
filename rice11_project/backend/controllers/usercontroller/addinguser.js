const User = require('../../models/usermodel');

async function addinguser(req, res) {
    try {
        const { name, email, role } = req.body;

        if (!name || !email || !role) {
            return res.status(400).json({ message: 'Missing required fields' });
        }


        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const newUser = new User({
            name,
            email,
            role,
        });


        const savedUser = await newUser.save();


        res.status(201).json({
            message: 'User created successfully',
            user: savedUser,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }

}
module.exports = addinguser