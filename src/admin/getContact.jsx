


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';

const GetContactsList = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedContact, setSelectedContact] = useState(null); 
    const fetchContacts = async () => {
        try {
            const token = localStorage.getItem('token'); 
            const response = await axios.get('http://localhost:4000/api/users/getcontact-details', {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            setContacts(response.data);
        } catch (error) {
            setError('Error fetching contacts');
            console.error('Error fetching contacts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleViewContact = (contact) => {
        setSelectedContact(contact); 
    };

    const closeCard = () => {
        setSelectedContact(null);
    };

 
    const truncateMessage = (message) => {
        if (!message) return "No message available";
        return message.length > 25 ? `${message.slice(0, 25)}...` : message;
    };

  
    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div className='flex h-screen'>
            <Sidebar />

            <div className="flex-grow flex flex-col p-6">
                <h2 className="text-4xl mb-4 text-center" style={{ fontFamily: 'Sofadi One, sans-serif' }}>All Contacts</h2>
                {loading ? (
                    <p>Loading contacts...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : contacts.length === 0 ? (
                    <p>No contacts found.</p>
                ) : (
                    <div className="overflow-hidden">
                        <div className="overflow-y-auto max-h-60"> 
                            <table className="min-w-full bg-white border border-gray-300 text-left"> 
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="py-2 px-4 border-b">Full Name</th>
                                        <th className="py-2 px-4 border-b">Phone</th>
                                        <th className="py-2 px-4 border-b">Email</th>
                                        <th className="py-2 px-4 border-b">Message</th>
                                        <th className="py-2 px-4 border-b">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map((contact) => (
                                        <tr key={contact._id} className="hover:bg-gray-100">
                                            <td className="py-2 px-4 border-b">{contact.name}</td>
                                            <td className="py-2 px-4 border-b">{contact.phone}</td>
                                            <td className="py-2 px-4 border-b">{contact.email}</td>
                                            <td className="py-2 px-4 border-b">{truncateMessage(contact.message)}</td>
                                            <td className="py-2 px-4 border-b">
                                                <button
                                                    onClick={() => handleViewContact(contact)}
                                                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
                                                >
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

           
                {selectedContact && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded shadow-lg">
                            <h3 className="text-xl mb-4">Contact Details</h3>
                            <p><strong>Full Name:</strong> {selectedContact.name}</p>
                            <p><strong>Email:</strong> {selectedContact.email}</p>
                            <p><strong>Message:</strong> {selectedContact.message || "No message available"}</p>
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

export default GetContactsList;
