// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AllUsers = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

// const fetchUsers = async () => {
//     try {
//         const token = localStorage.getItem('token'); // Get the token from local storage
//         const response = await axios.get('http://localhost:4000/api/users/get-user', {
//             headers: {
//                 Authorization: `Bearer ${token}`, // Add the token to the headers
//             },
//         });
//         setUsers(response.data);
//     } catch (error) {
//         setError('Error fetching users');
//         console.error('Error fetching users:', error);
//     } finally {
//         setLoading(false);
//     }
// };


//     // Handle user deletion
//     const deleteUser = async (userId) => {
//         if (window.confirm('Are you sure you want to delete this user?')) {
//             try {
//                 await axios.delete(`http://localhost:4000/api/users/delete-user/${userId}`);
//                 // Update the users state after deletion
//                 setUsers(users.filter(user => user._id !== userId));
//             } catch (error) {
//                 setError('Error deleting user');
//                 console.error('Error deleting user:', error);
//             }
//         }
//     };

//     // Fetch users when the component mounts
//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl mb-4">All Users</h2>
//             {loading ? (
//                 <p>Loading users...</p>
//             ) : error ? (
//                 <p className="text-red-500">{error}</p>
//             ) : users.length === 0 ? (
//                 <p>No users found.</p>
//             ) : (
//                 <table className="min-w-full bg-white">
//                     <thead>
//                         <tr>
//                             <th className="py-2 px-4 border-b">Full Name</th>
//                             <th className="py-2 px-4 border-b">Email</th>
//                             <th className="py-2 px-4 border-b">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user) => (
//                             <tr key={user._id}>
//                                 <td className="py-2 px-4 border-b">{user.fullName}</td>
//                                 <td className="py-2 px-4 border-b">{user.email}</td>
//                                 <td className="py-2 px-4 border-b">
//                                     <button
//                                         onClick={() => deleteUser(user._id)}
//                                         className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
//                                         disabled={user.isAdmin} // Disable button for admin users
//                                     >
//                                         {user.isAdmin ? "Can't Delete" : 'Delete'}
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default AllUsers;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AllUsers = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [selectedUser, setSelectedUser] = useState(null); // State to hold selected user for viewing

//     const fetchUsers = async () => {
//         try {
//             const token = localStorage.getItem('token'); // Get the token from local storage
//             const response = await axios.get('http://localhost:4000/api/users/get-user', {
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

//     // Close the modal or clear user details
//     const closeModal = () => {
//         setSelectedUser(null);
//     };

//     // Fetch users when the component mounts
//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl mb-4">All Users</h2>
//             {loading ? (
//                 <p>Loading users...</p>
//             ) : error ? (
//                 <p className="text-red-500">{error}</p>
//             ) : users.length === 0 ? (
//                 <p>No users found.</p>
//             ) : (
//                 <table className="min-w-full bg-white">
//                     <thead>
//                         <tr>
//                             <th className="py-2 px-4 border-b">Full Name</th>
//                             <th className="py-2 px-4 border-b">Email</th>
//                             <th className="py-2 px-4 border-b">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user) => (
//                             <tr key={user._id}>
//                                 <td className="py-2 px-4 border-b">{user.fullName}</td>
//                                 <td className="py-2 px-4 border-b">{user.email}</td>
//                                 <td className="py-2 px-4 border-b">
//                                     <button
//                                         onClick={() => handleViewUser(user)}
//                                         className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
//                                     >
//                                         View
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
            
//             {/* User Details Modal */}
//             {selectedUser && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded shadow-lg">
//                         <h3 className="text-xl mb-4">User Details</h3>
//                         <p><strong>Full Name:</strong> {selectedUser.fullName}</p>
//                         <p><strong>Email:</strong> {selectedUser.email}</p>
//                         <p><strong>Image:</strong> {selectedUser.image || "No image available"}</p>
//                         <p><strong>Admin:</strong> {selectedUser.isAdmin ? "Yes" : "No"}</p>
//                         <p><strong>Total Registration:</strong> {selectedUser.registration.length > 0 ? selectedUser.registration.join(", ") : "Not Registerd"}</p>
//                         <button
//                             onClick={closeModal}
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

// export default AllUsers;




import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedUser, setSelectedUser] = useState(null); // State to hold selected user for viewing

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token'); // Get the token from local storage
            const response = await axios.get('http://localhost:4000/api/users/get-user', {
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
            <h2 className="text-2xl mb-4">All Users</h2>
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
                        <p><strong>Full Name:</strong> {selectedUser.fullName}</p>
                        <p><strong>Email:</strong> {selectedUser.email}</p>
                        <p><strong>Image:</strong> {selectedUser.image ? <img src={selectedUser.image} alt="User" className="w-32 h-32 rounded-full" /> : "No image available"}</p>
                        <p><strong>Admin:</strong> {selectedUser.isAdmin ? "Yes" : "No"}</p>
                        <p><strong>Total Transaction:</strong> {selectedUser.transaction.length > 0 ? selectedUser.transaction.join(", ") : "Not Transaction"}</p>
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

export default AllUsers;
