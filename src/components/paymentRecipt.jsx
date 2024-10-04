








import React from 'react';
import Bgimg from "../assets/logo2.png"; // Importing background image
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const PaymentReceipt = ({ userDetails, transaction }) => {
  // Function to handle download functionality
  const handleDownload = () => {
    const receiptElement = document.getElementById('Printreceipt'); // Element to capture
    html2canvas(receiptElement, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('Internship-Payment-Receipt.pdf');
    });

  };

  return (
    <div className="flex flex-col items-center">
      <div
      id="Printreceipt"
        className="max-w-[500px] mx-auto mt-10 p-6 bg-cover bg-center rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${Bgimg})`,
          backgroundSize: '70%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-green-600">Internship Payment Successful</h1>
        <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <tbody>
              <tr className="border border-gray-300">
                <td className="font-medium py-2 px-4 border border-gray-300">Applied for</td>
                <td className="text-left py-2 px-4 border border-gray-300">{transaction.appliedFor}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="font-medium py-2 px-4 border border-gray-300">Name</td>
                <td className="text-left py-2 px-4 border border-gray-300">{userDetails.name}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="font-medium py-2 px-4 border border-gray-300">Father's Name</td>
                <td className="text-left py-2 px-4 border border-gray-300">{userDetails.fatherName}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="font-medium py-2 px-4 border border-gray-300">Order ID</td>
                <td className="text-left py-2 px-4 border border-gray-300">{transaction.orderId}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="font-medium py-2 px-4 border border-gray-300">Transaction ID</td>
                <td className="text-left py-2 px-4 border border-gray-300">{transaction.paymentId}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="font-medium py-2 px-4 border border-gray-300">Date of Birth</td>
                <td className="text-left py-2 px-4 border border-gray-300">{new Date(userDetails.dob).toLocaleDateString()}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="font-medium py-2 px-4 border border-gray-300">Phone</td>
                <td className="text-left py-2 px-4 border border-gray-300">{userDetails.phone}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="font-medium py-2 px-4 border border-gray-300">Email</td>
                <td className="text-left py-2 px-4 border border-gray-300">{userDetails.email}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="font-medium py-2 px-4 border border-gray-300">Aadhar</td>
                <td className="text-left py-2 px-4 border border-gray-300">{userDetails.aadhar}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="font-medium py-2 px-4 border border-gray-300">Amount</td>
                <td className="text-left py-2 px-4 border border-gray-300">₹{transaction.amount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center mt-6">
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500 transition duration-200"
          onClick={handleDownload} // Add download functionality
        >
          Download Receipt
        </button>
      </div>
    </div>
  );
};

export default PaymentReceipt;


