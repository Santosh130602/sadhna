
import React from 'react';
import backgroundImage from "../assets/hero9.jpeg"; // Background image
import FooterBackground from "../assets/bg10.png"; // Footer background
import { useNavigate } from 'react-router-dom';
import event1 from "../assets/banner1.jpg"; // Event image

const Event = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: 1,
      name: 'स्वानुभूति शिविर-2021',
      date: '2021-01-14',
      description: 'Created history of success in the Holy land of Sangum.',
      image: event1,
    },
    {
      id: 2,
      name: 'स्वानुभूति शिविर-2022',
      date: '2021-01-14',
      description: 'Feeling proud for hosting such a grand event in the leap of mother Ganaga Yamuna Saraswati',
      image: event1,
    },
    {
      id: 3,
      name: 'स्वानुभूति शिविर-2023',
      date: '2021-01-14',
      description: 'Sangum of Youths at Prayag is hope of Indias futu',
      image: event1,
    },
    {
      id: 4,
      name: 'स्वानुभूति शिविर-2024',
      date: '2021-01-14',
      description: 'A step forword for awakening India.',
      image: event1,
    }
  ];

  const upcommingProgram = [
    {
      id: 1,
      name: 'स्वानुभूति शिविर-2024',
      date: '2025-01-14',
      description: 'Join us for an amazing experience at Event Four.',
      image: event1,
    },
    {
      
      id: 2,
      name: 'स्वानुभूति शिविर-2021',
      date: '2021-10-01',
      description: 'Join us for an amazing experience at Event One.',
      image: event1,
    },
    {
      id: 3,
      name: 'स्वानुभूति शिविर-2022',
      date: '2022-10-01',
      description: 'Join us for an amazing experience at Event Two.',
      image: event1,
    },
    {
      id: 4,
      name: 'स्वानुभूति शिविर-2023',
      date: '2023-10-01',
      description: 'Join us for an amazing experience at Event Three.',
      image: event1,
    }
  ];

  const today = new Date();
  const upcomingEvents = upcommingProgram.filter(program => new Date(program.date) >= today);
  const pastEvents = programs.filter(program => new Date(program.date) < today);

  const handleUpcomingEventClick = () => {
    navigate('/vayam-program'); // Navigate on click
  };

  return (
    <div className="relative bg-neutral-900 text-white py-12 px-8">
      {/* Background Image */}
      <div className="h-64 bg-cover bg-center relative" style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <h1 className="text-yellow-300 text-6xl  text-center pt-20 z-10 relative" style={{ fontFamily: 'Gowun Batang, serif' }}>
        Events
        </h1>
      </div>

      {/* Upcoming Events */}
      <div className="p-16 gap-8 mb-12 " >
        <h2 className="text-yellow-300 text-4xl text-center font-bold md-8 md:mb-16" style={{ fontFamily: 'Gowun Batang, serif' }}>Upcoming Events</h2>
        <div className=" gap-8">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((program) => (
              <div key={program.id} className="bg-black p-6 flex flex-col md:flex-row rounded-lg shadow-lg cursor-pointer mb-20" onClick={handleUpcomingEventClick}>
              <div className='w-full  md:w-1/2 p-4 md:p-12'>
                {/* <h1 className='text-6xl'>{program.id}</h1> */}
                <h1
                  className="text-6xl md:text-8xl  text-yellow-300 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300 ease-in-out transform  mt-[-65px] ml-[-50px]  md:mt-[-120px] md:ml-[-80px]"
                  style={{ textShadow: '0px 0px 15px rgba(253, 230, 138, 0.9)' }}
                >
                  {program.id}
                </h1>
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">{program.name}</h3>
                <hr className="w-11/12  border-t border-gray-400 opacity-40 mt-10 mb-10" />
                <p className="text-gray-300 mb-2">{program.description}</p>
                <hr className="w-11/12  border-t border-gray-400 opacity-40 mt-10 mb-10" />
                <p className="text-gray-500 text-sm">Date: {program.date}</p>
              </div>

              <img src={program.image} alt={program.name} className="w-full md:w-1/2 h-72 md:h-96 object-cover rounded-md mb-4" />
            </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No upcoming events at this time.</p>
          )}
        </div>
      </div>


      <div className="p-8 md:p-16 gap-8 mb-12 ">
        <h2 className="text-yellow-300 text-4xl text-center font-bold md-8 md:mb-16" style={{ fontFamily: 'Gowun Batang, serif' }}>Past Events</h2>
        <div className=" gap-8">
          {pastEvents.length > 0 ? (
            pastEvents.map((program) => (
              <div key={program.id} className="bg-black p-6 flex flex-col md:flex-row rounded-lg shadow-lg cursor-pointer mb-20" onClick={handleUpcomingEventClick}>
                <div className='w-full  md:w-1/2 p-4 md:p-12'>
                  {/* <h1 className='text-6xl'>{program.id}</h1> */}
                  <h1
                    className="text-6xl md:text-8xl  text-yellow-300 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300 ease-in-out transform  mt-[-65px] ml-[-50px]  md:mt-[-120px] md:ml-[-80px]"
                    style={{ textShadow: '0px 0px 15px rgba(253, 230, 138, 0.9)' }}
                  >
                    {program.id}
                  </h1>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">{program.name}</h3>
                  <hr className="w-11/12  border-t border-gray-400 opacity-40 mt-10 mb-10" />
                  <p className="text-gray-300 mb-2">{program.description}</p>
                  <hr className="w-11/12  border-t border-gray-400 opacity-40 mt-10 mb-10" />
                  <p className="text-gray-500 text-sm">Date: {program.date}</p>
                </div>

                <img src={program.image} alt={program.name} className="w-full md:w-1/2 h-72 md:h-96 object-cover rounded-md mb-4" />
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No upcoming events at this time.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;














