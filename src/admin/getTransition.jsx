import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';

const GetUserTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = localStorage.getItem('token'); 
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                // Fetch user transactions
                const transactionsResponse = await axios.get(`http://localhost:4000/api/user-payment/get-user-transactions`, {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                });
                setTransactions(transactionsResponse.data.data); 
                setLoading(false);
            } catch (error) {
                setError(error.message || 'Error fetching transactions');
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex h-screen">
            <Sidebar />

            <div className="p-4 w-full overflow-auto">
                <h1 className="text-4xl p-8 font-bold mb-8 underline text-center w-full" style={{ fontFamily: 'Sofadi One, sans-serif' }}>
                    User Transactions
                </h1>

                <div className="bg-gray-100 p-6 rounded-md shadow-md mb-10">
                    <h2 className="text-xl font-bold underline text-center mb-4" style={{ fontFamily: 'Sofadi One, sans-serif' }}>
                        Transactions Table
                    </h2>

                    <table className="min-w-full table-auto bg-white border-collapse">
                        <thead>
                            <tr>
                            <th className="border px-4 py-2">User ID</th>
                                <th className="border px-4 py-2">Order ID</th>
                                <th className="border px-4 py-2">Payment Status</th>
                                <th className="border px-4 py-2">Transaction ID</th>
                                <th className="border px-4 py-2">Amount</th>
                                <th className="border px-4 py-2">Applied For</th>
                                <th className="border px-4 py-2">Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.length > 0 ? (
                                transactions.map((transaction) => (
                                    <tr key={transaction._id}>
                                        <td className="border px-4 py-2">{transaction.userId}</td>
                                        <td className="border px-4 py-2">{transaction.orderId}</td>
                                        <td className="border px-4 py-2">{transaction.status}</td>
                                        <td className="border px-4 py-2">{transaction.paymentId}</td>
                                        <td className="border px-4 py-2">{transaction.amount}</td>
                                        <td className="border px-4 py-2">{transaction.appliedFor}</td>
                                        <td className="border px-4 py-2">{new Date(transaction.createdAt).toLocaleString()}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="border px-4 py-2 text-center">
                                        No transactions found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GetUserTransactions;
