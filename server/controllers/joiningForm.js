const VayamRegistration = require('../models/vayamForm');
const InternshipApplication = require("../models/internshipForm");




const createInternshipApplication = async (req, res) => {
  try {
    // Extract data from the request body
    const { 
      userId,
      name, 
      fatherName, 
      gender, 
      phone, 
      email, 
      dob, 
      aadhar,
      address, 
      appliedFor, 
      education, 
      photo 
    } = req.body;

    if (!userId || !name || !fatherName || !gender || !phone || !email || !dob || !appliedFor || !photo) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!photo) {
      return res.status(400).json({ error: "Photo URL is required" });
    }

    const application = new InternshipApplication({
      userId,
      name,
      fatherName,
      gender,
      phone,
      email,
      dob,
      aadhar,
      address, 
      photo, 
      appliedFor,
      education: {
        highSchool: education.highSchool, 
        intermediate: education.intermediate,
        graduation: education.graduation,
        postGraduation: education.postGraduation,
      },
    });

    // Save the application to the database
    const savedApplication = await application.save();

    res.status(201).json({
      message: "Internship application submitted successfully",
      application: savedApplication,
    });
  } catch (error) {
    console.error("Error saving internship application:", error);
    res.status(500).json({ error: "Server error" });
  }
};







const registerVayamParticipant = async (req, res) => {
  try {
    const {
      isStudent,
      name,
      fatherName,
      gender,
      aadhar,
      email,
      phone,
      
      dob,
      permanentAddress,
      education,
      universityName,
      universityAddress,
      amount,
    } = req.body;

    // Create a new participant entry
    const newRegistration = new VayamRegistration({
      isStudent,
      name,
      fatherName,
      gender,
      aadhar,
      email,
      phone,
      dob,
      permanentAddress,
      education,
      universityName,
      universityAddress,
      amount,
    });

    // Save the registration in the database
    const savedRegistration = await newRegistration.save();

    // Return a success response
    res.status(201).json({
      message: "Registration successful",
      data: savedRegistration,
    });
  } catch (error) {
    console.error("Error registering participant:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};










// ******************************  ADMIN CONTROLLER ***************************

const getAllInternshipApplications = async (req, res) => {
  try {
    const applications = await InternshipApplication.find();
    return res.status(200).json(applications);
  } catch (error) {
    console.error('Error fetching internship applications:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};



const getAllVayamApplications = async (req, res) => {
  try {
    const applications = await VayamRegistration.find();
    return res.status(200).json(applications);
  } catch (error) {
    console.error('Error fetching internship applications:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};




module.exports = {
  createInternshipApplication,
  registerVayamParticipant,
  getAllInternshipApplications,
  getAllVayamApplications
};
