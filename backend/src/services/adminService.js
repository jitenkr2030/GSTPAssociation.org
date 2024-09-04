const User = require('../models/User');
const Forum = require('../models/Forum');

const getAllUsers = async () => {
    return await User.find({});
};

const deleteUser = async (userId) => {
    await User.findByIdAndDelete(userId);
    return { message: 'User deleted successfully' };
};

const moderateForumPost = async (postId, action) => {
    // Logic to moderate a forum post (e.g., approve, delete, etc.)
    const post = await Forum.findById(postId);
    if (!post) {
        throw new Error('Post not found');
    }
    
    if (action === 'approve') {
        post.isApproved = true;
    } else if (action === 'delete') {
        await post.remove();
        return { message: 'Post deleted successfully' };
    }

    await post.save();
    return post;
};

const updateSettings = async (settingsData) => {
    // Logic to update system settings
    // This is typically stored in a configuration collection
    const settings = await Settings.findOneAndUpdate({}, settingsData, { new: true });
    return settings;
};

module.exports = {
    getAllUsers,
    deleteUser,
    moderateForumPost,
    updateSettings,
};
