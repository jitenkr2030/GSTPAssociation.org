const GST = require('../models/GST');

const fileGSTReturn = async (gstData) => {
    const newGSTReturn = new GST(gstData);
    await newGSTReturn.save();
    return newGSTReturn;
};

const getGSTReturns = async () => {
    return await GST.find({});
};

const getGSTReturnById = async (returnId) => {
    return await GST.findById(returnId);
};

const updateGSTReturn = async (returnId, gstData) => {
    const updatedGSTReturn = await GST.findByIdAndUpdate(returnId, gstData, { new: true });
    return updatedGSTReturn;
};

const deleteGSTReturn = async (returnId) => {
    await GST.findByIdAndDelete(returnId);
    return { message: 'GST return deleted successfully' };
};

module.exports = {
    fileGSTReturn,
    getGSTReturns,
    getGSTReturnById,
    updateGSTReturn,
    deleteGSTReturn,
};
