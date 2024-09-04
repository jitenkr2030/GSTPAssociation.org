const Payment = require('../models/Payment');

const processPayment = async (paymentData) => {
    const newPayment = new Payment(paymentData);
    await newPayment.save();
    return newPayment;
};

const getPaymentDetails = async (paymentId) => {
    return await Payment.findById(paymentId);
};

module.exports = {
    processPayment,
    getPaymentDetails,
};
