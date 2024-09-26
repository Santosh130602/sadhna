



import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import axios from 'axios'; // Import axios for making API requests

const ContactUs = () => {
  // State to store form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for handling success and error messages
  const [responseMessage, setResponseMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // State to manage character count for message
  const maxMessageLength = 500; // Maximum allowed message length
  const [messageLength, setMessageLength] = useState(0);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // For the message input, check the character limit
    if (name === 'message') {
      if (value.length <= maxMessageLength) {
        setFormData({
          ...formData,
          [name]: value
        });
        setMessageLength(value.length); // Update message length count
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the message exceeds the character limit
    if (formData.message.length > maxMessageLength) {
      setErrorMessage(`Message must be less than ${maxMessageLength} characters.`);
      return;
    }

    try {
      // Make POST request to backend API
      const response = await axios.post('https://your-backend-api.com/contact', formData);

      if (response.status === 200) {
        setResponseMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setMessageLength(0); // Reset message length
      }
    } catch (error) {
      setErrorMessage('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 py-12" >
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-gray-800" style={{ fontFamily: 'Gowun Batang, serif' }}>Get in Touch</h2>
          <p className="mt-2 text-gray-600" style={{ fontFamily: 'Gowun Batang, serif' }}>We'd love to hear from you! Get in touch with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-3xl text-red-500" />
              <div className='text-left'>
                <h5 className="text-lg font-semibold text-red-500">Office Address</h5>
                <p className="text-gray-600">आध्यशंकराचार्य कुंड, हज़रतगंज,  <br /> लखनऊ 226020</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="text-3xl text-green-500" />
              <div className='text-left'>
                <h5 className="text-lg font-semibold text-green-500">Phone</h5>
                <p className="text-gray-600">+91-7565979695</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaClock className="text-3xl text-blue-500" />
              <div className='text-left'>
                <h5 className="text-lg font-semibold text-blue-500">Working Hours</h5>
                <p className="text-gray-600">Monday to Friday - 9 AM to 5 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-3xl text-yellow-500" />
              <div className='text-left'>
                <h5 className="text-lg font-semibold text-yellow-500">Email</h5>
                <p className="text-gray-600">sk4bharat@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-left">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-600">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
                <p className="text-sm text-gray-500">
                  {messageLength}/{maxMessageLength} characters
                </p>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                Send Message
              </button>
            </form>

            {/* Display success or error message */}
            {responseMessage && <p className="mt-4 text-green-500">{responseMessage}</p>}
            {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
