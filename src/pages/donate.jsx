

import React from 'react';

import backgroundImage from "../assets/yoga.png";

import { useNavigate } from 'react-router-dom';
// import { GoArrowRight } from "react-icons/go";
import { IoArrowForwardOutline } from "react-icons/io5";


const Donate = () => {


  const navigate = useNavigate();


  const programs = [
    {
      title: 'सोच-SOCH',
      description: 'Spiritual Orientation for good Community Health/ सुंदर सामाजिक जीवन के लिए आध्यात्मिक तैयारी',
      points: ['योग', 'आयुर्वेद', 'स्वाध्याय'],
    },
    {
      title: 'भाव-BHAV',
      description: 'Balancing Human behavior and Adopting Vision document/ दृष्टिकोण पत्र के साथ अनुकूलन हेतु मानव व्यवहार का संतुलन',
      points: ['कला', 'साहित्य', 'संगीत', 'यात्रा'],
    },
    {
      title: 'ज्ञान-GYAN',
      description: 'Growing belongingness amongst Youth And Nurturing joyful life/ युवाओं में अपनत्व का विकास और आनंद पूर्ण जीवन की प्रेरणा',
      points: ['मानविकी सेवा', 'धार्मिक सेवा का विकास', 'प्राकृतिक जीवन शैली'],
    },
    {
      title: 'तर्क-TARK',
      description: 'Training for Adopting the Religious Knowledge/ धार्मिक ज्ञान के साथ अनुकूलन हेतु प्रशिक्षण',
      points: ['धर्म और विज्ञान की सुगमता', 'धर्म और दैनिक जीवन पढ़ाई', 'धार्मिक जीवन के लक्षण'],
    },
    {
      title: 'मित्र-MITR',
      description: 'Mental Integration for Transformation of Relationship/ सामाजिक संबंधों के संचयन का मानसिक संयोजन',
      points: ['मनोवैज्ञानिक शोध', 'करियर कार्यशालाएँ', 'मोटिवेशन'],
    },
    {
      title: 'सत्य-SATY',
      description: 'Sanatan values And Teachings for Youth/ युवाओं के लिए सनातन की शिक्षा और जीवन मूल्य',
      points: ['सनातन जीवन के विभिन्न स्तर और उनके आयाम'],
    },
  ];



  const isLoggedIn = () => {
    return !!localStorage.getItem('token');  // Assuming token is stored in localStorage
  };

  // const handleRegisterClick = () => {
  //   if (isLoggedIn()) {
  //     navigate('/payment');  // Redirect to the payment/registration page
  //   } else {
  //     navigate('/login');  // Redirect to the login page if not logged in
  //   }
  // };
  const handleRegisterClick = () => {
      navigate('/payment');  // Redirect to the payment/registration page
    
  };

  return (
    <div className="bg-gradient-to-r from-red-300 via-yellow-200 to-orange-300 py-10">
      {/* Main Heading */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold">वयम्</h1>
        <p className="text-lg mt-2">Vision accord of youth for advancing mankind.</p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-5xl font-bold mb-6">"वयम्" यथारूप</h2>
          <p className="text-lg mb-4 leading-relaxed">
            'अहं' का विलोम नहीं विस्तार है वयम्।<br />
            'अहम् ब्रह्मास्मि' से 'तत् त्वमसि' की यात्रा है वयम्।<br />
            दैवी शक्तियों का सार है वयम्।<br />
            सज्जन वृत्तियों की पुकार है वयम्।<br />
            शुभ संकल्पों का आधार है वयम्।<br />
            मानवता का उद्धार है वयम्।<br />
            सुग्रीव और विभीषण का राम है वयम्।<br />
            सीता का वरदान है वयम्।<br />
            भारत का सामूहिक गान है वयम्।<br />
            भविष्य का उनवान है वयम्।<br />
            कल आज और बिहान है वयम्।<br />
            जय- जवान, जय- किसान है वयम्।<br />
            जय- धर्म, जय- विज्ञान है वयम्।<br />
            सनातन का उत्थान है वयम्।<br />
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src={backgroundImage} alt="Meditating Figure" className="w-3/4 md:w-1/2" />
        </div>
      </div>

      {/* Programs Section */}
      <div className="mt-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">"वयम्" के कार्यक्रम</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
              <p className="text-gray-700 mb-4">{program.description}</p>
              <ul className="flex gap-10 list-disc pl-5 text-gray-700">
                {program.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>



    



<div className="flex justify-center mt-20">
  <button
    onClick={handleRegisterClick}
    className="flex items-center gap-4 bg-red-500 rounded text-white font-semibold py-2 px-8 
               hover:bg-red-600 hover:scale-105 transition-transform duration-300"
  >
    REGISTER <IoArrowForwardOutline className="font-semibold" />
  </button>
</div>


    </div>
  );
};

export default Donate;
