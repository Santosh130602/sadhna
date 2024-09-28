
import React from 'react';
import { useLocation } from 'react-router-dom';
import Bgimg from "../assets/vayam.png"; // Importing background image

const VayamPaymentForm = () => {
  const location = useLocation();
  const { name, fatherName, dob, phone, email, aadhar, amount } = location.state || {};

  return (
    <div 
      className="max-w-md mx-auto mt-10 p-6 bg-cover bg-center rounded-lg shadow-lg" 
      style={{ 
        backgroundImage: `url(${Bgimg})`, 
        backgroundSize: '50%', // Adjust size here (e.g., '50%', 'contain', or 'cover')
        backgroundRepeat: 'no-repeat' // Prevents the image from repeating
      }} 
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Payment Summary</h1>
      <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <tbody>
            <tr className="border-b">
              <td className="font-medium py-2">Name</td>
              <td className="text-right py-2">{name || 'N/A'}</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2">Father's Name</td>
              <td className="text-right py-2">{fatherName || 'N/A'}</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2">Date of Birth</td>
              <td className="text-right py-2">{dob || 'N/A'}</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2">Phone</td>
              <td className="text-right py-2">{phone || 'N/A'}</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2">Email</td>
              <td className="text-right py-2">{email || 'N/A'}</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2">Aadhar</td>
              <td className="text-right py-2">{aadhar || 'N/A'}</td>
            </tr>
            <tr>
              <td className="font-medium py-2">Amount</td>
              <td className="text-right py-2 text-green-600 font-bold">{amount ? `₹${amount}` : 'N/A'}</td>
            </tr>
          </tbody>
        </table>
        <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default VayamPaymentForm;
