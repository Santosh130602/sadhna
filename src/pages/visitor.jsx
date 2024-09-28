import React from 'react';
import backgroundImage from "../assets/hero9.jpeg"; // Path to your background image

const Visitor = () => {
    // Placeholder data for visitors
    const visitors = [
        { name: 'John Doe', country: 'USA', visitDate: '2024-09-01' },
        { name: 'Jane Smith', country: 'UK', visitDate: '2024-09-15' },
        { name: 'Rahul Verma', country: 'India', visitDate: '2024-09-20' },
        // Add more visitors as needed
    ];

    return (
        <div className="relative">
            {/* Background Image Section */}
            <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative" style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
            >
                {/* Overlay for darkening effect */}
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <h1 className="text-yellow-300 text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
                    Visitor
                </h1>
            </div>

            {/* Visitor Details Section */}
            {/* <div className="bg-white py-10">
                <div className="bg-yellow-100 rounded-xl shadow-lg p-8 max-w-4xl mx-auto text-center relative z-10 overflow-y-auto" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <h2 className="text-3xl font-semibold mb-6">Visitor Information</h2>
                    <div className="text-gray-800 space-y-4 text-lg">
                        {visitors.map((visitor, index) => (
                            <div key={index} className="bg-white p-4 shadow-md rounded-md mb-4">
                                <p><strong>Name:</strong> {visitor.name}</p>
                                <p><strong>Country:</strong> {visitor.country}</p>
                                <p><strong>Visit Date:</strong> {visitor.visitDate}</p>
                            </div>
                        ))}
                    </div>

                    
                    <div className="bg-gray-800 text-yellow-300 py-4 mt-8 rounded-md">
                        <p className="italic text-lg">
                            कालॆ खलु समारम्भाः फलं बध्नन्ति नितरां:
                        </p>
                    </div>
                </div>
            </div> */}

<div className="bg-white py-10">
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">Visitor Information</h2>
          
          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {visitors.map((visitor, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{visitor.name}</h3>
                  <p className="text-gray-600 mb-1"><strong>Country:</strong> {visitor.country}</p>
                  <p className="text-gray-600"><strong>Visit Date:</strong> {visitor.visitDate}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Banner */}
          <div className="bg-gray-800 text-yellow-300 py-4 mt-8 rounded-md text-center">
            <p className="italic text-lg">
              कालॆ खलु समारम्भाः फलं बध्नन्ति नितरां:
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Visitor;
