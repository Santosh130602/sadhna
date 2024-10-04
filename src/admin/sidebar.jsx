// Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo1.png'; // Ensure to replace with your logo's correct path

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="w-3/10 bg-zinc-800 text-white p-4 flex flex-col items-center">
            {/* Logo and Branding */}
            <div className="mb-6 flex flex-col items-center" onClick={() => navigate('/admin-dashbord-kutumb')}>
                <img src={Logo} alt="Logo" className="w-16 h-16 mb-2" />
                <h2 className="text-2xl font-bold">SadhanaShri</h2>
            </div>

            {/* Menu Items */}
            <ul className="w-full text-xl flex flex-col gap-2" style={{ fontFamily: 'Gowun Batang, serif' }}>
                <li className="px-4 py-1 mb-2 cursor-pointer rounded bg-zinc-700 hover:bg-zinc-600" onClick={() => navigate('/get-user-sk4')}>
                    Users
                </li>
                <li className="px-4 py-1 mb-2 cursor-pointer rounded bg-zinc-700 hover:bg-zinc-600" onClick={() => navigate('/get-intern-transition')}>
                    Transactions
                </li>
                <li className="px-4 py-1 mb-2 cursor-pointer rounded bg-zinc-700 hover:bg-zinc-600" onClick={() => navigate('/get-contact-sk4')}>
                    Contact
                </li>
                <li className="px-4 py-1 mb-2 cursor-pointer rounded bg-zinc-700 hover:bg-zinc-600" onClick={() => navigate('/get-vayam-sk4')}>
                    VAYAM
                </li>
                <li className="px-4 py-1 mb-2 cursor-pointer rounded bg-zinc-700 hover:bg-zinc-600" onClick={() => navigate('/get-internship-sk4')}>
                    Internship
                </li>
                {/* <li className="px-4 py-1 mb-2 cursor-pointer rounded bg-zinc-700 hover:bg-zinc-600" onClick={() => navigate('/settings')}>
                    Settings
                </li> */}
                <li className="px-4 py-1 mb-2 cursor-pointer rounded bg-zinc-700 hover:bg-zinc-600" onClick={() => {
                    localStorage.removeItem('authToken');
                    navigate('/login');
                }}>
                    Logout
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
