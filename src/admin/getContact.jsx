



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const GetContactsList = () => {
//   const [contacts, setContacts] = useState([]);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/api/users/getcontact-details');
//         setContacts(response.data);
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//         setError('Could not fetch contacts. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   const handleCardClick = (contact) => {
//     setSelectedContact(contact);
//   };

//   const closeDetails = () => {
//     setSelectedContact(null);
//   };

//   if (loading) {
//     return <div className="text-center">Loading contacts...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-4xl font-semibold text-gray-800 text-center">Contact List</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//           {contacts.map((contact) => (
//             <div
//               key={contact._id}
//               className="bg-gray-50 p-4 rounded-lg shadow-lg cursor-pointer"
//               onClick={() => handleCardClick(contact)}
//             >
//               <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
//               <p className="text-gray-600">{contact.email}</p>
//             </div>
//           ))}
//         </div>

//         {/* Show selected contact details */}
//         {selectedContact && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//               <h2 className="text-2xl font-semibold">{selectedContact.name}</h2>
//               <p><strong>Email:</strong> {selectedContact.email}</p>
//               <p><strong>Message:</strong> {selectedContact.message}</p>
//               <button
//                 onClick={closeDetails}
//                 className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GetContactsList;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const GetContactsList = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [selectedUser, setSelectedUser] = useState(null); // State to hold selected user for viewing

//     const fetchUsers = async () => {
//         try {
//             const token = localStorage.getItem('token'); // Get the token from local storage
//             const response = await axios.get('http://localhost:4000/api/users/getcontact-details', {
//                 headers: {
//                     Authorization: `Bearer ${token}`, // Add the token to the headers
//                 },
//             });
//             setUsers(response.data);
//         } catch (error) {
//             setError('Error fetching users');
//             console.error('Error fetching users:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Handle user selection to view details
//     const handleViewUser = (user) => {
//         setSelectedUser(user); // Set the selected user to show details
//     };

//     // Close the card or clear user details
//     const closeCard = () => {
//         setSelectedUser(null);
//     };

//     // Fetch users when the component mounts
//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl mb-4">All Contact</h2>
//             {loading ? (
//                 <p>Loading users...</p>
//             ) : error ? (
//                 <p className="text-red-500">{error}</p>
//             ) : users.length === 0 ? (
//                 <p>No users found.</p>
//             ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                     {users.map((user) => (
//                         <div key={user._id} className="bg-white p-4 rounded shadow-lg">
//                             <h3 className="text-lg font-semibold">{user.fullName}</h3>
//                             <p className="text-gray-700">{user.email}</p>
//                             <button
//                                 onClick={() => handleViewUser(user)}
//                                 className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
//                             >
//                                 View Details
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* User Details Card */}
//             {selectedUser && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded shadow-lg">
//                         <h3 className="text-xl mb-4">User Details</h3>
//                         <p><strong>Full Name:</strong> {selectedUser.fullName}</p>
//                         <p><strong>Email:</strong> {selectedUser.email}</p>
//                         <p><strong>Image:</strong> {selectedUser.image ? <img src={selectedUser.image} alt="User" className="w-32 h-32 rounded-full" /> : "No image available"}</p>
//                         <p><strong>Admin:</strong> {selectedUser.isAdmin ? "Yes" : "No"}</p>
//                         <p><strong>Total Transaction:</strong> {selectedUser.transaction.length > 0 ? selectedUser.transaction.join(", ") : "Not Transaction"}</p>
//                         <button
//                             onClick={closeCard}
//                             className="mt-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default GetContactsList;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetContactsList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedUser, setSelectedUser] = useState(null); // State to hold selected user for viewing

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token'); // Get the token from local storage
            const response = await axios.get('http://localhost:4000/api/users/getcontact-details', {
                headers: {
                    Authorization: `Bearer ${token}`, // Add the token to the headers
                },
            });
            setUsers(response.data);
        } catch (error) {
            setError('Error fetching users');
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle user selection to view details
    const handleViewUser = (user) => {
        setSelectedUser(user); // Set the selected user to show details
    };

    // Close the card or clear user details
    const closeCard = () => {
        setSelectedUser(null);
    };

    // Fetch users when the component mounts
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl mb-4">All Contacts</h2>
            {loading ? (
                <p>Loading users...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {users.map((user) => (
                        <div key={user._id} className="bg-white p-4 rounded shadow-lg">
                            <h3 className="text-lg font-semibold">{user.fullName}</h3>
                            <p className="text-gray-700">{user.email}</p>
                            <button
                                onClick={() => handleViewUser(user)}
                                className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* User Details Card */}
            {selectedUser && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h3 className="text-xl mb-4">User Details</h3>
                        <p><strong>Full Name:</strong> {selectedUser.name}</p>
                        <p><strong>Email:</strong> {selectedUser.email}</p>
                        <p><strong>Message:</strong> {selectedUser.message || "No message available"}</p>
                        <button
                            onClick={closeCard}
                            className="mt-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetContactsList;
