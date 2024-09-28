const VayamRegistration = require('../models/vayamForm');
const InternshipApplication = require("../models/internshipForm");



const createInternshipApplication = async (req, res) => {
  try {
    // Extract data from the request body and file upload
    const { name, fatherName, gender, phone, email, dob, address, appliedFor, education } = req.body;
    const photo = req.file ? req.file.path : null;

    if (!photo) {
      return res.status(400).json({ error: "Photo is required" });
    }

    // Create a new internship application document
    const application = new InternshipApplication({
      name,
      fatherName,
      gender,
      phone,
      email,
      dob,
      address: JSON.parse(address), // Convert address back to object
      photo,
      appliedFor,
      education: {
        highSchool: JSON.parse(education.highSchool),
        intermediate: JSON.parse(education.intermediate),
        graduation: JSON.parse(education.graduation),
        postGraduation: JSON.parse(education.postGraduation),
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






module.exports = {
  createInternshipApplication,
  registerVayamParticipant
};
