const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming you're using ObjectId for user reference
    required: true,
    ref: "User", // Reference to the User model
  },
  orderId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  signature: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  appliedFor:{
    type: String,
    required: true,
  },
  currency: {
    type: String,
    default: "INR",
  },
  status: {
    type: String,
    enum: ["pending", "successful", "failed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for the transaction schema
const InternTransaction = mongoose.model("InternTransaction", transactionSchema);

module.exports = InternTransaction;
