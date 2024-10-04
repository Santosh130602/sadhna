// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const ResetPassword = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const { token } = useParams(); // Get the token from the URL

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setMessage("Passwords don't match.");
//       return;
//     }

//     try {
//       const response = await axios.post(`http://localhost:4000/api/auth/reset-password/${token}`, {
//         password,
//       });
//       setMessage('Password has been successfully reset.');
//     } catch (error) {
//       setMessage('Error resetting password.');
//     }
//   };

//   return (
//     <div className="reset-password">
//       <h2>Reset Password</h2>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>New Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Reset Password</button>
//       </form>
//     </div>
//   );
// };

// export default ResetPassword;





// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const ResetPassword = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const { token } = useParams(); // Get the token from the URL

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setMessage("Passwords don't match.");
//       return;
//     }

//     try {
//       const response = await axios.post(`http://localhost:4000/api/users/reset-password/${token}`, {
//         password,
//       });
//       setMessage('Password has been successfully reset.');
//     } catch (error) {
//       setMessage('Error resetting password.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 bg-white p-8 shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold text-center mb-6">Reset Password</h2>
//       {message && (
//         <p className="text-center text-red-500 font-semibold mb-4">{message}</p>
//       )}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">New Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
//         >
//           Reset Password
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ResetPassword;




import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the token from the URL
import axios from 'axios'; // For sending the request

const PasswordReset = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { token } = useParams(); // Extract token from URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(`/api/reset-password/${token}`, { password, confirmPassword });

      if (response.status === 200) {
        setSuccessMessage("Password has been successfully reset.");
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred while resetting the password.");
    }
  };

  return (
    <div className="password-reset-container">
      <h2>Reset Your Password</h2>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordReset;
