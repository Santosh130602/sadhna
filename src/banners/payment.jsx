


// import axios from 'axios';
// import React, { useState } from 'react';
// import BImg from "../assets/vayam.png"; // Assuming this is your background image

// const PaymentForm = ({ userID }) => {
//     const [form, setForm] = useState({
//         name: '',
//         fatherName: '',
//         motherName: '',
//         DOB: '',
//         gender: '',
//         Aadhar: '',
//         contact: '',
//         email: '',
//         occupation: '',
//         university: '',
//         address: '',
//         amount: 0,
//     });

//     const [showRefundPolicy, setShowRefundPolicy] = useState(false);

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const paymentData = {
//             ...form,
//             userID,
//             amount: parseFloat(form.amount),
//         };

//         axios.post('http://localhost:4000/api/payment/payment', paymentData)
//             .then(response => {
//                 if (response.data && response.data.url) {
//                     window.location.href = response.data.url;
//                 }
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };

//     return (
//         <div 
//     className="flex items-center justify-center min-h-screen bg-center bg-no-repeat bg-contain" 
//     style={{ backgroundImage: `url(${BImg})` }} 
// >
//             <div className="w-11/12 mx-auto p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
//                 <div className="text-center mb-24">

//                     <h1 className=" text-5xl " style={{ fontFamily: 'Gowun Batang, serif' }}>Vayam Program Registration</h1>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     {/* Row 1: Name and Father Name */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <label htmlFor="nameInput" className="block text-gray-700 font-medium">Name</label>
//                             <input 
//                                 type="text" 
//                                 name="name" 
//                                 className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
//                                 id="nameInput" 
//                                 placeholder="Enter your name"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="fatherNameInput" className="block text-gray-700 font-medium">Father's Name</label>
//                             <input 
//                                 type="text" 
//                                 name="fatherName" 
//                                 className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                 id="fatherNameInput" 
//                                 placeholder="Enter father's name"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {/* Row 2: Mother's Name and DOB */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <label htmlFor="motherNameInput" className="block text-gray-700 font-medium">Mother's Name</label>
//                             <input 
//                                 type="text" 
//                                 name="motherName" 
//                                 className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                 id="motherNameInput" 
//                                 placeholder="Enter mother's name"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="dobInput" className="block text-gray-700 font-medium">Date of Birth</label>
//                             <input 
//                                 type="date" 
//                                 name="DOB" 
//                                 className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                 id="dobInput" 
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {/* Row 3: Gender and Aadhar */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <label htmlFor="genderInput" className="block text-gray-700 font-medium">Gender</label>
//                             <select 
//                                 name="gender" 
//                                 className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                 id="genderInput"
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value="">Select Gender</option>
//                                 <option value="Male">Male</option>
//                                 <option value="Female">Female</option>
//                                 <option value="Other">Other</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label htmlFor="aadharInput" className="block text-gray-700 font-medium">Aadhar</label>
//                             <input 
//                                 type="text" 
//                                 name="Aadhar" 
//                                 className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                 id="aadharInput" 
//                                 placeholder="Enter Aadhar number"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {/* Row 4: Contact and Email */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <label htmlFor="contactInput" className="block text-gray-700 font-medium">Contact Number</label>
//                             <input 
//                                 type="text" 
//                                 name="contact" 
//                                 className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                 id="contactInput" 
//                                 placeholder="Enter contact number"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="emailInput" className="block text-gray-700 font-medium">Email</label>
//                             <input 
//                                 type="email" 
//                                 name="email" 
//                                 className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                 id="emailInput" 
//                                 placeholder="Enter email"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {/* Row 5: Occupation and University/College */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <label htmlFor="occupationInput" className="block text-gray-700 font-medium">Occupation</label>
//                             <input 
//                                 type="text" 
//                                 name="occupation" 
//                                 className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                 id="occupationInput" 
//                                 placeholder="Enter occupation"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="universityInput" className="block text-gray-700 font-medium">University/College</label>
//                             <input 
//                                 type="text" 
//                                 name="university" 
//                                 className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                 id="universityInput" 
//                                 placeholder="Enter university or college"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {/* Row 6: Address */}
//                     <div className="mb-6">
//                         <label htmlFor="addressInput" className="block text-gray-700 font-medium">Address</label>
//                         <textarea 
//                             name="address" 
//                             className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                             id="addressInput" 
//                             placeholder="Enter address"
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     {/* Last Row: Amount */}
//                     <div className="mb-6">
//                         <label htmlFor="amountInput" className="block text-gray-700 font-medium">Amount</label>
//                         <input 
//                             type="number" 
//                             name="amount" 
//                             className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                             id="amountInput" 
//                             placeholder="Enter amount"
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <button 
//                         type="submit" 
//                         className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition ease-in-out"
//                     >
//                         Pay Now
//                     </button>

//                     <div className="mt-4 text-sm text-gray-500">
//                         <button 
//                             type="button" 
//                             className="text-indigo-600 underline" 
//                             onClick={() => setShowRefundPolicy(!showRefundPolicy)}
//                         >
//                             {showRefundPolicy ? "Hide" : "Show"} Refund Policy
//                         </button>
//                         {showRefundPolicy && (
//                             <div className="mt-2">
//                                 <p>Thank you for your interest in our services. Please note that all payments made are non-refundable. Once a transaction has been processed, we do not provide refunds or exchanges for any services rendered. <br/> We recommend that you carefully review your order before completing the payment process to ensure that it meets your requirements. If you have any questions or concerns about your order, please contact our support team before making your payment.</p>
//                             </div>
//                         )}
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default PaymentForm;







// import axios from 'axios';
// import React, { useState } from 'react';
// import TopBgImage from "../assets/hero9.jpeg";
// import FormBgImage from "../assets/vayam.png"; // Assuming this is your form background image

// const PaymentForm = ({ userID }) => {
//     const [form, setForm] = useState({
//         name: '',
//         fatherName: '',
//         motherName: '',
//         DOB: '',
//         gender: '',
//         Aadhar: '',
//         contact: '',
//         email: '',
//         occupation: '',
//         university: '',
//         address: '',
//         amount: 0,
//     });

//     const [showRefundPolicy, setShowRefundPolicy] = useState(false);

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const paymentData = {
//             ...form,
//             userID,
//             amount: parseFloat(form.amount),
//         };

//         axios.post('http://localhost:4000/api/payment/payment', paymentData)
//             .then(response => {
//                 if (response.data && response.data.url) {
//                     window.location.href = response.data.url;
//                 }
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };

//     return (
//         <div className="flex flex-col items-center">
//             {/* Top Background Section with Heading */}
//             <div 
//                 className="w-full h-64 bg-fixed bg-cover bg-center flex items-center justify-center" 
//                 style={{ backgroundImage: `url(${TopBgImage})` }} 
//             >
//                 <h1 className="text-white text-6xl font-thin " style={{ fontFamily: 'Gowun Batang, serif' }}>
//                     Vayam Program Registration
//                 </h1>
//             </div>

//             {/* Payment Form Section */}
//             <div 
//                 className="flex items-center justify-center min-h-screen bg-center bg-no-repeat bg-contain" 
//                 style={{ backgroundImage: `url(${FormBgImage})` }} 
//             >
//                 <div className="w-11/12 mx-auto p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         {/* Row 1: Name and Father Name */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label htmlFor="nameInput" className="block text-gray-700 font-medium">Name</label>
//                                 <input 
//                                     type="text" 
//                                     name="name" 
//                                     className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
//                                     id="nameInput" 
//                                     placeholder="Enter your name"
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="fatherNameInput" className="block text-gray-700 font-medium">Father's Name</label>
//                                 <input 
//                                     type="text" 
//                                     name="fatherName" 
//                                     className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                     id="fatherNameInput" 
//                                     placeholder="Enter father's name"
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Row 2: Mother's Name and DOB */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label htmlFor="motherNameInput" className="block text-gray-700 font-medium">Mother's Name</label>
//                                 <input 
//                                     type="text" 
//                                     name="motherName" 
//                                     className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                     id="motherNameInput" 
//                                     placeholder="Enter mother's name"
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="dobInput" className="block text-gray-700 font-medium">Date of Birth</label>
//                                 <input 
//                                     type="date" 
//                                     name="DOB" 
//                                     className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                     id="dobInput" 
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Row 3: Gender and Aadhar */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label htmlFor="genderInput" className="block text-gray-700 font-medium">Gender</label>
//                                 <select 
//                                     name="gender" 
//                                     className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                     id="genderInput"
//                                     onChange={handleChange}
//                                     required
//                                 >
//                                     <option value="">Select Gender</option>
//                                     <option value="Male">Male</option>
//                                     <option value="Female">Female</option>
//                                     <option value="Other">Other</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <label htmlFor="aadharInput" className="block text-gray-700 font-medium">Aadhar</label>
//                                 <input 
//                                     type="text" 
//                                     name="Aadhar" 
//                                     className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                     id="aadharInput" 
//                                     placeholder="Enter Aadhar number"
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Row 4: Contact and Email */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label htmlFor="contactInput" className="block text-gray-700 font-medium">Contact Number</label>
//                                 <input 
//                                     type="text" 
//                                     name="contact" 
//                                     className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                     id="contactInput" 
//                                     placeholder="Enter contact number"
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="emailInput" className="block text-gray-700 font-medium">Email</label>
//                                 <input 
//                                     type="email" 
//                                     name="email" 
//                                     className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                     id="emailInput" 
//                                     placeholder="Enter email"
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Row 5: Occupation and University/College */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label htmlFor="occupationInput" className="block text-gray-700 font-medium">Occupation</label>
//                                 <input 
//                                     type="text" 
//                                     name="occupation" 
//                                     className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                     id="occupationInput" 
//                                     placeholder="Enter occupation"
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="universityInput" className="block text-gray-700 font-medium">University/College</label>
//                                 <input 
//                                     type="text" 
//                                     name="university" 
//                                     className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                     id="universityInput" 
//                                     placeholder="Enter university or college"
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Row 6: Address */}
//                         <div className="mb-6">
//                             <label htmlFor="addressInput" className="block text-gray-700 font-medium">Address</label>
//                             <textarea 
//                                 name="address" 
//                                 className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                 id="addressInput" 
//                                 placeholder="Enter address"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>

//                         {/* Last Row: Amount */}
//                         <div className="mb-6">
//                             <label htmlFor="amountInput" className="block text-gray-700 font-medium">Amount</label>
//                             <input 
//                                 type="number" 
//                                 name="amount" 
//                                 className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent" 
//                                 id="amountInput" 
//                                 placeholder="Enter amount"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>

//                         {/* Submit Button */}
//                         <div className="flex justify-center">
//                             <button 
//                                 type="submit" 
//                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                             >
//                                 Pay Now
//                             </button>
//                         </div>

//                         {/* Refund Policy */}
//                         <div>
//                             <p 
//                                 className="text-gray-600 cursor-pointer underline" 
//                                 onClick={() => setShowRefundPolicy(!showRefundPolicy)}
//                             >
//                                 {showRefundPolicy ? 'Hide Refund Policy' : 'Show Refund Policy'}
//                             </p>
//                             {showRefundPolicy && (
//                                 <div className="mt-2 p-4 border border-gray-300 bg-gray-50 rounded-md">
//                                     <p>Your refund policy details here...</p>
//                                 </div>
//                             )}
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PaymentForm;


import axios from 'axios';
import React, { useState } from 'react';
import TopBgImage from "../assets/hero9.jpeg";
import FormBgImage from "../assets/vayam.png"; // Assuming this is your form background image

const PaymentForm = ({ userID }) => {
    const [form, setForm] = useState({
        name: '',
        fatherName: '',
        motherName: '',
        DOB: '',
        gender: '',
        Aadhar: '',
        contact: '',
        email: '',
        occupation: '',
        university: '',
        address: '',
        amount: 0,
    });

    const [showRefundPolicy, setShowRefundPolicy] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const paymentData = {
            ...form,
            userID,
            amount: parseFloat(form.amount),
        };

        axios.post('http://localhost:4000/api/payment/payment', paymentData)
            .then(response => {
                if (response.data && response.data.url) {
                    window.location.href = response.data.url;
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="flex flex-col items-center">
            {/* Top Background Section with Heading and Dark Overlay */}
            <div
                className="relative w-full h-64 bg-fixed bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${TopBgImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
                <h1 className="relative text-white text-6xl font-thin" style={{ fontFamily: 'Gowun Batang, serif' }}>
                    VAYAM <spam className="text-lg">(Vission Accord of Youths for Advancing Mankind)</spam>
                    <br/>
                    Program Registration
                </h1>
            </div>

            {/* Payment Form Section */}
            <div
                className="flex items-center justify-center min-h-screen w-full bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${FormBgImage})` }}
            >
                <div className="w-full mx-auto p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6 w-full">
                        {/* Row 1: Name and Father Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="nameInput" className="block text-gray-700 font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
                                    id="nameInput"
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="fatherNameInput" className="block text-gray-700 font-medium">Father's Name</label>
                                <input
                                    type="text"
                                    name="fatherName"
                                    className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
                                    id="fatherNameInput"
                                    placeholder="Enter father's name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 2: Mother's Name and DOB */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="motherNameInput" className="block text-gray-700 font-medium">Mother's Name</label>
                                <input
                                    type="text"
                                    name="motherName"
                                    className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
                                    id="motherNameInput"
                                    placeholder="Enter mother's name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="dobInput" className="block text-gray-700 font-medium">Date of Birth</label>
                                <input
                                    type="date"
                                    name="DOB"
                                    className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
                                    id="dobInput"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 3: Gender and Aadhar */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="genderInput" className="block text-gray-700 font-medium">Gender</label>
                                <select
                                    name="gender"
                                    className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
                                    id="genderInput"
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="aadharInput" className="block text-gray-700 font-medium">Aadhar</label>
                                <input
                                    type="text"
                                    name="Aadhar"
                                    className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
                                    id="aadharInput"
                                    placeholder="Enter Aadhar number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 4: Contact and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="contactInput" className="block text-gray-700 font-medium">Contact Number</label>
                                <input
                                    type="text"
                                    name="contact"
                                    className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
                                    id="contactInput"
                                    placeholder="Enter contact number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="emailInput" className="block text-gray-700 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
                                    id="emailInput"
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 5: Occupation and University/College */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="occupationInput" className="block text-gray-700 font-medium">Occupation</label>
                                <input
                                    type="text"
                                    name="occupation"
                                    className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
                                    id="occupationInput"
                                    placeholder="Enter occupation"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="universityInput" className="block text-gray-700 font-medium">University/College</label>
                                <input
                                    type="text"
                                    name="university"
                                    className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
                                    id="universityInput"
                                    placeholder="Enter university or college"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 6: Address */}
                        <div className="mb-6">
                            <label htmlFor="addressInput" className="block text-gray-700 font-medium">Address</label>
                            <textarea
                                name="address"
                                className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
                                id="addressInput"
                                placeholder="Enter address"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Row 7: Amount */}
                        <div className="mb-6">
                            <label htmlFor="amountInput" className="block text-gray-700 font-medium">Amount</label>
                            <input
                                type="number"
                                name="amount"
                                className="mt-1 w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
                                id="amountInput"
                                placeholder="Enter amount"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="w-full py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700"
                            >
                                Pay Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-4 text-sm mb-4 text-left text-gray-500">
                <button
                    type="button"
                    className="text-indigo-600 underline text-left"
                    onClick={() => setShowRefundPolicy(!showRefundPolicy)}
                >
                    {showRefundPolicy ? "Hide" : "Show"} Refund Policy
                </button>
                {showRefundPolicy && (
                    <div className="mt-2">
                        <p>Thank you for your interest in our services. Please note that all payments made are non-refundable. Once a transaction has been processed, we do not provide refunds or exchanges for any services rendered. <br /> We recommend that you carefully review your order before completing the payment process to ensure that it meets your requirements. If you have any questions or concerns about your order, please contact our support team before making your payment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentForm;

