


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import backgroundImage from "../assets/hero9.jpeg";
// import axios from "axios";

// const InternshipForm = () => {
//   const [loading, setLoading] = useState(false);
//   const [pic, setPic] = useState("");
//   const [amount, setAmount] = useState()
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
//     photo: pic,
//     appliedFor: "",
//     education: {
//       highSchool: { percentage: "", year: "", board: "" },
//       intermediate: { percentage: "", year: "", board: "" },
//       graduation: { percentage: "", year: "", board: "" },
//       postGraduation: { percentage: "", year: "", board: "" },
//     },
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes(".")) {
//       const keys = name.split(".");
//       if (keys.length === 3) {
//         setFormData((prev) => ({
//           ...prev,
//           [keys[0]]: {
//             ...prev[keys[0]],
//             [keys[1]]: {
//               ...prev[keys[0]][keys[1]],
//               [keys[2]]: value,
//             },
//           },
//         }));
//       } else {
//         setFormData((prev) => ({
//           ...prev,
//           [keys[0]]: {
//             ...prev[keys[0]],
//             [keys[1]]: value,
//           },
//         }));
//       }
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       uploadImageToCloudinary(file);
//     }
//   };

//   const uploadImageToCloudinary = (file) => {
//     setLoading(true);
//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "liaison");
//     data.append("cloud_name", "dh5s1wktp");

//     fetch("https://api.cloudinary.com/v1_1/dh5s1wktp/image/upload", {
//       method: "post",
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setPic(data.url);
//         setFormData((prevFormData) => ({
//           ...prevFormData,
//           photo: data.url,
//         }));
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Image upload failed:", err);
//         setLoading(false);
//       });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading to true on form submission

//     const dataToSend = {
//       ...formData,
//       photo: pic,
//     };

//     try {
//       const response = await axios.post(
//         'http://localhost:4000/api/join/internship-register',
//         dataToSend,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response.data);
//       navigate("/internship-payment",{
//         state:{
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
//       // Handle error (e.g., show an error message)
//       alert("Failed to submit the application. Please try again.");
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };

//   console.log(formData);

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
//         {/* Form Fields */}
        
//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="name">Name</label>
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
//           <label className="block mb-1" htmlFor="fatherName">Father's Name</label>
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
//           <label className="block mb-1" htmlFor="gender">Gender</label>
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
//           <label className="block mb-1" htmlFor="phone">Phone</label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="email">Email</label>
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
//           <label className="block mb-1" htmlFor="dob">Date of Birth</label>
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
//           <label className="block mb-1" htmlFor="address.address">Address</label>
//           <input
//             type="text"
//             id="address"
//             name="address.address"
//             value={formData.address.address}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="address.state">State</label>
//           <input
//             type="text"
//             id="state"
//             name="address.state"
//             value={formData.address.state}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="address.district">District</label>
//           <input
//             type="text"
//             id="district"
//             name="address.district"
//             value={formData.address.district}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="address.pincode">Pincode</label>
//           <input
//             type="text"
//             id="pincode"
//             name="address.pincode"
//             value={formData.address.pincode}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="appliedFor">Position Applied For</label>
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

//         <div className="mb-4">
//           <h3 className="font-medium">High School</h3>
//           <label className="block mb-1">Percentage</label>
//           <input
//             type="text"
//             name="education.highSchool.percentage"
//             value={formData.education.highSchool.percentage}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />

//           <label className="block mb-1">Year</label>
//           <input
//             type="text"
//             name="education.highSchool.year"
//             value={formData.education.highSchool.year}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />

//           <label className="block mb-1">Board</label>
//           <input
//             type="text"
//             name="education.highSchool.board"
//             value={formData.education.highSchool.board}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         {/* Intermediate Fields */}
//         <div className="mb-4">
//           <h3 className="font-medium">Intermediate</h3>
//           <label className="block mb-1">Percentage</label>
//           <input
//             type="text"
//             name="education.intermediate.percentage"
//             value={formData.education.intermediate.percentage}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />

//           <label className="block mb-1">Year</label>
//           <input
//             type="text"
//             name="education.intermediate.year"
//             value={formData.education.intermediate.year}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />

//           <label className="block mb-1">Board</label>
//           <input
//             type="text"
//             name="education.intermediate.board"
//             value={formData.education.intermediate.board}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         {/* Graduation Fields */}
//         <div className="mb-4">
//           <h3 className="font-medium">Graduation</h3>
//           <label className="block mb-1">Percentage</label>
//           <input
//             type="text"
//             name="education.graduation.percentage"
//             value={formData.education.graduation.percentage}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />

//           <label className="block mb-1">Year</label>
//           <input
//             type="text"
//             name="education.graduation.year"
//             value={formData.education.graduation.year}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />

//           <label className="block mb-1">Board</label>
//           <input
//             type="text"
//             name="education.graduation.board"
//             value={formData.education.graduation.board}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         {/* Post Graduation Fields */}
//         <div className="mb-4">
//           <h3 className="font-medium">Post Graduation</h3>
//           <label className="block mb-1">Percentage</label>
//           <input
//             type="text"
//             name="education.postGraduation.percentage"
//             value={formData.education.postGraduation.percentage}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />

//           <label className="block mb-1">Year</label>
//           <input
//             type="text"
//             name="education.postGraduation.year"
//             value={formData.education.postGraduation.year}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2 mb-2"
//           />

//           <label className="block mb-1">Board</label>
//           <input
//             type="text"
//             name="education.postGraduation.board"
//             value={formData.education.postGraduation.board}
//             onChange={handleChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>

//         {/* Photo Upload */}
//         <div className="mb-4">
//           <label className="block mb-1">Upload Photo</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded w-full"
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default InternshipForm;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/hero9.jpeg";
import axios from "axios";

const InternshipForm = () => {

  const userId = localStorage.getItem('userId');
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState("");
  const [amount, setAmount] = useState(0);
  const [formData, setFormData] = useState({
    userId : userId,
    name: "",
    fatherName: "",
    gender: "",
    phone: "",
    aadhar: "",
    email: "",
    dob: "",
    address: {
      address: "",
      state: "",
      district: "",
      pincode: "",
    },
    photo: pic,
    appliedFor: "",
    education: {
      highSchool: { percentage: "", year: "", board: "" },
      intermediate: { percentage: "", year: "", board: "" },
      graduation: { percentage: "", year: "", board: "" },
      postGraduation: { percentage: "", year: "", board: "" },
    },
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "appliedFor") {
      setFormData((prev) => ({ ...prev, appliedFor: value }));

      // Set amount based on selected position
      const positionAmounts = {
        "vayam valintor": 1000,
        "monatring valinter": 1500,
        "yog valintor": 1000,
        "yog industry": 1500,
        "ayurved industry": 1500,
      };
      setAmount(positionAmounts[value] || 0);
    } else if (name.includes(".")) {
      const keys = name.split(".");
      if (keys.length === 3) {
        setFormData((prev) => ({
          ...prev,
          [keys[0]]: {
            ...prev[keys[0]],
            [keys[1]]: {
              ...prev[keys[0]][keys[1]],
              [keys[2]]: value,
            },
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [keys[0]]: {
            ...prev[keys[0]],
            [keys[1]]: value,
          },
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImageToCloudinary(file);
    }
  };

  const uploadImageToCloudinary = (file) => {
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "sk4nyas");
    data.append("cloud_name", "dmdhvvrcj");

    fetch("https://api.cloudinary.com/v1_1/dmdhvvrcj/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPic(data.url);
        setFormData((prevFormData) => ({
          ...prevFormData,
          photo: data.url,
        }));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Image upload failed:", err);
        setLoading(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on form submission

    const dataToSend = {
      ...formData,
      photo: pic,
    };

    try {
      const response = await axios.post(
        'http://localhost:4000/api/join/internship-register',
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      navigate("/internship-payment", {
        state: {
          name: formData.name,
          fatherName: formData.fatherName,
          dob: formData.dob,
          phone: formData.phone,
          aadhar: formData.aadhar,
          email: formData.email,
          appliedFor: formData.appliedFor,
          amount,
        }
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the application. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
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
        {/* Form Fields */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">Name</label>
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
          <label className="block mb-1" htmlFor="fatherName">Father's Name</label>
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
          <label className="block mb-1" htmlFor="gender">Gender</label>
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
          <label className="block mb-1" htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">Email</label>
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
          <label className="block mb-1" htmlFor="dob">Date of Birth (as per aadhar)</label>
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
          <label className="block mb-1" htmlFor="dob">Aadhar</label>
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

        <div className="mb-4">
          <label className="block mb-1" htmlFor="address.address">Address (as per aadhar)</label>
          <input
            type="text"
            id="address"
            name="address.address"
            value={formData.address.address}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="address.state">State</label>
          <input
            type="text"
            id="state"
            name="address.state"
            value={formData.address.state}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="address.district">District</label>
          <input
            type="text"
            id="district"
            name="address.district"
            value={formData.address.district}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="address.pincode">Pincode</label>
          <input
            type="text"
            id="pincode"
            name="address.pincode"
            value={formData.address.pincode}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="appliedFor">Applied For</label>
          <select
            id="appliedFor"
            name="appliedFor"
            value={formData.appliedFor}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          >
            <option value="">Select Position</option>
            <option value="vayam valintor">Vayam Valintor</option>
            <option value="monatring valinter">Monatring Valinter</option>
            <option value="yog valintor">Yog Valintor</option>
            <option value="yog industry">Yog Industry</option>
            <option value="ayurved industry">Ayurved Industry</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="photo">Upload Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <h2 className="text-xl font-semibold mb-2">Education</h2>
        
        {/* High School Fields */}
        <div className="mb-4">
          <label className="block mb-1">High School </label>
          <input
            type="text"
            placeholder="Percentage"
            name="education.highSchool.percentage"
            value={formData.education.highSchool.percentage}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Year"
            name="education.highSchool.year"
            value={formData.education.highSchool.year}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Board"
            name="education.highSchool.board"
            value={formData.education.highSchool.board}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Intermediate Fields */}
        <div className="mb-4">
          <label className="block mb-1">Intermediate</label>
          <input
            type="text"
            placeholder="Percentage"
            name="education.intermediate.percentage"
            value={formData.education.intermediate.percentage}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Year"
            name="education.intermediate.year"
            value={formData.education.intermediate.year}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Board"
            name="education.intermediate.board"
            value={formData.education.intermediate.board}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Graduation Fields */}
        <div className="mb-4">
          <label className="block mb-1">Graduation</label>
          <input
            type="text"
            placeholder="Percentage"
            name="education.graduation.percentage"
            value={formData.education.graduation.percentage}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Year"
            name="education.graduation.year"
            value={formData.education.graduation.year}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Board"
            name="education.graduation.board"
            value={formData.education.graduation.board}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Post Graduation Fields */}
        <div className="mb-4">
          <label className="block mb-1">Post Graduation</label>
          <input
            type="text"
            placeholder="Percentage"
            name="education.postGraduation.percentage"
            value={formData.education.postGraduation.percentage}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Year"
            name="education.postGraduation.year"
            value={formData.education.postGraduation.year}
            onChange={handleChange}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Board"
            name="education.postGraduation.board"
            value={formData.education.postGraduation.board}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className={`w-full p-2 text-white rounded ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default InternshipForm;
