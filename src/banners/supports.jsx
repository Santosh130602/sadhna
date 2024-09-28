
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import bgimg from "../assets/hero1.png"; // Import your background image
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/upcomming-event'); // Redirect to the register route
  };

  return (
    <div
      className="support relative bg-cover bg-center h-[50rem]"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundAttachment: 'fixed', // Keep the background fixed
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="container mx-auto text-center text-white p-6 mt-64 mb-64">
          <h2 className="text-4xl font-bold mb-16" style={{ fontFamily: 'Gowun Batang, serif' }}>
            <span className="text-yellow-500">SUPPORT</span> SADHANASHRI KUTUMB
          </h2>
          <p className="mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            At Sadhanashri Kutumb, we are committed to driving positive change as an independent nonprofit think tank. Our organization thrives on the support and contributions from individuals and organizations that share our vision for a better future.
            <br /><br />
            We uphold the highest standards of transparency and accountability. Our operations are subject to regular audits conducted by trusted Chartered Accountants and skilled professionals, ensuring that our activities are carried out with integrity and diligence.
            <br /><br />
            Our conferences are open to all at no cost, allowing participants to engage freely in enriching discussions. Additionally, we provide open access to our research papers, fostering a culture of knowledge sharing.
            <br /><br />
            To sustain our impactful initiatives, we primarily depend on sponsorship and the goodwill of our supporters. Your contributions are vital in helping us continue our mission.
            <br /><br />
            We invite you to join us in this journey and would love to hear from you! Reach out to us at <strong>support@sadhnashri.org</strong>
          </p>
          <button onClick={handleClick} className="inline-block bg-yellow-500 text-black py-2 px-4 rounded transition hover:bg-yellow-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;

