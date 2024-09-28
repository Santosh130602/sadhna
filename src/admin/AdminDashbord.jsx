import React, { useState } from 'react';
import AllUsers from './getUsers';
import GetContactsList from './getContact';

const AdminDashboard = () => {
    // State to track which section is selected
    const [selectedSection, setSelectedSection] = useState('Get Users');

    // This function will render the right-side content based on the selected item
    const renderContent = () => {
        switch (selectedSection) {
            case 'Get Users':
                return <AllUsers/>;
            case 'Total Contact':
                return <GetContactsList/>;
                case 'Total Transactions':
                return <div>Here you can adjust settings.</div>;
            case 'Settings':
                return <div>Here you can adjust settings.</div>;
            default:
                return <div>Welcome to the Admin Dashboard</div>;
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left Sidebar (30% width) */}
            <div className="w-3/10 bg-zinc-800 text-white p-4">
                <h2 className="text-2xl mb-6">Admin Dashboard</h2>
                <ul>
                    <li
                        className={`p-2 mb-2 cursor-pointer ${
                            selectedSection === 'Get Users' ? 'bg-gray-600' : ''
                        }`}
                        onClick={() => setSelectedSection('Get Users')}
                    >
                        Get Users
                    </li>
                    <li
                        className={`p-2 mb-2 cursor-pointer ${
                            selectedSection === 'Total Transactions' ? 'bg-gray-600' : ''
                        }`}
                        onClick={() => setSelectedSection('Total Transactions')}
                    >
                        Total Transactions
                    </li>
                    <li
                        className={`p-2 mb-2 cursor-pointer ${
                            selectedSection === 'Total Contact' ? 'bg-gray-600' : ''
                        }`}
                        onClick={() => setSelectedSection('Total Contact')}
                    >
                        Total Contact
                    </li>
                    <li
                        className={`p-2 mb-2 cursor-pointer ${
                            selectedSection === 'Settings' ? 'bg-gray-600' : ''
                        }`}
                        onClick={() => setSelectedSection('Settings')}
                    >
                        Settings
                    </li>
                </ul>
            </div>

            {/* Right Content Area (70% width) */}
            <div className="w-7/10 p-6">
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminDashboard;
