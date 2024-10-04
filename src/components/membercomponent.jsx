

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import member1 from '../assets/member.png';
import member2 from '../assets/member5.png';
import member3 from '../assets/member6.png';
import member4 from '../assets/member7.png';

const members = [
  {
    id: 1,
    name: 'शिवम भूषण',
    position: 'प्रमुख',
    image: member4,
  },
  {
    id: 2,
    name: 'अरविंद कुमार पांडेय',
    position: 'संयोजक',
    image: member3,
  },
  {
    id: 3,
    name: 'आचार्य रामबाबू पांडेय',
    position: 'प्रमुख मार्गदर्शक',
    image: member2,
  },
  {
    id: 4,
    name: 'प्रेम भूषण जी महाराज',
    position: 'प्रमुख संरक्षक',
    image: member1,
  }
  
  
  
  // Add more members as needed
];

const MemberComponent = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleMemberClick = (id) => {
    navigate(`/member`); // Navigate to /members/{id} route
  };

  return (
    <div className="w-10/12 mx-auto py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold underline decoration-1 underline-offset-4"  style={{ fontFamily: 'Gowun Batang, serif' }}>Messages</h1>
      </div>

      {/* Member Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8"> */}
        {members.map((member) => (
          <div
            key={member.id}
            className="block bg-white shadow-lg rounded-lg p-4 text-center cursor-pointer"
            onClick={() => handleMemberClick(member.id)} // Call handleMemberClick on click
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberComponent;
