
import React from 'react';
import backgroundImage from "../assets/hero9.jpeg";
import { useNavigate } from 'react-router-dom';
import { IoArrowForwardOutline } from "react-icons/io5";

const VayamProgram = () => {
  const navigate = useNavigate();

  const programs = [
    {
      title: 'सोच-SOCH',
      description: 'Spiritual Orientation for good Community Health/ सुंदर सामाजिक जीवन के लिए आध्यात्मिक तैयारी',
      points: ['योग', 'आयुर्वेद', 'स्वाध्याय'],
      route: '/events-soch',
    },
    {
      title: 'भाव-BHAV',
      description: 'Balancing Human behavior and Adopting Vision document/ दृष्टिकोण पत्र के साथ अनुकूलन हेतु मानव व्यवहार का संतुलन',
      points: ['कला', 'साहित्य', 'संगीत', 'यात्रा'],
      route: '/events-bhav',
    },
    {
      title: 'ज्ञान-GYAN',
      description: 'Growing belongingness amongst Youth And Nurturing joyful life/ युवाओं में अपनत्व का विकास और आनंद पूर्ण जीवन की प्रेरणा',
      points: ['मानविकी सेवा', 'धार्मिक सेवा का विकास', 'प्राकृतिक जीवन शैली'],
      route: '/events-gyan',
    },
    {
      title: 'तर्क-TARK',
      description: 'Training for Adopting the Religious Knowledge/ धार्मिक ज्ञान के साथ अनुकूलन हेतु प्रशिक्षण',
      points: ['धर्म और विज्ञान की सुगमता', 'धर्म और दैनिक जीवन पढ़ाई', 'धार्मिक जीवन के लक्षण'],
      route: '/events-tark',
    },
    {
      title: 'मित्र-MITR',
      description: 'Mental Integration for Transformation of Relationship/ सामाजिक संबंधों के संचयन का मानसिक संयोजन',
      points: ['मनोवैज्ञानिक शोध', 'करियर कार्यशालाएँ', 'मोटिवेशन'],
      route: '/events-mitr',
    },
    {
      title: 'सत्य-SATY',
      description: 'Sanatan values And Teachings for Youth/ युवाओं के लिए सनातन की शिक्षा और जीवन मूल्य',
      points: ['सनातन जीवन के विभिन्न स्तर और उनके आयाम'],
      route: '/events-saty',
    },
  ];



  const handleRegisterClick = () => {
    const token = localStorage.getItem('token'); // Replace with your auth token check
    if (token) {
      // If logged in, navigate to the Vayam form
      navigate('/vayam-form');
    } else {
      // If not logged in, navigate to the login page
      navigate('/login');
    }
  };

  return (
    <div className="relative ">
      <div
        className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative inset-0 -z-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <h1
          className="text-yellow-300 text-6xl font-thin relative z-10"
          style={{ fontFamily: 'Gowun Batang, serif' }}
        >
          Vayam Yatharup
        </h1>
      </div>

      <div className="bg-neutral-900 mx-auto p-24" style={{ fontFamily: 'Eczar, serif' }}>
        <div className="md:w-1/2 mx-auto text-left mb-16 text-center" >
          <h2 className="text-5xl text-yellow-300 font-bold mb-6" >"वयम्" यथारूप</h2>

          <p className="text-lg text-orange-50 leading-relaxed">
            अवधारणा के रूप में वयम्..हमारे सह अस्तित्व का प्रमाण है. <br />
            कार्यक्रम के रूप में वयम्..  भाव जागरण का अभियान है. <br />
            आयोजन के रूप में वयम्.. भारत के संगठित मन का उत्सव है.<br />
            परियोजना के रूप में वयम्...सनातन धर्म की प्रतिष्ठा का आंदोलन है.<br />
            उद्देश्य के रूप में वयम्..सांस्कृतिक उत्थान का प्रकल्प है.<br />
            मान्यता के रूप में वयम्..अमंत्रं अक्षरं नास्ति, नास्ति मूल वनौषधम.. का साधक है.<br />
            लक्ष्य के रूप में वयम्..सर्वे भवंतु सुखिन: का पुजारी है.<br />
            कार्य- योजना के रूप में वयम्.. संगच्छध्वम संवदध्वम.. का उपासक है.<br />
            आदर्श के रूप में वयम्..एक बने हम,नेक बने हम का उद्घोष ह<br />
          </p>
        </div>

        {/* <div className="mt-16">
          <h2 className="text-4xl font-bold text-lime-400 text-center mb-12">"वयम्" के कार्यक्रम</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl text-lime-300 font-semibold mb-4">{program.title}</h3>
                <p className="text-orange-100 mb-4">{program.description}</p>
                <ul className="list-disc  flex gap-8 pl-5 text-orange-50">
                  {program.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(program.route)} // Add onClick to navigate
            >
              <h3 className="text-2xl text-lime-300 font-semibold mb-4">{program.title}</h3>
              <p className="text-orange-100 mb-4">{program.description}</p>
              <ul className="list-disc flex gap-8 pl-5 text-orange-50">
                {program.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className="flex justify-center mt-20">
          <button
            onClick={handleRegisterClick}
            className="flex items-center gap-4 bg-red-500 rounded text-white font-semibold py-2 px-8 
                      hover:bg-red-600 hover:scale-105 transition-transform duration-300" style={{ fontFamily: 'Gowun Batang, serif' }}
          >
            REGISTER <IoArrowForwardOutline className="font-semibold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VayamProgram;





// import React from 'react';
// import pdfFile from "../assets/SadhnaShriBrouchure.pdf"; // Ensure correct path

// const InternshipProgram = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       <div className="w-full max-w-5xl">
//         <h1 className="text-4xl font-bold text-center my-8">Internship Program</h1>
//         <iframe 
//           src={pdfFile} 
//           className="w-full h-screen border-2 border-gray-300" 
//           title="Sadhna Shri Internship Program"
//         />
//       </div>
//     </div>
//   );
// };

// export default InternshipProgram;
