// import React, { useState } from 'react';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/api/auth/forgot-password', { email });
//       setMessage('Password reset link has been sent to your email.');
//     } catch (error) {
//       setMessage('Error sending password reset link.');
//     }
//   };

//   return (
//     <div className="forgot-password">
//       <h2>Forgot Password</h2>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Send Reset Link</button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;


import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/users/forgot-password', { email });
      setMessage('Password reset link has been sent to your email.');
    } catch (error) {
      setMessage('Error sending password reset link.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full" style={{ fontFamily: 'Gowun Batang, serif' }}>
        <h2 className="text-4xl font-bold mb-6 text-center">Forgot Password</h2>
        {message && (
          <p className={`text-center mb-4 ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
