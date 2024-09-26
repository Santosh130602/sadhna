import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TransactionDetails = () => {
    const { merchantTransactionId } = useParams();
    const [transaction, setTransaction] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/payment/transaction/${merchantTransactionId}`);
                setTransaction(response.data);
            } catch (error) {
                setError('Error fetching transaction details');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTransaction();
    }, [merchantTransactionId]);

    const handlePrint = () => {
        window.print();
    };

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Transaction Details</h2>
            {transaction && (
                <div>
                    <table className="table-auto w-full mb-4">
                        <tbody>
                            <tr>
                                <td className="font-semibold">Name:</td>
                                <td>{transaction.name}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Amount:</td>
                                <td>${transaction.amount.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Status:</td>
                                <td>{transaction.paymentStatus}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Merchant Transaction ID:</td>
                                <td>{transaction.merchantTransactionId}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Date:</td>
                                <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
                            </tr>
                            {/* Add more details as necessary */}
                        </tbody>
                    </table>

                    <button
                        onClick={handlePrint}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Print Details
                    </button>
                </div>
            )}
        </div>
    );
};

export default TransactionDetails;
