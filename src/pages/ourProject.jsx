
import React from 'react';
import backgroundImage from "../assets/hero9.jpeg"; // Use the same background image

const OurProject = () => {
  return (
    <div className="relative">

      <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative" style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >

        <div className="absolute inset-0 bg-black opacity-80"></div>
        <h1 className="text-yellow-300 text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
          Our Projects
        </h1>
      </div>

      {/* Main Content Section */}
      {/* <div className="bg-white py-10">
        <div className=" shadow-lg p-8 max-w-4xl mx-auto text-center " style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <div className="text-gray-800 space-y-6 text-lg">
            <h1 className="text-red-600 text-6xl font-thin relative z-10">
          Page Not Found
        </h1>
            <p>
              Please check the URL or return to the <a href="/" className="text-blue-500 underline">homepage</a>.
            </p>
          </div>

          
          
        </div>
      </div> */}

<div className="bg-white py-10">
  <div className="shadow-lg p-8 max-w-4xl mx-auto text-center" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
    <div className="text-gray-800 space-y-6 text-lg">

      <h1 className="text-red-600 text-6xl font-thin relative z-10">
      गुरूकुल Gurukul

      </h1> 
      <p>
        Gurukul represents the ancient form of education where learning is imparted under the guidance of a guru. 
        It emphasizes discipline, respect, and spiritual growth, providing a holistic development for students.
      </p>

      <h1 className="text-red-600 text-6xl font-thin relative z-10">
        गोकुल Gokul
      </h1>
      <p>
        Gokul is the land of love and devotion, where Lord Krishna spent his childhood. It signifies harmony, 
        joy, and a way of life that centers around compassion and community.
      </p>

      <h1 className="text-red-600 text-6xl font-thin relative z-10">
        देवकुल Devkul
      </h1>
      <p>
        Devkul embodies divinity and wisdom, representing the highest pursuit of knowledge and enlightenment. 
        It is a place where spiritual and intellectual growth is achieved through divine teachings.
      </p>

    </div>
  </div>
</div>


    </div>
  );
};

export default OurProject;

