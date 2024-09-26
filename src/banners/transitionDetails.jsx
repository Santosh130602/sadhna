

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserTransactions = ({ userID }) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/payment/transactions/${userID}`);
                setTransactions(response.data);
            } catch (error) {
                setError('Error fetching transactions');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, [userID]);

    const handleViewDetails = (merchantTransactionId) => {
        navigate(`/transaction/${merchantTransactionId}`);
    };

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Your Transactions</h2>
            <ul className="space-y-4">
                {transactions.map(transaction => (
                    <li key={transaction._id} className="p-4 bg-gray-100 rounded-lg shadow">
                        <p className="font-semibold">Name: <span className="font-normal">{transaction.name}</span></p>
                        <p className="font-semibold">Amount: <span className="font-normal">${transaction.amount.toFixed(2)}</span></p>
                        <p className="font-semibold">Status: <span className={`font-normal ${transaction.paymentStatus === 'Success' ? 'text-green-500' : 'text-red-500'}`}>{transaction.paymentStatus}</span></p>
                        <p className="font-semibold">Merchant Transaction ID: <span className="font-normal">{transaction.merchantTransactionId}</span></p>
                        <p className="font-semibold">Date: <span className="font-normal">{new Date(transaction.createdAt).toLocaleDateString()}</span></p>
                        <button 
                            onClick={() => handleViewDetails(transaction.merchantTransactionId)}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            View Details
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserTransactions;
