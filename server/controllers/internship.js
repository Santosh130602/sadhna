// Assuming you're using Express, Mongoose (for MongoDB) or any other database ORM

const InternTransaction = require('../models/internshipPayment'); // Assuming you have a Transaction model
const InternshipApplication = require("../models/internshipForm")

// Controller function to get all transactions by userId
const getTransactionsByUserId = async (req, res) => {
  try {
    const { userId } = req.params; // Get the userId from request parameters

    // Find all transactions where userId matches
    const transactions = await InternTransaction.find({ userId });

    if (!transactions || transactions.length === 0) {
      return res.status(404).json({ message: 'No transactions found for this user.' });
    }

    // Return the transactions in the response
    return res.status(200).json({
      success: true,
      data: transactions,
    });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while fetching transactions.',
    });
  }
};







const getInternUserDetailsUser = async (req,res) =>{
  try{
    const {userId} = req.params;

    const userDetails = await InternshipApplication.find({userId});

    if(!userDetails || userDetails.length === 0){
      return res.status(404).json({ message: 'No user found for this user.' });
    }
    return res.status(200).json({
      success: true,
      data: userDetails,
    });

  }catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while fetching user.',
    });
  }
}










//  ***************************************************    ADMIN CONTROLLER ***********************************************************


const getInternUserDetailsAdmin = async (req,res) =>{
  try{
    

    const userDetails = await InternshipApplication.find();

    if(!userDetails || userDetails.length === 0){
      return res.status(404).json({ message: 'No user found for this user.' });
    }
    return res.status(200).json({
      success: true,
      data: userDetails,
    });

  }catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while fetching user.',
    });
  }
}




const getTransactionsByAdmin = async (req, res) => {
  try {
  

    // Find all transactions where userId matches
    const transactions = await InternTransaction.find();

    if (!transactions || transactions.length === 0) {
      return res.status(404).json({ message: 'No transactions found for this user.' });
    }

    // Return the transactions in the response
    return res.status(200).json({
      success: true,
      data: transactions,
    });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while fetching transactions.',
    });
  }
};



























module.exports = { getTransactionsByUserId,getInternUserDetailsUser, getTransactionsByAdmin, getInternUserDetailsAdmin };


