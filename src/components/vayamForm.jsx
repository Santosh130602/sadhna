
// import React, { useState } from "react";
// import backgroundImage from "../assets/hero9.jpeg";

// const VayamForm = () => {
//   const [isStudent, setIsStudent] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     fatherName: "",
//     gender: "",
//     aadhar: "",
//     email: "",
//     phone: "",
//     dob: "",
//     education: "",
//     permanentAddress: {
//       address: "",
//       state: "",
//       district: "",
//       pincode: "",
//     },
//     universityName: "",
//     universityAddress: {
//       address: "",
//       state: "",
//       district: "",
//       pincode: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes(".")) {
//       const keys = name.split(".");
//       setFormData((prev) => ({
//         ...prev,
//         [keys[0]]: {
//           ...prev[keys[0]],
//           [keys[1]]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const calculateAmount = () => {
//     return isStudent ? (new Date().getFullYear() - new Date(formData.dob).getFullYear() > 30 ? 5100 : 2100) : 5100;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const amount = calculateAmount();
//     console.log(amount)
//     console.log("Form Data:", { ...formData, amount });
//     // Handle form submission (e.g., send to backend)
//   };

//   return (
//     <div className="relative">

// <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative" style={{
//           backgroundImage: `url(${backgroundImage})`,
//         }}
//       >

//         <div className="absolute inset-0 bg-black opacity-80"></div>
//         <h1 className="text-white text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
//           Vayam Registration
//         </h1>
//       </div> 

//     <form onSubmit={handleSubmit} className="w-11/12 mx-auto p-4 border rounded shadow-md">
//       <div className="mb-4">
//         <label className="mr-2">
//           <input
//             type="radio"
//             name="role"
//             value="student"
//             checked={isStudent}
//             onChange={() => setIsStudent(true)}
//           />
//           Student
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="role"
//             value="other"
//             checked={!isStudent}
//             onChange={() => setIsStudent(false)}
//           />
//           Other
//         </label>
//       </div>

//       <div className="flex mb-4">
//         <div className="w-1/2 pr-2">
//           <label className="block mb-1" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="w-1/2 pl-2">
//           <label className="block mb-1" htmlFor="fatherName">
//             Father's Name
//           </label>
//           <input
//             type="text"
//             id="fatherName"
//             name="fatherName"
//             value={formData.fatherName}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//       </div>

//       <div className="flex mb-4">
//         <div className="w-1/2 pr-2">
//           <label className="block mb-1" htmlFor="gender">
//             Gender
//           </label>
//           <select
//             id="gender"
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <div className="w-1/2 pl-2">
//           <label className="block mb-1" htmlFor="dob">
//             Date of Birth
//           </label>
//           <input
//             type="date"
//             id="dob"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//       </div>

//       <div className="flex mb-4">
//         <div className="w-1/2 pr-2">
//           <label className="block mb-1" htmlFor="aadhar">
//             Aadhar Number
//           </label>
//           <input
//             type="text"
//             id="aadhar"
//             name="aadhar"
//             value={formData.aadhar}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="w-1/2 pl-2">
//           <label className="block mb-1" htmlFor="phone">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//       </div>

//       {isStudent && (
//         <>
//           <div className="mb-4">
//             <label className="block mb-1" htmlFor="education">
//               Education
//             </label>
//             <select
//               id="education"
//               name="education"
//               value={formData.education}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             >
//               <option value="">Select Education Level</option>
//               <option value="UG">Undergraduate</option>
//               <option value="PG">Postgraduate</option>
//               <option value="PhD">PhD</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <h3 className="font-bold mb-2">Permanent Address</h3>
//             <label className="block mb-1" htmlFor="permanentAddress.address">
//               Address
//             </label>
//             <input
//               type="text"
//               id="permanentAddress.address"
//               name="permanentAddress.address"
//               value={formData.permanentAddress.address}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//             <div className="flex mt-2">
//               <div className="w-1/3 pr-2">
//                 <label className="block mb-1" htmlFor="permanentAddress.state">
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   id="permanentAddress.state"
//                   name="permanentAddress.state"
//                   value={formData.permanentAddress.state}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded p-2"
//                 />
//               </div>
//               <div className="w-1/3 px-2">
//                 <label className="block mb-1" htmlFor="permanentAddress.district">
//                   District
//                 </label>
//                 <input
//                   type="text"
//                   id="permanentAddress.district"
//                   name="permanentAddress.district"
//                   value={formData.permanentAddress.district}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded p-2"
//                 />
//               </div>
//               <div className="w-1/3 pl-2">
//                 <label className="block mb-1" htmlFor="permanentAddress.pincode">
//                   Pincode
//                 </label>
//                 <input
//                   type="text"
//                   id="permanentAddress.pincode"
//                   name="permanentAddress.pincode"
//                   value={formData.permanentAddress.pincode}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded p-2"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1" htmlFor="universityName">
//               University Name
//             </label>
//             <input
//               type="text"
//               id="universityName"
//               name="universityName"
//               value={formData.universityName}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//           </div>

//           <div className="mb-4">
//             <h3 className="font-bold mb-2">University Address</h3>
//             <label className="block mb-1" htmlFor="universityAddress.address">
//               Address
//             </label>
//             <input
//               type="text"
//               id="universityAddress.address"
//               name="universityAddress.address"
//               value={formData.universityAddress.address}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//             <div className="flex mt-2">
//               <div className="w-1/3 pr-2">
//                 <label className="block mb-1" htmlFor="universityAddress.state">
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   id="universityAddress.state"
//                   name="universityAddress.state"
//                   value={formData.universityAddress.state}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded p-2"
//                 />
//               </div>
//               <div className="w-1/3 px-2">
//                 <label className="block mb-1" htmlFor="universityAddress.district">
//                   District
//                 </label>
//                 <input
//                   type="text"
//                   id="universityAddress.district"
//                   name="universityAddress.district"
//                   value={formData.universityAddress.district}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded p-2"
//                 />
//               </div>
//               <div className="w-1/3 pl-2">
//                 <label className="block mb-1" htmlFor="universityAddress.pincode">
//                   Pincode
//                 </label>
//                 <input
//                   type="text"
//                   id="universityAddress.pincode"
//                   name="universityAddress.pincode"
//                   value={formData.universityAddress.pincode}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded p-2"
//                 />
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//         Submit
//       </button>
//     </form>
//     </div>
//   );
// };

// export default VayamForm;










// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; 
// import backgroundImage from "../assets/hero9.jpeg";
// import axios from "axios"; 
// const VayamForm = () => {
//   const [isStudent, setIsStudent] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     fatherName: "",
//     gender: "",
//     aadhar: "",
//     email: "",
//     phone: "",
//     dob: "",
//     education: "",
//     permanentAddress: {
//       address: "",
//       state: "",
//       district: "",
//       pincode: "",
//     },
//     universityName: "",
//     universityAddress: {
//       address: "",
//       state: "",
//       district: "",
//       pincode: "",
//     },
//   });

//   const navigat = useNavigate(); 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes(".")) {
//       const keys = name.split(".");
//       setFormData((prev) => ({
//         ...prev,
//         [keys[0]]: {
//           ...prev[keys[0]],
//           [keys[1]]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const calculateAmount = () => {
//     return isStudent ? (new Date().getFullYear() - new Date(formData.dob).getFullYear() > 30 ? 5100 : 2100) : 5100;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const amount = calculateAmount();
    
//     try {
//       const response = await axios.post('/api/vayam-register', { ...formData, amount });
//       console.log(response.data); 

//       navigat("/vayam-payment", { state: { amount } });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div className="relative">
//       <div
//         className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-80"></div>
//         <h1 className="text-white text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
//           Vayam Registration
//         </h1>
//       </div>

//       <form onSubmit={handleSubmit} className="w-11/12  mx-auto p-4 border rounded shadow-md" style={{ fontFamily: 'Gowun Batang, serif' }}>
//         <div className="mb-4">
//           <label className="mr-2">
//             <input
//               type="radio"
//               name="role"
//               value="student"
//               checked={isStudent}
//               onChange={() => setIsStudent(true)}
//             />
//             Student
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="role"
//               value="other"
//               checked={!isStudent}
//               onChange={() => setIsStudent(false)}
//             />
//             Other
//           </label>
//         </div>

//         <div className="flex mb-4">
//           <div className="w-1/2 pr-2">
//             <label className="block mb-1" htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//           </div>
//           <div className="w-1/2 pl-2">
//             <label className="block mb-1" htmlFor="fatherName">
//               Father's Name
//             </label>
//             <input
//               type="text"
//               id="fatherName"
//               name="fatherName"
//               value={formData.fatherName}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//           </div>
//         </div>

//         <div className="flex mb-4">
//           <div className="w-1/2 pr-2">
//             <label className="block mb-1" htmlFor="gender">
//               Gender
//             </label>
//             <select
//               id="gender"
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div className="w-1/2 pl-2">
//             <label className="block mb-1" htmlFor="dob">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               id="dob"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//           </div>
//         </div>

//         <div className="flex mb-4">
//           <div className="w-1/2 pr-2">
//             <label className="block mb-1" htmlFor="aadhar">
//               Aadhar Number
//             </label>
//             <input
//               type="text"
//               id="aadhar"
//               name="aadhar"
//               value={formData.aadhar}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//           </div>
//           <div className="w-1/2 pl-2">
//             <label className="block mb-1" htmlFor="phone">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//           </div>
//         </div>

//         {isStudent && (
//           <>
//             <div className="mb-4">
//               <label className="block mb-1" htmlFor="education">
//                 Education
//               </label>
//               <select
//                 id="education"
//                 name="education"
//                 value={formData.education}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               >
//                 <option value="">Select Education Level</option>
//                 <option value="UG">Undergraduate</option>
//                 <option value="PG">Postgraduate</option>
//                 <option value="PhD">PhD</option>
//               </select>
//             </div>

//             <div className="mb-4">
//               <h3 className="font-bold mb-2">Permanent Address</h3>
//               <label className="block mb-1" htmlFor="permanentAddress.address">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 id="permanentAddress.address"
//                 name="permanentAddress.address"
//                 value={formData.permanentAddress.address}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//               <div className="flex mt-2">
//                 <div className="w-1/3 pr-2">
//                   <label className="block mb-1" htmlFor="permanentAddress.state">
//                     State
//                   </label>
//                   <input
//                     type="text"
//                     id="permanentAddress.state"
//                     name="permanentAddress.state"
//                     value={formData.permanentAddress.state}
//                     onChange={handleChange}
//                     required
//                     className="w-full border rounded p-2"
//                   />
//                 </div>
//                 <div className="w-1/3 px-2">
//                   <label className="block mb-1" htmlFor="permanentAddress.district">
//                     District
//                   </label>
//                   <input
//                     type="text"
//                     id="permanentAddress.district"
//                     name="permanentAddress.district"
//                     value={formData.permanentAddress.district}
//                     onChange={handleChange}
//                     required
//                     className="w-full border rounded p-2"
//                   />
//                 </div>
//                 <div className="w-1/3 pl-2">
//                   <label className="block mb-1" htmlFor="permanentAddress.pincode">
//                     Pincode
//                   </label>
//                   <input
//                     type="text"
//                     id="permanentAddress.pincode"
//                     name="permanentAddress.pincode"
//                     value={formData.permanentAddress.pincode}
//                     onChange={handleChange}
//                     required
//                     className="w-full border rounded p-2"
//                   />
//                 </div>
//               </div>
//             </div>
//           </>
//         )}

//         <div className="mb-4">
//           <h3 className="font-bold mb-2">University Address (If Applicable)</h3>
//           <label className="block mb-1" htmlFor="universityName">
//             University Name
//           </label>
//           <input
//             type="text"
//             id="universityName"
//             name="universityName"
//             value={formData.universityName}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//           <label className="block mb-1" htmlFor="universityAddress.address">
//             Address
//           </label>
//           <input
//             type="text"
//             id="universityAddress.address"
//             name="universityAddress.address"
//             value={formData.universityAddress.address}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//           <div className="flex mt-2">
//             <div className="w-1/3 pr-2">
//               <label className="block mb-1" htmlFor="universityAddress.state">
//                 State
//               </label>
//               <input
//                 type="text"
//                 id="universityAddress.state"
//                 name="universityAddress.state"
//                 value={formData.universityAddress.state}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//             <div className="w-1/3 px-2">
//               <label className="block mb-1" htmlFor="universityAddress.district">
//                 District
//               </label>
//               <input
//                 type="text"
//                 id="universityAddress.district"
//                 name="universityAddress.district"
//                 value={formData.universityAddress.district}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//             <div className="w-1/3 pl-2">
//               <label className="block mb-1" htmlFor="universityAddress.pincode">
//                 Pincode
//               </label>
//               <input
//                 type="text"
//                 id="universityAddress.pincode"
//                 name="universityAddress.pincode"
//                 value={formData.universityAddress.pincode}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//           </div>
//         </div>

//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default VayamForm;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; 
// import backgroundImage from "../assets/hero9.jpeg";
// import axios from "axios"; 

// const VayamForm = () => {
//   const [isStudent, setIsStudent] = useState(true);
//   const [formData, setFormData] = useState({
//     isStudent: true,
//     name: "",
//     fatherName: "",
//     gender: "",
//     aadhar: "",
//     email: "",
//     phone: "",
//     dob: "",
//     permanentAddress: {
//       address: "",
//       state: "",
//       district: "",
//       pincode: "",
//     },
//     education: "",
//     universityName: "",
//     universityAddress: {
//       address: "",
//       state: "",
//       district: "",
//       pincode: "",
//     },
//   });

//   const navigate = useNavigate(); 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes(".")) {
//       const keys = name.split(".");
//       setFormData((prev) => ({
//         ...prev,
//         [keys[0]]: {
//           ...prev[keys[0]],
//           [keys[1]]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const calculateAmount = () => {
//     return isStudent ? (new Date().getFullYear() - new Date(formData.dob).getFullYear() > 30 ? 5100 : 2100) : 5100;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const amount = calculateAmount();


//     const dataToSend = { ...formData, isStudent, amount };
    
//     try {
//       const response = await axios.post('http://localhost:4000/api/join/vayam-register', { ...formData, amount });
//       console.log(response.data); 

//       // navigate("/vayam-payment", { state: { amount } });

//       navigate("/vayam-payment", { 
//         state: { 
//           name: formData.name, 
//           fatherName: formData.fatherName, 
//           dob: formData.dob, 
//           phone: formData.phone, 
//           email: formData.email, 
//           aadhar: formData.aadhar, 
//           amount 
//         } 
//       });

//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div className="relative">
//       <div
//         className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-80"></div>
//         <h1 className="text-white text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
//           Vayam Registration
//         </h1>
//       </div>

//       <form onSubmit={handleSubmit} className="w-11/12  mx-auto p-4 border rounded shadow-md" style={{ fontFamily: 'Gowun Batang, serif' }}>
//         <div className="mb-4 p-4 flex">
//           <label className="mr-6 flex gap-2 ">
//             <input
//               type="radio"
//               name="role"
//               value="student"
//               checked={isStudent}
//               onChange={() => setIsStudent(true)}
//               className="ml-2"
//             />
//             Student
//           </label>
//           <label className="flex gap-2">
//             <input
//               type="radio"
//               name="role"
//               value="other"
//               checked={!isStudent}
//               onChange={() => setIsStudent(false)}
//             />
//             Other
//           </label>
//         </div>

//         {/* Common Input Fields */}
//         <div className="flex mb-4">
//           <div className="w-1/2 pr-2">
//             <label className="block mb-1" htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//           </div>
//           <div className="w-1/2 pl-2">
//             <label className="block mb-1" htmlFor="fatherName">
//               Father's Name
//             </label>
//             <input
//               type="text"
//               id="fatherName"
//               name="fatherName"
//               value={formData.fatherName}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//           </div>
//         </div>

//         <div className="flex mb-4">
//           <div className="w-1/2 pr-2">
//             <label className="block mb-1" htmlFor="gender">
//               Gender
//             </label>
//             <select
//               id="gender"
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div className="w-1/2 pl-2">
//             <label className="block mb-1" htmlFor="dob">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               id="dob"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//           </div>
//         </div>

//         <div className="flex mb-4">
//           <div className="w-1/2 pr-2">
//             <label className="block mb-1" htmlFor="aadhar">
//               Aadhar Number
//             </label>
//             <input
//               type="text"
//               id="aadhar"
//               name="aadhar"
//               value={formData.aadhar}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//           </div>
//           <div className="w-1/2 pl-2">
//             <label className="block mb-1" htmlFor="phone">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         {/* Student-Specific Fields */}
//         {isStudent && (
//           <>
//             <div className="mb-4">
//               <label className="block mb-1" htmlFor="education">
//                 Education
//               </label>
//               <select
//                 id="education"
//                 name="education"
//                 value={formData.education}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               >
//                 <option value="">Select Education Level</option>
//                 <option value="UG">Undergraduate</option>
//                 <option value="PG">Postgraduate</option>
//                 <option value="PhD">PhD</option>
//               </select>
//             </div>

//             <div className="mb-4">
//               <h3 className="font-bold mb-2">University Address</h3>
//               <label className="block mb-1" htmlFor="universityName">
//                 University Name
//               </label>
//               <input
//                 type="text"
//                 id="universityName"
//                 name="universityName"
//                 value={formData.universityName}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />

//               <div className="flex mt-2">
//                 <div className="w-1/3 pr-2">
//                   <label className="block mb-1" htmlFor="universityAddress.state">
//                     State
//                   </label>
//                   <input
//                     type="text"
//                     id="universityAddress.state"
//                     name="universityAddress.state"
//                     value={formData.universityAddress.state}
//                     onChange={handleChange}
//                     required
//                     className="w-full border rounded p-2"
//                   />
//                 </div>
//                 <div className="w-1/3 px-2">
//                   <label className="block mb-1" htmlFor="universityAddress.district">
//                     District
//                   </label>
//                   <input
//                     type="text"
//                     id="universityAddress.district"
//                     name="universityAddress.district"
//                     value={formData.universityAddress.district}
//                     onChange={handleChange}
//                     required
//                     className="w-full border rounded p-2"
//                   />
//                 </div>
//                 <div className="w-1/3 pl-2">
//                   <label className="block mb-1" htmlFor="universityAddress.pincode">
//                     Pincode
//                   </label>
//                   <input
//                     type="text"
//                     id="universityAddress.pincode"
//                     name="universityAddress.pincode"
//                     value={formData.universityAddress.pincode}
//                     onChange={handleChange}
//                     required
//                     className="w-full border rounded p-2"
//                   />
//                 </div>
//               </div>
//             </div>
//           </>
//         )}

//         {/* Non-Student Fields */}
//         {!isStudent && (
//           <>
//             {/* Any additional fields for non-student users can go here */}
//           </>
//         )}

//         {/* Permanent Address */}
//         <div className="mb-4">
//           <h3 className="font-bold mb-2">Permanent Address</h3>
//           <div className="flex">
//             <div className="w-1/3 pr-2">
//               <label className="block mb-1" htmlFor="permanentAddress.address">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 id="permanentAddress.address"
//                 name="permanentAddress.address"
//                 value={formData.permanentAddress.address}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//             <div className="w-1/3 px-2">
//               <label className="block mb-1" htmlFor="permanentAddress.state">
//                 State
//               </label>
//               <input
//                 type="text"
//                 id="permanentAddress.state"
//                 name="permanentAddress.state"
//                 value={formData.permanentAddress.state}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//             <div className="w-1/3 pl-2">
//               <label className="block mb-1" htmlFor="permanentAddress.district">
//                 District
//               </label>
//               <input
//                 type="text"
//                 id="permanentAddress.district"
//                 name="permanentAddress.district"
//                 value={formData.permanentAddress.district}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//           </div>
//           <div className="mt-2">
//             <label className="block mb-1" htmlFor="permanentAddress.pincode">
//               Pincode
//             </label>
//             <input
//               type="text"
//               id="permanentAddress.pincode"
//               name="permanentAddress.pincode"
//               value={formData.permanentAddress.pincode}
//               onChange={handleChange}
//               required
//               className="w-full border rounded p-2"
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center">
//           <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default VayamForm;









import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import backgroundImage from "../assets/hero9.jpeg";
import axios from "axios"; 

const VayamForm = () => {
  const [isStudent, setIsStudent] = useState(true);
  const [formData, setFormData] = useState({
    isStudent: true,
    name: "",
    fatherName: "",
    gender: "",
    aadhar: "",
    email: "",
    phone: "",
    dob: "",
    permanentAddress: {
      address: "",
      state: "",
      district: "",
      pincode: "",
    },
    education: "",
    universityName: "",
    universityAddress: {
      address: "",
      state: "",
      district: "",
      pincode: "",
    },
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const keys = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [keys[0]]: {
          ...prev[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const calculateAmount = () => {
    return isStudent ? (new Date().getFullYear() - new Date(formData.dob).getFullYear() > 30 ? 5100 : 2100) : 5100;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = calculateAmount();


    const dataToSend = { ...formData, isStudent, amount };
    
    try {
      const response = await axios.post('http://localhost:4000/api/join/vayam-register', dataToSend);
      console.log(response.data); 

      // navigate("/vayam-payment", { state: { amount } });

      navigate("/vayam-payment", { 
        state: { 
          
          name: formData.name, 
          fatherName: formData.fatherName, 
          dob: formData.dob, 
          phone: formData.phone, 
          email: formData.email, 
          aadhar: formData.aadhar, 
          amount 
        } 
      });

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="relative">
      <div
        className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <h1 className="text-white text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
          Vayam Registration
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="w-11/12  mx-auto p-4 border rounded shadow-md" style={{ fontFamily: 'Gowun Batang, serif' }}>
        <div className="mb-4 p-4 flex">
          <label className="mr-6 flex gap-2 ">
            <input
              type="radio"
              name="role"
              value="student"
              checked={isStudent}
              onChange={() => setIsStudent(true)}
              className="ml-2"
            />
            Student
          </label>
          <label className="flex gap-2">
            <input
              type="radio"
              name="role"
              value="other"
              checked={!isStudent}
              onChange={() => setIsStudent(false)}
            />
            Other
          </label>
        </div>

        {/* Common Input Fields */}
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block mb-1" htmlFor="fatherName">
              Father's Name
            </label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block mb-1" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="w-1/2 pl-2">
            <label className="block mb-1" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block mb-1" htmlFor="aadhar">
              Aadhar Number
            </label>
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        {/* Student-Specific Fields */}
        {isStudent && (
          <>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="education">
                Education
              </label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              >
                <option value="">Select Education Level</option>
                <option value="UG">Undergraduate</option>
                <option value="PG">Postgraduate</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            <div className="mb-4">
              <h3 className="font-bold mb-2">University Address</h3>
              <label className="block mb-1" htmlFor="universityName">
                University Name
              </label>
              <input
                type="text"
                id="universityName"
                name="universityName"
                value={formData.universityName}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />

              <div className="flex mt-2">
                <div className="w-1/3 pr-2">
                  <label className="block mb-1" htmlFor="universityAddress.state">
                    State
                  </label>
                  <input
                    type="text"
                    id="universityAddress.state"
                    name="universityAddress.state"
                    value={formData.universityAddress.state}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="w-1/3 px-2">
                  <label className="block mb-1" htmlFor="universityAddress.district">
                    District
                  </label>
                  <input
                    type="text"
                    id="universityAddress.district"
                    name="universityAddress.district"
                    value={formData.universityAddress.district}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="w-1/3 pl-2">
                  <label className="block mb-1" htmlFor="universityAddress.pincode">
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="universityAddress.pincode"
                    name="universityAddress.pincode"
                    value={formData.universityAddress.pincode}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Non-Student Fields */}
        {!isStudent && (
          <>
            {/* Any additional fields for non-student users can go here */}
          </>
        )}

        {/* Permanent Address */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">Permanent Address (as per Aadhar)</h3>
          <div className="flex">
            <div className="w-1/3 pr-2">
              <label className="block mb-1" htmlFor="permanentAddress.address">
                Address
              </label>
              <input
                type="text"
                id="permanentAddress.address"
                name="permanentAddress.address"
                value={formData.permanentAddress.address}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
            <div className="w-1/3 px-2">
              <label className="block mb-1" htmlFor="permanentAddress.state">
                State
              </label>
              <input
                type="text"
                id="permanentAddress.state"
                name="permanentAddress.state"
                value={formData.permanentAddress.state}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
            <div className="w-1/3 pl-2">
              <label className="block mb-1" htmlFor="permanentAddress.district">
                District
              </label>
              <input
                type="text"
                id="permanentAddress.district"
                name="permanentAddress.district"
                value={formData.permanentAddress.district}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
          </div>
          <div className="mt-2">
            <label className="block mb-1" htmlFor="permanentAddress.pincode">
              Pincode
            </label>
            <input
              type="text"
              id="permanentAddress.pincode"
              name="permanentAddress.pincode"
              value={formData.permanentAddress.pincode}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default VayamForm;




