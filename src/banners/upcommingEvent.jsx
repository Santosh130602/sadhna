import React from 'react';
import { useNavigate } from 'react-router-dom';

const UpcomingEventsPage = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    // Redirect to payment gateway page
    navigate('/payment'); // Adjust the route based on your setup
  };

  const events = [
    { id: 1, title: 'Event One', date: 'October 1, 2024' },
    { id: 2, title: 'Event Two', date: 'October 15, 2024' },
    { id: 3, title: 'Event Three', date: 'November 1, 2024' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Upcoming Events</h1>
      <div className="bg-white rounded shadow-md p-4 mb-6">
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event.id} className="border p-4 rounded">
              <h2 className="text-xl font-bold">{event.title}</h2>
              <p className="text-gray-600">{event.date}</p>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleDonateClick}
        className="bg-blue-600 text-white py-2 px-4 rounded transition hover:bg-blue-700"
      >
        Donate
      </button>
    </div>
  );
};

export default UpcomingEventsPage;
