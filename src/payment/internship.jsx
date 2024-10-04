// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Bgimg from "../assets/vayam.png"; // Importing background image

// const InternshipPaymentForm = () => {
//   const location = useLocation();
//   const { name, fatherName, dob, phone, email, aadhar,appliedFor,amount } = location.state || {};
  
  

//   return (
//     <div 
//       className="max-w-md mx-auto mt-10 p-6 bg-cover bg-center rounded-lg shadow-lg" 
//       style={{ 
//         backgroundImage: `url(${Bgimg})`, 
//         backgroundSize: '50%', // Adjust size here (e.g., '50%', 'contain', or 'cover')
//         backgroundRepeat: 'no-repeat' // Prevents the image from repeating
//       }} 
//     >
//       <h1 className="text-3xl font-bold text-center mb-6 text-white">Payment Summary</h1>
//       <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
//         <table className="w-full table-auto">
//           <tbody>
//           <tr className="border-b">
//               <td className="font-medium py-2">Applied for</td>
//               <td className="text-right py-2">{appliedFor || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Name</td>
//               <td className="text-right py-2">{name || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Father's Name</td>
//               <td className="text-right py-2">{fatherName || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Date of Birth</td>
//               <td className="text-right py-2">{dob || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Phone</td>
//               <td className="text-right py-2">{phone || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Email</td>
//               <td className="text-right py-2">{email || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Aadhar</td>
//               <td className="text-right py-2">{aadhar || 'N/A'}</td>
//             </tr>
//             <tr>
//               <td className="font-medium py-2">Amount</td>
//               <td className="text-right py-2 text-green-600 font-bold">{`₹${amount}`}</td>
//             </tr>
//           </tbody>
//         </table>
//         <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow">
//           Proceed to Pay
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InternshipPaymentForm;



// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Bgimg from "../assets/vayam.png"; // Importing background image

// const InternshipPaymentForm = () => {
//   const location = useLocation();
//   const { name, fatherName, dob, phone, email, aadhar, appliedFor, amount, userID } = location.state || {};

//   const [loading, setLoading] = useState(false); // For button loading state

//   const handlePayment = async () => {
//     setLoading(true);
//     try {
//       // Create the order using your backend API
//       const orderURL = "https://your-backend-url.com/api/payment/orders"; // Update with your backend URL
//       const { data } = await axios.post(orderURL, {
//         amount: amount,
//         userID: userID, // Pass the userID to the backend
//       });

//       // Initialize Razorpay payment gateway
//       const options = {
//         key: "RAZORPAY_KEY_ID", // Replace with your Razorpay key_id
//         amount: data.amount,
//         currency: data.currency,
//         name: name,
//         description: "Internship Application Fee",
//         image: Bgimg, // Optional image, can be your company logo
//         order_id: data.id, // Order ID returned from backend
//         handler: async (response) => {
//           try {
//             // Verify the payment on backend
//             const verifyURL = "https://your-backend-url.com/api/payment/verify"; // Update with your backend URL
//             await axios.post(verifyURL, response);
//             alert("Payment successful");
//           } catch (error) {
//             console.error("Payment verification failed", error);
//             alert("Payment verification failed");
//           }
//         },
//         prefill: {
//           name: name,
//           email: email,
//           contact: phone,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();

//     } catch (error) {
//       console.error("Error during payment", error);
//       alert("Payment failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div 
//       className="max-w-md mx-auto mt-10 p-6 bg-cover bg-center rounded-lg shadow-lg" 
//       style={{ 
//         backgroundImage: `url(${Bgimg})`, 
//         backgroundSize: '50%',
//         backgroundRepeat: 'no-repeat'
//       }} 
//     >
//       <h1 className="text-3xl font-bold text-center mb-6 text-white">Payment Summary</h1>
//       <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
//         <table className="w-full table-auto">
//           <tbody>
//             <tr className="border-b">
//               <td className="font-medium py-2">Applied for</td>
//               <td className="text-right py-2">{appliedFor || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Name</td>
//               <td className="text-right py-2">{name || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Father's Name</td>
//               <td className="text-right py-2">{fatherName || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Date of Birth</td>
//               <td className="text-right py-2">{dob || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Phone</td>
//               <td className="text-right py-2">{phone || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Email</td>
//               <td className="text-right py-2">{email || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Aadhar</td>
//               <td className="text-right py-2">{aadhar || 'N/A'}</td>
//             </tr>
//             <tr>
//               <td className="font-medium py-2">Amount</td>
//               <td className="text-right py-2 text-green-600 font-bold">{`₹${amount}`}</td>
//             </tr>
//           </tbody>
//         </table>
//         <button 
//           onClick={handlePayment}
//           className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow"
//           disabled={loading}
//         >
//           {loading ? 'Processing...' : 'Proceed to Pay'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InternshipPaymentForm;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Bgimg from "../assets/vayam.png"; // Importing background image

// const InternshipPaymentForm = () => {
//   const location = useLocation();
//   const { name, fatherName, dob, phone, email, aadhar, appliedFor, amount } = location.state || {};

//   const [loading, setLoading] = useState(false); // For button loading state
//   const [userID, setUserID] = useState(null);

//   // Get userID from localStorage when the component mounts
//   useEffect(() => {
//     const storedUserID = localStorage.getItem('userID');
//     if (storedUserID) {
//       setUserID(storedUserID);
//     } else {
//       console.error('No userID found in localStorage.');
//     }
//   }, []);

//   const handlePayment = async () => {
//     if (!userID) {
//       alert("User is not logged in.");
//       return;
//     }

//     setLoading(true);
//     try {
//       // Create the order using your backend API
//       const orderURL = "https://your-backend-url.com/api/payment/orders"; // Update with your backend URL
//       const { data } = await axios.post(orderURL, {
//         amount: amount,
//         userID: userID, // Pass the userID to the backend
//       });

//       // Initialize Razorpay payment gateway
//       const options = {
//         key: "RAZORPAY_KEY_ID", // Replace with your Razorpay key_id
//         amount: data.amount,
//         currency: data.currency,
//         name: name,
//         description: "Internship Application Fee",
//         image: Bgimg, // Optional image, can be your company logo
//         order_id: data.id, // Order ID returned from backend
//         handler: async (response) => {
//           try {
//             // Verify the payment on backend
//             const verifyURL = "https://your-backend-url.com/api/payment/verify"; // Update with your backend URL
//             await axios.post(verifyURL, response);
//             alert("Payment successful");
//           } catch (error) {
//             console.error("Payment verification failed", error);
//             alert("Payment verification failed");
//           }
//         },
//         prefill: {
//           name: name,
//           email: email,
//           contact: phone,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();

//     } catch (error) {
//       console.error("Error during payment", error);
//       alert("Payment failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div 
//       className="max-w-md mx-auto mt-10 p-6 bg-cover bg-center rounded-lg shadow-lg" 
//       style={{ 
//         backgroundImage: `url(${Bgimg})`, 
//         backgroundSize: '50%',
//         backgroundRepeat: 'no-repeat'
//       }} 
//     >
//       <h1 className="text-3xl font-bold text-center mb-6 text-white">Payment Summary</h1>
//       <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
//         <table className="w-full table-auto">
//           <tbody>
//             <tr className="border-b">
//               <td className="font-medium py-2">Applied for</td>
//               <td className="text-right py-2">{appliedFor || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Name</td>
//               <td className="text-right py-2">{name || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Father's Name</td>
//               <td className="text-right py-2">{fatherName || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Date of Birth</td>
//               <td className="text-right py-2">{dob || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Phone</td>
//               <td className="text-right py-2">{phone || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Email</td>
//               <td className="text-right py-2">{email || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Aadhar</td>
//               <td className="text-right py-2">{aadhar || 'N/A'}</td>
//             </tr>
//             <tr>
//               <td className="font-medium py-2">Amount</td>
//               <td className="text-right py-2 text-green-600 font-bold">{`₹${amount}`}</td>
//             </tr>
//           </tbody>
//         </table>
//         <button 
//           onClick={handlePayment}
//           className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow"
//           disabled={loading}
//         >
//           {loading ? 'Processing...' : 'Proceed to Pay'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InternshipPaymentForm;




// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Bgimg from "../assets/vayam.png"; // Importing background image

// const InternshipPaymentForm = () => {
//   const location = useLocation();
//   const { name, fatherName, dob, phone, email, aadhar, appliedFor, amount } = location.state || {};

//   const [loading, setLoading] = useState(false); // For button loading state
//   const userId = localStorage.getItem('userId')
//   console.log(userId)
  


//   const [userID, setUserID] = useState(null);
  

//   // Get userID from localStorage when the component mounts
//   // useEffect(() => {
//   //   const storedUserID = localStorage.getItem('userID');
//   //   if (storedUserID) {
//   //     setUserID(storedUserID);
//   //   } else {
//   //     console.error('No userID found in localStorage.');
//   //   }
//   // }, []);

//   const handlePayment = async () => {
//     if (!userID) {
//       alert("User is not logged in.");
//       return;
//     }

//     setLoading(true);
//     try {
//       // Create the order using your backend API
//       const orderURL = "https://your-backend-url.com/api/payment/orders"; // Update with your backend URL
//       const { data } = await axios.post(orderURL, {
//         amount: amount,
//         userID: userID, // Pass the userID to the backend
//       });

//       // Initialize Razorpay payment gateway
//       const options = {
//         key: "RAZORPAY_KEY_ID", // Replace with your Razorpay key_id
//         amount: data.amount,
//         currency: data.currency,
//         name: name,
//         description: "Internship Application Fee",
//         image: Bgimg, // Optional image, can be your company logo
//         order_id: data.id, // Order ID returned from backend
//         handler: async (response) => {
//           try {
//             // Verify the payment on backend
//             const verifyURL = "https://your-backend-url.com/api/payment/verify"; // Update with your backend URL
//             await axios.post(verifyURL, {
//               ...response,
//               userID: userID, // Include userID in the verification request
//             });
//             alert("Payment successful");
//           } catch (error) {
//             console.error("Payment verification failed", error);
//             alert("Payment verification failed");
//           }
//         },
//         prefill: {
//           name: name,
//           email: email,
//           contact: phone,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();

//     } catch (error) {
//       console.error("Error during payment", error);
//       alert("Payment failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div 
//       className="max-w-md mx-auto mt-10 p-6 bg-cover bg-center rounded-lg shadow-lg" 
//       style={{ 
//         backgroundImage: `url(${Bgimg})`, 
//         backgroundSize: '50%',
//         backgroundRepeat: 'no-repeat'
//       }} 
//     >
//       <h1 className="text-3xl font-bold text-center mb-6 text-white">Payment Summary</h1>
//       <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
//         <table className="w-full table-auto">
//           <tbody>
//             <tr className="border-b">
//               <td className="font-medium py-2">Applied for</td>
//               <td className="text-right py-2">{appliedFor || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Name</td>
//               <td className="text-right py-2">{name || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Father's Name</td>
//               <td className="text-right py-2">{fatherName || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Date of Birth</td>
//               <td className="text-right py-2">{dob || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Phone</td>
//               <td className="text-right py-2">{phone || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Email</td>
//               <td className="text-right py-2">{email || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Aadhar</td>
//               <td className="text-right py-2">{aadhar || 'N/A'}</td>
//             </tr>
//             <tr>
//               <td className="font-medium py-2">Amount</td>
//               <td className="text-right py-2 text-green-600 font-bold">{`₹${amount}`}</td>
//             </tr>
//           </tbody>
//         </table>
//         <button 
//           onClick={handlePayment}
//           className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow"
//           disabled={loading}
//         >
//           {loading ? 'Processing...' : 'Proceed to Pay'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InternshipPaymentForm;








// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Bgimg from "../assets/vayam.png"; // Importing background image

// const InternshipPaymentForm = () => {
//   const location = useLocation();
//   const { name, fatherName, dob, phone, email, aadhar, appliedFor, amount } = location.state || {};

//   const [loading, setLoading] = useState(false); // For button loading state
//   const [userID, setUserID] = useState(localStorage.getItem('userId')); // Get userID from localStorage directly

//   // Log the userID to the console
//   console.log("User ID:", userID);

//   const handlePayment = async () => {
//     if (!userID) {
//       alert("User is not logged in.");
//       return;
//     }

//     setLoading(true);
//     try {
//       // Create the order using your backend API
//       const orderURL = "http://localhost:4000/api/intern/orders"; // Update with your backend URL
//       const { data } = await axios.post(orderURL, {
//         amount: amount,
//         userID: userID, // Pass the userID to the backend
//       });

//       // Initialize Razorpay payment gateway
//       const options = {
//         key: "rzp_test_I8CFqBxzPFBxRx", // Replace with your Razorpay key_id
//         amount: data.amount,
//         currency: data.currency,
//         name: name,
//         description: "Internship Application Fee",
//         image: Bgimg, // Optional image, can be your company logo
//         order_id: data.id, // Order ID returned from backend
//         handler: async (response) => {
//           try {
//             // Verify the payment on backend
//             const verifyURL = "http://localhost:4000/api/intern/verify"; // Update with your backend URL
//             await axios.post(verifyURL, {
//               ...response,
//               userID: userID, // Include userID in the verification request
//             });
//             alert("Payment successful");
//           } catch (error) {
//             console.error("Payment verification failed", error);
//             alert("Payment verification failed");
//           }
//         },
//         prefill: {
//           name: name,
//           email: email,
//           contact: phone,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();

//     } catch (error) {
//       console.error("Error during payment", error);
//       alert("Payment failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div 
//       className="max-w-md mx-auto mt-10 p-6 bg-cover bg-center rounded-lg shadow-lg" 
//       style={{ 
//         backgroundImage: `url(${Bgimg})`, 
//         backgroundSize: '50%',
//         backgroundRepeat: 'no-repeat'
//       }} 
//     >
//       <h1 className="text-3xl font-bold text-center mb-6 text-white">Payment Summary</h1>
//       <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
//         <table className="w-full table-auto">
//           <tbody>
//             <tr className="border-b">
//               <td className="font-medium py-2">Applied for</td>
//               <td className="text-right py-2">{appliedFor || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Name</td>
//               <td className="text-right py-2">{name || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Father's Name</td>
//               <td className="text-right py-2">{fatherName || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Date of Birth</td>
//               <td className="text-right py-2">{dob || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Phone</td>
//               <td className="text-right py-2">{phone || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Email</td>
//               <td className="text-right py-2">{email || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Aadhar</td>
//               <td className="text-right py-2">{aadhar || 'N/A'}</td>
//             </tr>
//             <tr>
//               <td className="font-medium py-2">Amount</td>
//               <td className="text-right py-2 text-green-600 font-bold">{`₹${amount}`}</td>
//             </tr>
//           </tbody>
//         </table>
//         <button 
//           onClick={handlePayment}
//           className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow"
//           disabled={loading}
//         >
//           {loading ? 'Processing...' : 'Proceed to Pay'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InternshipPaymentForm;



// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Bgimg from "../assets/vayam.png"; // Importing background image

// const InternshipPaymentForm = () => {
//   const location = useLocation();
//   const { name, fatherName, dob, phone, email, aadhar, appliedFor, amount } = location.state || {};

//   const [loading, setLoading] = useState(false); // For button loading state
//   const [userID, setUserID] = useState(localStorage.getItem('userId')); // Get userID from localStorage directly

//   // Log the userID to the console
//   console.log("User ID:", userID);

//   const handlePayment = async () => {
//     if (!userID) {
//       alert("User is not logged in.");
//       return;
//     }

//     setLoading(true);
//     try {
//       // Create the order using your backend API
//       const orderURL = "http://localhost:4000/api/intern/orders"; // Update with your backend URL
//       const { data } = await axios.post(orderURL, {
//         amount: amount,
//         userID: userID, // Pass the userID to the backend
//       });

//       // Initialize Razorpay payment gateway
//       const options = {
//         key: process.env.REACT_APP_RAZORPAY_KEY, 
//         // key : "rzp_test_I8CFqBxzPFBxRx",
//         amount: data.data.amount,
//         currency: data.data.currency,
//         name: name,
//         description: "Internship Application Fee",
//         image: Bgimg, // Optional image, can be your company logo
//         order_id: data.data.id, // Order ID returned from backend
//         handler: async (response) => {
//           try {
//             // Verify the payment on backend
//             const verifyURL = "http://localhost:4000/api/intern/verify"; 
//             await axios.post(verifyURL, {
//               razorpay_orderID: response.razorpay_order_id,
//               razorpay_paymentID: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               userID: userID, // Include userID in the verification request
//               amount: amount, // Include the amount
//             });
//             alert("Payment successful");
//           } catch (error) {
//             console.error("Payment verification failed", error);
//             alert("Payment verification failed");
//           }
//         },
//         prefill: {
//           name: name,
//           email: email,
//           contact: phone,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();

//     } catch (error) {
//       console.error("Error during payment", error);
//       alert("Payment failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div 
//       className="max-w-md mx-auto mt-10 p-6 bg-cover bg-center rounded-lg shadow-lg" 
//       style={{ 
//         backgroundImage: `url(${Bgimg})`, 
//         backgroundSize: '50%',
//         backgroundRepeat: 'no-repeat'
//       }} 
//     >
//       <h1 className="text-3xl font-bold text-center mb-6 text-white">Payment Summary</h1>
//       <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
//         <table className="w-full table-auto">
//           <tbody>
//             <tr className="border-b">
//               <td className="font-medium py-2">Applied for</td>
//               <td className="text-right py-2">{appliedFor || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Name</td>
//               <td className="text-right py-2">{name || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Father's Name</td>
//               <td className="text-right py-2">{fatherName || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Date of Birth</td>
//               <td className="text-right py-2">{dob || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Phone</td>
//               <td className="text-right py-2">{phone || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Email</td>
//               <td className="text-right py-2">{email || 'N/A'}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="font-medium py-2">Aadhar</td>
//               <td className="text-right py-2">{aadhar || 'N/A'}</td>
//             </tr>
//             <tr>
//               <td className="font-medium py-2">Amount</td>
//               <td className="text-right py-2 text-green-600 font-bold">{`₹${amount}`}</td>
//             </tr>
//           </tbody>
//         </table>
//         <button 
//           onClick={handlePayment}
//           className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow"
//           disabled={loading}
//         >
//           {loading ? 'Processing...' : 'Proceed to Pay'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InternshipPaymentForm;







import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Use useNavigate for redirecting
import axios from 'axios';
import Bgimg from "../assets/vayam.png"; // Importing background image

const InternshipPaymentForm = () => {
  const location = useLocation();
  const { name, fatherName, dob, phone, email, aadhar, appliedFor, amount } = location.state || {};
  
  const navigate = useNavigate(); // Initialize useNavigate
  const [loading, setLoading] = useState(false);
  const [userID, setUserID] = useState(localStorage.getItem('userId'));

  console.log("User ID:", userID);

  const handlePayment = async () => {
    if (!userID) {
      alert("User is not logged in.");
      return;
    }

    setLoading(true);
    try {
      // Create the order using your backend API
      const orderURL = "http://localhost:4000/api/intern/orders";
      const { data } = await axios.post(orderURL, {
        amount: amount,
        userID: userID,
      });

      // Initialize Razorpay payment gateway
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        amount: data.data.amount,
        currency: data.data.currency,
        name: name,
        description: "Internship Application Fee",
        image: Bgimg,
        order_id: data.data.id,
        handler: async (response) => {
          try {
            // Verify the payment on backend
            const verifyURL = "http://localhost:4000/api/intern/verify";
            const verificationResponse = await axios.post(verifyURL, {
              razorpay_orderID: response.razorpay_order_id,
              razorpay_paymentID: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userID: userID,
              amount: amount,
              appliedFor: appliedFor,

            });

            // After successful payment, navigate to the success page and pass data
            navigate('/intern-payment-success', {
              state: {
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                appliedFor,
                name,
                fatherName,
                dob,
                phone,
                email,
                aadhar,
                amount,
              },
            });
          } catch (error) {
            console.error("Payment verification failed", error);
            alert("Payment verification failed");
          }
        },
        prefill: {
          name: name,
          email: email,
          contact: phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();

    } catch (error) {
      console.error("Error during payment", error);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="max-w-md mx-auto mt-10 p-6 bg-cover bg-center rounded-lg shadow-lg" 
      style={{ 
        backgroundImage: `url(${Bgimg})`, 
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat'
      }} 
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Payment Summary</h1>
      <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <tbody>
            <tr className="border-b">
              <td className="font-medium py-2">Applied for</td>
              <td className="text-right py-2">{appliedFor || 'N/A'}</td>
            </tr>
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
              <td className="text-right py-2 text-green-600 font-bold">{`₹${amount}`}</td>
            </tr>
          </tbody>
        </table>
        <button 
          onClick={handlePayment}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Proceed to Pay'}
        </button>
      </div>
    </div>
  );
};

export default InternshipPaymentForm;

