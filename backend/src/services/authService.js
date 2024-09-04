const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtSecret, jwtExpiration } = require('../config/jwt');

const register = async (userData) => {
    const { username, email, password } = userData;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return { message: 'User registered successfully' };
};

const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: jwtExpiration });

    return { token, user };
};

const logout = async () => {
    // Handle logout logic if needed, e.g., token blacklisting
    return { message: 'User logged out successfully' };
};

const refreshToken = async (token) => {
    // Handle token refresh logic
    try {
        const decoded = jwt.verify(token, jwtSecret);
        const newToken = jwt.sign({ id: decoded.id }, jwtSecret, { expiresIn: jwtExpiration });
        return { token: newToken };
    } catch (error) {
        throw new Error('Invalid token');
    }
};

module.exports = {
    register,
    login,
    logout,
    refreshToken,
};
