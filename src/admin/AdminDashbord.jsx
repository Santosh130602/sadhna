
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar'; // Adjust the path as necessary
import { FaCircleArrowRight } from "react-icons/fa6";

const AdminDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen">
            
            <Sidebar />

          
            <div className="w-7/10 p-6 overflow-y-auto" style={{ fontFamily: 'Sofadi One, sans-serif' }}>
              
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-red-400 p-6 rounded-lg h-36 shadow-lg cursor-pointer" onClick={() => navigate('/get-user-sk4')}>
                        <h2 className="text-3xl font-bold text-zinc-800">Users</h2>
                        <p className="text-gray-600">Manage user data and information.</p>
                        <p className='mt-4 text-white flex items-center gap-2'>More info <FaCircleArrowRight /></p>
                    </div>
                    <div className="bg-yellow-400 p-6 rounded-lg h-36 shadow-lg cursor-pointer" onClick={() => navigate('/get-intern-transition')}>
                        <h2 className="text-3xl font-bold text-zinc-800">Transactions</h2>
                        <p className="text-gray-600">View all transaction details.</p>
                        <p className='mt-4 text-white flex items-center gap-2'>More info <FaCircleArrowRight /></p>
                    </div>
                    <div className="bg-yellow-400 p-6 rounded-lg h-36 shadow-lg cursor-pointer" onClick={() => navigate('/get-contact-sk4')}>
                        <h2 className="text-3xl font-bold text-zinc-800">Contact</h2>
                        <p className="text-gray-600">View and manage contact inquiries.</p>
                        <p className='mt-4 text-white flex items-center gap-2'>More info <FaCircleArrowRight /></p>
                    </div>
                    <div className="bg-yellow-400 p-6 rounded-lg h-36 shadow-lg cursor-pointer" onClick={() => navigate('/get-vayam-sk4')}>
                        <h2 className="text-3xl font-bold text-zinc-800">VAYAM</h2>
                        <p className="text-gray-600">Manage VAYAM candidates and data.</p>
                        <p className='mt-4 text-white flex items-center gap-2'>More info <FaCircleArrowRight /></p>
                    </div>
                    <div className="bg-yellow-400 p-6 rounded-lg h-36 shadow-lg cursor-pointer" onClick={() => navigate('/get-internship-sk4')}>
                        <h2 className="text-3xl font-bold text-zinc-800">Internship</h2>
                        <p className="text-gray-600">Manage Internship candidates and data.</p>
                        <p className='mt-4 text-white flex items-center gap-2'>More info <FaCircleArrowRight /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
