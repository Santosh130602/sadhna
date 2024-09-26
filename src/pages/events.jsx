

import React from 'react';
import backgroundImage from "../assets/hero9.jpeg"; // Path to your background image
import { useNavigate } from 'react-router-dom';
import event1 from "../assets/banner1.jpg"; // Sample event image

const Event = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: 1,
      name: 'स्वानुभूति शिविर-2021',
      date: '2021-10-01',
      description: 'Join us for an amazing experience at Event One.',
      image: event1,
    },
    {
      id: 2,
      name: 'स्वानुभूति शिविर-2022',
      date: '2022-10-01',
      description: 'Join us for an amazing experience at Event Two.',
      image: event1,
    },
    {
      id: 3,
      name: 'स्वानुभूति शिविर-2023',
      date: '2023-10-01',
      description: 'Join us for an amazing experience at Event Three.',
      image: event1,
    },
    {
      id: 4,
      name: 'स्वानुभूति शिविर-2024',
      date: '2024-10-01',
      description: 'Join us for an amazing experience at Event Four.',
      image: event1,
    }
  ];

  const today = new Date();

  // Separate events into upcoming and past
  const upcomingEvents = programs.filter(program => new Date(program.date) >= today);
  const pastEvents = programs.filter(program => new Date(program.date) < today);

  // Function to handle navigation to the donate page
  const handleUpcomingEventClick = () => {
    navigate('/donate'); // Redirect to the donate page
  };

  return (
    <div className="relative">
      {/* Background Image Section */}
      <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative" style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay for darkening effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-white text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>Events</h1>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          {/* Upcoming Events Section */}
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((program) => (
              <div 
                key={program.id} 
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer" // Added cursor pointer
                onClick={handleUpcomingEventClick} // Navigation on click
              >
                <img src={program.image} alt={program.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{program.name}</h3>
                <p className="text-gray-700 mb-2">{program.description}</p>
                <p className="text-gray-500 text-sm">Date: {program.date}</p>
              </div>
            ))}
          </div>

          {/* Past Events Section */}
          <h2 className="text-4xl font-bold text-center mb-12">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((program) => (
              <div key={program.id} className="bg-white p-6 rounded-lg shadow-md">
                <img src={program.image} alt={program.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{program.name}</h3>
                <p className="text-gray-700 mb-2">{program.description}</p>
                <p className="text-gray-500 text-sm">Date: {program.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
