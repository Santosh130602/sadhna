// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
// import backgroundImage from "../assets/hero9.jpeg"; // Ensure you have a background image
// import axios from "axios"; // Import axios for API calls

// const InternshipForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     fatherName: "",
//     gender: "",
//     phone: "",
//     email: "",
//     dob: "",
//     address: {
//       address: "",
//       state: "",
//       district: "",
//       pincode: "",
//     },
//     photo: null,
//     appliedFor: "",
//     education: {
//       highSchool: {
//         percentage: "",
//         year: "",
//         board: "",
//       },
//       intermediate: {
//         percentage: "",
//         year: "",
//         board: "",
//       },
//       graduation: {
//         percentage: "",
//         year: "",
//         board: "",
//       },
//       postGraduation: {
//         percentage: "",
//         year: "",
//         board: "",
//       },
//     },
//   });

//   const navigate = useNavigate(); // Initialize useNavigate for redirection

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

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     formDataToSend.append("name", formData.name);
//     formDataToSend.append("fatherName", formData.fatherName);
//     formDataToSend.append("gender", formData.gender);
//     formDataToSend.append("phone", formData.phone);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("dob", formData.dob);
//     formDataToSend.append("address", JSON.stringify(formData.address));
//     formDataToSend.append("photo", formData.photo);
//     formDataToSend.append("appliedFor", formData.appliedFor);
//     formDataToSend.append("highSchool", JSON.stringify(formData.education.highSchool));
//     formDataToSend.append("intermediate", JSON.stringify(formData.education.intermediate));
//     formDataToSend.append("graduation", JSON.stringify(formData.education.graduation));
//     formDataToSend.append("postGraduation", JSON.stringify(formData.education.postGraduation));

//     try {
//       // Send form data to your backend
//       const response = await axios.post('/api/internship-register', formDataToSend, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log(response.data); 

//       // Redirect to success page or next step
//       navigate("/internship-success"); // Change to your success route
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       // Handle error (e.g., show an error message)
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
//           Internship Application
//         </h1>
//       </div>

//       <form onSubmit={handleSubmit} className="w-11/12 mx-auto p-4 border rounded shadow-md" style={{ fontFamily: 'Gowun Batang, serif' }}>
//         <div className="mb-4">
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

//         <div className="mb-4">
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

//         <div className="mb-4">
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

//         <div className="mb-4">
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

//         <div className="mb-4">
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

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="address">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address.address"
//             value={formData.address.address}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//           <div className="flex mt-2">
//             <div className="w-1/3 pr-2">
//               <label className="block mb-1" htmlFor="address.state">
//                 State
//               </label>
//               <input
//                 type="text"
//                 id="address.state"
//                 name="address.state"
//                 value={formData.address.state}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//             <div className="w-1/3 px-2">
//               <label className="block mb-1" htmlFor="address.district">
//                 District
//               </label>
//               <input
//                 type="text"
//                 id="address.district"
//                 name="address.district"
//                 value={formData.address.district}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//             <div className="w-1/3 pl-2">
//               <label className="block mb-1" htmlFor="address.pincode">
//                 Pincode
//               </label>
//               <input
//                 type="text"
//                 id="address.pincode"
//                 name="address.pincode"
//                 value={formData.address.pincode}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="photo">
//             Upload Photo
//           </label>
//           <input
//             type="file"
//             id="photo"
//             name="photo"
//             onChange={handleFileChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="appliedFor">
//             Applied For
//           </label>
//           <input
//             type="text"
//             id="appliedFor"
//             name="appliedFor"
//             value={formData.appliedFor}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         {/* Educational Qualifications */}
//         <h2 className="text-xl font-bold mb-2">Educational Qualifications</h2>
//         <div className="mb-4">
//           <h3 className="font-semibold">High School</h3>
//           <input
//             type="text"
//             name="education.highSchool.percentage"
//             placeholder="Percentage"
//             value={formData.education.highSchool.percentage}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.highSchool.year"
//             placeholder="Year"
//             value={formData.education.highSchool.year}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.highSchool.board"
//             placeholder="Board"
//             value={formData.education.highSchool.board}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="mb-4">
//           <h3 className="font-semibold">Intermediate</h3>
//           <input
//             type="text"
//             name="education.intermediate.percentage"
//             placeholder="Percentage"
//             value={formData.education.intermediate.percentage}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.intermediate.year"
//             placeholder="Year"
//             value={formData.education.intermediate.year}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.intermediate.board"
//             placeholder="Board"
//             value={formData.education.intermediate.board}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="mb-4">
//           <h3 className="font-semibold">Graduation</h3>
//           <input
//             type="text"
//             name="education.graduation.percentage"
//             placeholder="Percentage"
//             value={formData.education.graduation.percentage}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.graduation.year"
//             placeholder="Year"
//             value={formData.education.graduation.year}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.graduation.board"
//             placeholder="Board"
//             value={formData.education.graduation.board}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="mb-4">
//           <h3 className="font-semibold">Post Graduation</h3>
//           <input
//             type="text"
//             name="education.postGraduation.percentage"
//             placeholder="Percentage"
//             value={formData.education.postGraduation.percentage}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.postGraduation.year"
//             placeholder="Year"
//             value={formData.education.postGraduation.year}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.postGraduation.board"
//             placeholder="Board"
//             value={formData.education.postGraduation.board}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
//         >
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// };

// export default InternshipForm;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
// import backgroundImage from "../assets/hero9.jpeg"; // Ensure you have a background image
// import axios from "axios"; // Import axios for API calls

// const InternshipForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     fatherName: "",
//     gender: "",
//     phone: "",
//     email: "",
//     dob: "",
//     address: {
//       address: "",
//       state: "",
//       district: "",
//       pincode: "",
//     },
//     photo: null,
//     appliedFor: "",
//     education: {
//       highSchool: {
//         percentage: "",
//         year: "",
//         board: "",
//       },
//       intermediate: {
//         percentage: "",
//         year: "",
//         board: "",
//       },
//       graduation: {
//         percentage: "",
//         year: "",
//         board: "",
//       },
//       postGraduation: {
//         percentage: "",
//         year: "",
//         board: "",
//       },
//     },
//   });

//   const navigate = useNavigate(); // Initialize useNavigate for redirection

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

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     formDataToSend.append("name", formData.name);
//     formDataToSend.append("fatherName", formData.fatherName);
//     formDataToSend.append("gender", formData.gender);
//     formDataToSend.append("phone", formData.phone);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("dob", formData.dob);
//     formDataToSend.append("address", JSON.stringify(formData.address));
//     formDataToSend.append("photo", formData.photo);
//     formDataToSend.append("appliedFor", formData.appliedFor);
//     formDataToSend.append("highSchool", JSON.stringify(formData.education.highSchool));
//     formDataToSend.append("intermediate", JSON.stringify(formData.education.intermediate));
//     formDataToSend.append("graduation", JSON.stringify(formData.education.graduation));
//     formDataToSend.append("postGraduation", JSON.stringify(formData.education.postGraduation));

//     try {
//       // Send form data to your backend
//       const response = await axios.post('/api/internship-register', formDataToSend, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log(response.data); 

//       // Redirect to success page or next step
//       navigate("/internship-success"); // Change to your success route
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       // Handle error (e.g., show an error message)
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
//           Internship Application
//         </h1>
//       </div>

//       <form onSubmit={handleSubmit} className="w-11/12 mx-auto p-4 border rounded shadow-md" style={{ fontFamily: 'Gowun Batang, serif' }}>
//         <div className="mb-4">
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

//         <div className="mb-4">
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

//         <div className="mb-4">
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

//         <div className="mb-4">
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

//         <div className="mb-4">
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

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="address">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address.address"
//             value={formData.address.address}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//           <div className="flex mt-2">
//             <div className="w-1/3 pr-2">
//               <label className="block mb-1" htmlFor="address.state">
//                 State
//               </label>
//               <input
//                 type="text"
//                 id="address.state"
//                 name="address.state"
//                 value={formData.address.state}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//             <div className="w-1/3 px-2">
//               <label className="block mb-1" htmlFor="address.district">
//                 District
//               </label>
//               <input
//                 type="text"
//                 id="address.district"
//                 name="address.district"
//                 value={formData.address.district}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//             <div className="w-1/3 pl-2">
//               <label className="block mb-1" htmlFor="address.pincode">
//                 Pincode
//               </label>
//               <input
//                 type="text"
//                 id="address.pincode"
//                 name="address.pincode"
//                 value={formData.address.pincode}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="photo">
//             Upload Photo
//           </label>
//           <input
//             type="file"
//             id="photo"
//             name="photo"
//             onChange={handleFileChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="appliedFor">
//             Applied For
//           </label>
//           <input
//             type="text"
//             id="appliedFor"
//             name="appliedFor"
//             value={formData.appliedFor}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         {/* Education Section */}
//         <div className="mb-4">
//           <h2 className="text-xl mb-2">Education Details</h2>

//           {/* High School */}
//           <h3 className="font-semibold">High School</h3>
//           <input
//             type="text"
//             name="education.highSchool.percentage"
//             placeholder="Percentage"
//             value={formData.education.highSchool.percentage}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.highSchool.year"
//             placeholder="Year of Passing"
//             value={formData.education.highSchool.year}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.highSchool.board"
//             placeholder="Board"
//             value={formData.education.highSchool.board}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-4"
//           />

//           {/* Intermediate */}
//           <h3 className="font-semibold">Intermediate</h3>
//           <input
//             type="text"
//             name="education.intermediate.percentage"
//             placeholder="Percentage"
//             value={formData.education.intermediate.percentage}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.intermediate.year"
//             placeholder="Year of Passing"
//             value={formData.education.intermediate.year}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.intermediate.board"
//             placeholder="Board"
//             value={formData.education.intermediate.board}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-4"
//           />

//           {/* Graduation */}
//           <h3 className="font-semibold">Graduation</h3>
//           <input
//             type="text"
//             name="education.graduation.percentage"
//             placeholder="Percentage"
//             value={formData.education.graduation.percentage}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.graduation.year"
//             placeholder="Year of Passing"
//             value={formData.education.graduation.year}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.graduation.board"
//             placeholder="Board/University"
//             value={formData.education.graduation.board}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-4"
//           />

//           {/* Post Graduation */}
//           <h3 className="font-semibold">Post Graduation</h3>
//           <input
//             type="text"
//             name="education.postGraduation.percentage"
//             placeholder="Percentage"
//             value={formData.education.postGraduation.percentage}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.postGraduation.year"
//             placeholder="Year of Passing"
//             value={formData.education.postGraduation.year}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.postGraduation.board"
//             placeholder="Board/University"
//             value={formData.education.postGraduation.board}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-4"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700 transition"
//         >
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// };

// export default InternshipForm;









// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
// import backgroundImage from "../assets/hero9.jpeg"; // Ensure you have a background image
// import axios from "axios"; // Import axios for API calls

// const InternshipForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     fatherName: "",
//     gender: "",
//     phone: "",
//     email: "",
//     dob: "",
//     address: {
//       address: "",
//       state: "",
//       district: "",
//       pincode: "",
//     },
//     photo: null,
//     appliedFor: "",
//     education: {
//       highSchool: {
//         percentage: "",
//         year: "",
//         board: "",
//       },
//       intermediate: {
//         percentage: "",
//         year: "",
//         board: "",
//       },
//       graduation: {
//         percentage: "",
//         year: "",
//         board: "",
//       },
//       postGraduation: {
//         percentage: "",
//         year: "",
//         board: "",
//       },
//     },
//   });

//   const navigate = useNavigate(); // Initialize useNavigate for redirection

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

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     formDataToSend.append("name", formData.name);
//     formDataToSend.append("fatherName", formData.fatherName);
//     formDataToSend.append("gender", formData.gender);
//     formDataToSend.append("phone", formData.phone);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("dob", formData.dob);
//     formDataToSend.append("address", JSON.stringify(formData.address));
//     formDataToSend.append("photo", formData.photo);
//     formDataToSend.append("appliedFor", formData.appliedFor);
//     formDataToSend.append("highSchool", JSON.stringify(formData.education.highSchool));
//     formDataToSend.append("intermediate", JSON.stringify(formData.education.intermediate));
//     formDataToSend.append("graduation", JSON.stringify(formData.education.graduation));
//     formDataToSend.append("postGraduation", JSON.stringify(formData.education.postGraduation));

//     try {
//       // Send form data to your backend
//       const response = await axios.post('/api/internship-register', formDataToSend, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log(response.data); 

//       // Redirect to success page or next step
//       navigate("/internship-success"); // Change to your success route
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       // Handle error (e.g., show an error message)
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
//           Internship Application
//         </h1>
//       </div>

//       <form onSubmit={handleSubmit} className="w-11/12 mx-auto p-4 border rounded shadow-md" style={{ fontFamily: 'Gowun Batang, serif' }}>
//         <div className="mb-4">
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

//         <div className="mb-4">
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

//         <div className="mb-4">
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

//         <div className="mb-4">
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

//         <div className="mb-4">
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

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="address">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address.address"
//             value={formData.address.address}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//           <div className="flex mt-2">
//             <div className="w-1/3 pr-2">
//               <label className="block mb-1" htmlFor="address.state">
//                 State
//               </label>
//               <input
//                 type="text"
//                 id="address.state"
//                 name="address.state"
//                 value={formData.address.state}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//             <div className="w-1/3 px-2">
//               <label className="block mb-1" htmlFor="address.district">
//                 District
//               </label>
//               <input
//                 type="text"
//                 id="address.district"
//                 name="address.district"
//                 value={formData.address.district}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//             <div className="w-1/3 pl-2">
//               <label className="block mb-1" htmlFor="address.pincode">
//                 Pincode
//               </label>
//               <input
//                 type="text"
//                 id="address.pincode"
//                 name="address.pincode"
//                 value={formData.address.pincode}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded p-2"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="photo">
//             Upload Photo
//           </label>
//           <input
//             type="file"
//             id="photo"
//             name="photo"
//             onChange={handleFileChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="appliedFor">
//             Applied For
//           </label>
//           <input
//             type="text"
//             id="appliedFor"
//             name="appliedFor"
//             value={formData.appliedFor}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <h2 className="text-xl mb-4">Education</h2>
        
//         {/* High School Education */}
//         <div className="mb-4">
//           <h3 className="font-semibold">High School</h3>
//           <input
//             type="text"
//             name="education.highSchool.percentage"
//             placeholder="Percentage"
//             value={formData.education.highSchool.percentage}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-2"
//             required
//           />
//           <input
//             type="text"
//             name="education.highSchool.year"
//             placeholder="Year of Passing"
//             value={formData.education.highSchool.year}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-2"
//             required
//           />
//           <input
//             type="text"
//             name="education.highSchool.board"
//             placeholder="Board"
//             value={formData.education.highSchool.board}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>

//         {/* Intermediate Education */}
//         <div className="mb-4">
//           <h3 className="font-semibold">Intermediate</h3>
//           <input
//             type="text"
//             name="education.intermediate.percentage"
//             placeholder="Percentage"
//             value={formData.education.intermediate.percentage}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-2"
//             required
//           />
//           <input
//             type="text"
//             name="education.intermediate.year"
//             placeholder="Year of Passing"
//             value={formData.education.intermediate.year}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-2"
//             required
//           />
//           <input
//             type="text"
//             name="education.intermediate.board"
//             placeholder="Board"
//             value={formData.education.intermediate.board}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>

//         {/* Graduation Education */}
//         <div className="mb-4">
//           <h3 className="font-semibold">Graduation</h3>
//           <input
//             type="text"
//             name="education.graduation.percentage"
//             placeholder="Percentage"
//             value={formData.education.graduation.percentage}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-2"
//             required
//           />
//           <input
//             type="text"
//             name="education.graduation.year"
//             placeholder="Year of Passing"
//             value={formData.education.graduation.year}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-2"
//             required
//           />
//           <input
//             type="text"
//             name="education.graduation.board"
//             placeholder="Board/University"
//             value={formData.education.graduation.board}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>

//         {/* Post Graduation Education */}
//         <div className="mb-4">
//           <h3 className="font-semibold">Post Graduation</h3>
//           <input
//             type="text"
//             name="education.postGraduation.percentage"
//             placeholder="Percentage"
//             value={formData.education.postGraduation.percentage}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.postGraduation.year"
//             placeholder="Year of Passing"
//             value={formData.education.postGraduation.year}
//             onChange={handleChange}
//             className="w-full border rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="education.postGraduation.board"
//             placeholder="Board/University"
//             value={formData.education.postGraduation.board}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="mb-4">
//           <button type="submit" className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-700 transition duration-200">
//             Submit Application
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default InternshipForm;






import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import backgroundImage from "../assets/hero9.jpeg"; // Ensure you have a background image
import axios from "axios"; // Import axios for API calls

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    gender: "",
    phone: "",
    email: "",
    dob: "",
    address: {
      address: "",
      state: "",
      district: "",
      pincode: "",
    },
    photo: null,
    appliedFor: "",
    education: {
      highSchool: {
        percentage: "",
        year: "",
        board: "",
      },
      intermediate: {
        percentage: "",
        year: "",
        board: "",
      },
      graduation: {
        percentage: "",
        year: "",
        board: "",
      },
      postGraduation: {
        percentage: "",
        year: "",
        board: "",
      },
    },
  });

  const navigate = useNavigate(); // Initialize useNavigate for redirection

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

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("fatherName", formData.fatherName);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("dob", formData.dob);
    formDataToSend.append("address", JSON.stringify(formData.address));
    formDataToSend.append("photo", formData.photo);
    formDataToSend.append("appliedFor", formData.appliedFor);
    formDataToSend.append("highSchool", JSON.stringify(formData.education.highSchool));
    formDataToSend.append("intermediate", JSON.stringify(formData.education.intermediate));
    formDataToSend.append("graduation", JSON.stringify(formData.education.graduation));
    formDataToSend.append("postGraduation", JSON.stringify(formData.education.postGraduation));

    try {
      // Send form data to your backend
      const response = await axios.post('http://localhost:4000/api/join/internship-register', formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);

      // Redirect to success page or next step
      navigate("/internship-success"); // Change to your success route
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show an error message)
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
          Internship Application
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="w-11/12 mx-auto p-4 border rounded shadow-md" style={{ fontFamily: 'Gowun Batang, serif' }}>
        <div className="mb-4">
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

        <div className="mb-4">
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

        <div className="mb-4">
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

        <div className="mb-4">
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

        <div className="mb-4">
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

        <div className="mb-4">
          <label className="block mb-1" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address.address"
            value={formData.address.address}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
          <div className="flex mt-2">
            <div className="w-1/3 pr-2">
              <label className="block mb-1" htmlFor="address.state">
                State
              </label>
              <input
                type="text"
                id="address.state"
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
            <div className="w-1/3 px-2">
              <label className="block mb-1" htmlFor="address.district">
                District
              </label>
              <input
                type="text"
                id="address.district"
                name="address.district"
                value={formData.address.district}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
            <div className="w-1/3 pl-2">
              <label className="block mb-1" htmlFor="address.pincode">
                Pincode
              </label>
              <input
                type="text"
                id="address.pincode"
                name="address.pincode"
                value={formData.address.pincode}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="photo">
            Upload Photo
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="appliedFor">
            Applied For
          </label>
          <input
            type="text"
            id="appliedFor"
            name="appliedFor"
            value={formData.appliedFor}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        {/* Education Fields */}
        <div className="mb-4">
          <h2 className="text-xl mb-2">High School</h2>
          <input
            type="text"
            name="education.highSchool.percentage"
            placeholder="Percentage"
            value={formData.education.highSchool.percentage}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            name="education.highSchool.year"
            placeholder="Year of Passing"
            value={formData.education.highSchool.year}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            name="education.highSchool.board"
            placeholder="Board"
            value={formData.education.highSchool.board}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <h2 className="text-xl mb-2">Intermediate</h2>
          <input
            type="text"
            name="education.intermediate.percentage"
            placeholder="Percentage"
            value={formData.education.intermediate.percentage}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            name="education.intermediate.year"
            placeholder="Year of Passing"
            value={formData.education.intermediate.year}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            name="education.intermediate.board"
            placeholder="Board"
            value={formData.education.intermediate.board}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <h2 className="text-xl mb-2">Graduation</h2>
          <input
            type="text"
            name="education.graduation.percentage"
            placeholder="Percentage"
            value={formData.education.graduation.percentage}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            name="education.graduation.year"
            placeholder="Year of Passing"
            value={formData.education.graduation.year}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            name="education.graduation.board"
            placeholder="Board"
            value={formData.education.graduation.board}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <h2 className="text-xl mb-2">Post Graduation</h2>
          <input
            type="text"
            name="education.postGraduation.percentage"
            placeholder="Percentage"
            value={formData.education.postGraduation.percentage}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            name="education.postGraduation.year"
            placeholder="Year of Passing"
            value={formData.education.postGraduation.year}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            name="education.postGraduation.board"
            placeholder="Board"
            value={formData.education.postGraduation.board}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default InternshipForm;
