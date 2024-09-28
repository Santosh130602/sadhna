
import React from 'react';
import backgroundImage from "../assets/hero9.jpeg"; // Use the same background image

const LegalAdvisor = () => {
  return (
    <div className="relative">

      <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative" style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      >

        <div className="absolute inset-0 bg-black opacity-80"></div>
        <h1 className="text-yellow-300 text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
          SUPRA LEGALS
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-10">
        <div className=" shadow-lg p-8 max-w-4xl mx-auto text-center " style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <div className="text-gray-800 space-y-6 text-lg">
            <h1 className="text-black text-4xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
              SUPRA LEGALS
            </h1>

            <div style={{ fontFamily: 'Gowun Batang, serif' }}>
              <div className='text-left'>
                <p className='text-red-500 font-bold text-2xl'>Address:</p>
                <p>618/256A/1 Sector no. 7 Jhulelal Nagar Lukerganj Prayagraj Near SBI Bank.</p>
              </div>
              <div className='text-left'>
                <p className='text-red-500 font-bold text-2xl'>Phone:</p>
                <p>9415769175, 9264989498</p>
              </div>

            </div>
          </div>

          {/* Footer Banner */}

        </div>
      </div>
    </div>
  );
};

export default LegalAdvisor;

