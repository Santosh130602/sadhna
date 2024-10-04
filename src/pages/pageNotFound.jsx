
import React from 'react';
import backgroundImage from "../assets/hero9.jpeg"; // Use the same background image

const PageNotFound = () => {
  return (
    <div className="relative">

      <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative inset-0 -z-10" style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >

        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* <h1 className="text-white text-6xl font-thin relative z-10">
          Page Not Found
        </h1> */}
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-10">
        <div className=" shadow-lg p-8 max-w-4xl mx-auto text-center " style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <div className="text-gray-800 space-y-6 text-lg">
            <h1 className="text-red-600 text-6xl font-thin relative z-10">
          Page Not Found
        </h1>
            <p>
              Please check the URL or return to the <a href="/" className="text-blue-500 underline">homepage</a>.
            </p>
          </div>

          {/* Footer Banner */}
          
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;


