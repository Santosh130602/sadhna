

import React, { useState, useEffect } from 'react';
import backgroundImage from "../assets/hero9.jpeg"; // Use the same background image
import axios from 'axios';
import PaymentReceipt from './paymentRecipt'; // Import the PaymentReceipt component
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [transactions, setTransactions] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedTransaction, setSelectedTransaction] = useState(null); // State to hold the selected transaction

    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!userId) {
                    throw new Error('User ID not found in local storage.');
                }

                const transactionResponse = await axios.get(`http://localhost:4000/api/user-payment/transactions/${userId}`);
                setTransactions(transactionResponse.data.data);

                const userResponse = await axios.get(`http://localhost:4000/api/user-payment/internuser/${userId}`);
                const userData = userResponse.data.data[0];

                setUserDetails(userData);
                setLoading(false);
            } catch (error) {
                setError(error.message || 'Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleMoreClick = (transaction) => {
        setSelectedTransaction(transaction);
    };

    return (
        <div className="relative">
            <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative inset-0 -z-10" style={{
                backgroundImage: `url(${backgroundImage})`,
            }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <h1 className="text-white text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
                    User Profile
                </h1>
            </div>

            {/* Main Content Section */}
            <div className='bg-white p-8'>
                <h1 className=" text-4xl text-center font-thin relative p-4" style={{ fontFamily: 'Gowun Batang, serif' }}>
                    User Internship
                </h1>
                {transactions.length > 0 ? (
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-200 text-left text-sm">
                                {/* Conditionally hide fields based on screen size */}
                                <th className="py-2 px-4 hidden sm:table-cell">Order ID</th>
                                <th className="py-2 px-4 hidden sm:table-cell">Transaction ID</th>
                                <th className="py-2 px-4">Applied For</th>
                                <th className="py-2 px-4">Amount</th>
                                <th className="py-2 px-4 hidden sm:table-cell">Status</th>
                                <th className="py-2 px-4 hidden sm:table-cell">Date</th>
                                <th className="py-2 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction._id} className="border-t">
                                    {/* Conditionally hide fields based on screen size */}
                                    <td className="py-2 px-4 hidden sm:table-cell">{transaction.orderId}</td>
                                    <td className="py-2 px-4 hidden sm:table-cell">{transaction.paymentId}</td>
                                    <td className="py-2 px-4">{transaction.appliedFor || 'N/A'}</td>
                                    <td className="py-2 px-4">{transaction.amount} {transaction.currency}</td>
                                    <td className="py-2 px-4 hidden sm:table-cell">{transaction.status}</td>
                                    <td className="py-2 px-4 hidden sm:table-cell">{new Date(transaction.createdAt).toLocaleString()}</td>
                                    <td className="py-2 px-4">
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                            onClick={() => handleMoreClick(transaction)}
                                        >
                                            More
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No transactions found.</p>
                )}

                </div>

                {/* Conditionally render PaymentReceipt component */}
                {selectedTransaction && (
                    <PaymentReceipt userDetails={userDetails} transaction={selectedTransaction} />
                )}
            </div>
            );
};

            export default Profile;
