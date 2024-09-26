

const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    merchantTransactionId: { type: String, required: true },
    userId: { type: String, required: true },  // The logged-in user ID
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    DOB: { type: Date, required: true },
    gender: { type: String, required: true },
    aadhar: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    occupation: { type: String, required: true },
    university: { type: String },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'pending' },  // Status: 'pending', 'success', 'failed'
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
