import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch payment history
  const fetchPaymentHistory = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      const response = await axios.get('http://localhost:4000/api/users/getuser-payments', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPayments(response.data.payments);
    } catch (err) {
      setError('Failed to fetch payment history');
    } finally {
      setLoading(false);
    }
  };

  // Fetch payment history when component mounts
  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  // Render loading state
  if (loading) {
    return <div>Loading payment history...</div>;
  }

  // Render error state
  if (error) {
    return <div>{error}</div>;
  }

  // Render payments history table
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Transaction ID</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id}>
                <td className="py-2 px-4 border-b">{payment.transactionId}</td>
                <td className="py-2 px-4 border-b">{payment.amount}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(payment.date).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b">{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Profile;
