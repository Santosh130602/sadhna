
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from "./sidebar"

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedUser, setSelectedUser] = useState(null); 
    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token'); // Get the token from local storage
            const response = await axios.get('http://localhost:4000/api/users/get-user', {
                headers: {
                    Authorization: `Bearer ${token}`, 
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

    const handleViewUser = (user) => {
        setSelectedUser(user); 
    };

    const closeCard = () => {
        setSelectedUser(null);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='flex h-screen'>
            <Sidebar />

            <div className="flex-grow flex flex-col p-6">
                <h2 className="text-4xl p-6 mb-4 text-center" style={{ fontFamily: 'Sofadi One, sans-serif' }}>All Users</h2>
                {loading ? (
                    <p>Loading users...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : users.length === 0 ? (
                    <p>No users found.</p>
                ) : (
                    <div className="overflow-hidden">
                        <div className="overflow-y-auto max-h-60"> 
                            <table className="min-w-full bg-white border border-gray-300 text-left"> 
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="py-2 px-4 border-b">Name</th>
                                        <th className="py-2 px-4 border-b">Email</th>
                                        <th className="py-2 px-4 border-b">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user._id} className="hover:bg-gray-100">
                                            <td className="py-2 px-4 border-b">{user.fullName}</td>
                                            <td className="py-2 px-4 border-b">{user.email}</td>
                                            <td className="py-2 px-4 border-b">
                                                <button
                                                    onClick={() => handleViewUser(user)}
                                                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
                                                >
                                                    More
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {selectedUser && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded shadow-lg">
                            <h3 className="text-xl mb-4">User Details</h3>
                            <p><strong>Full Name:</strong> {selectedUser.fullName}</p>
                            <p><strong>Email:</strong> {selectedUser.email}</p>
                            <p><strong>Image:</strong> {selectedUser.image ? <img src={selectedUser.image} alt="User" className="w-32 h-32 rounded-full" /> : "No image available"}</p>
                            <p><strong>Admin:</strong> {selectedUser.isAdmin ? "Yes" : "No"}</p>
                            <p><strong>Total Transaction:</strong> {selectedUser.transaction.length > 0 ? selectedUser.transaction.join(", ") : "No Transactions"}</p>
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
        </div>
    );
};

export default AllUsers;
