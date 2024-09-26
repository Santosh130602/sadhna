import React from 'react';
import { Link } from 'react-router-dom';
import event1 from "../assets/banner1.jpg"; // Placeholder image

const events = [
  {
    id: 1,
    name: 'स्वानुभूति शिविर-2021',
    date: '2024-10-01',
    description: 'Join us for an amazing experience at Event One.',
    image: event1,
  },
  {
    id: 2,
    name: 'स्वानुभूति शिविर-2022',
    date: '2024-10-01',
    description: 'Join us for an amazing experience at Event Two.',
    image: event1,
  },
  {
    id: 3,
    name: 'स्वानुभूति शिविर-2023',
    date: '2024-10-01',
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

function EventsBanner() {
  return (
    <div className="w-11/12 mx-auto p-6">
      <h1 className='text-5xl font-eventHeading mb-16 text-center font-bold underline decoration-1 underline-offset-4' style={{ fontFamily: 'Gowun Batang, serif' }}>
        Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {events.map((event) => (
          <div key={event.id} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className='p-6'>
              <img
                src={event.image}
                alt={event.name}
                className="h-64 w-full object-cover rounded-md" 
              />
            </div>

            <div>
              <div className="flex-grow p-4">
                <h3 className="text-2xl font-bold mb-1">{event.name}</h3>
                <p className="text-gray-700 mb-1">{event.description}</p>
                <p className="text-gray-500 text-sm">{event.date}</p>
              </div>
              

              <div className="relative group p-4 mt-4 inline-block">
                <Link
                  to={`/events`}
                  className="relative text-white bg-red-500 py-2 px-4 transition duration-300"
                >
                  <span className="absolute inset-0 bg-zinc-800 transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                  <span className="relative">Know More</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default EventsBanner;

