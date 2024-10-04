
import React from 'react';
import backgroundImage from "../assets/hero9.jpeg";
import { useNavigate } from 'react-router-dom';
import { IoArrowForwardOutline } from "react-icons/io5";

const InternshipProgram = () => {
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

  // const handleRegisterClick = () => {
  //   navigate('/internship-form');
  // };


  const handleRegisterClick = () => {
    const token = localStorage.getItem('token'); // Replace with your auth token check
    if (token) {
      // If logged in, navigate to the Vayam form
      navigate('/internship-form');
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
          Internship Program
        </h1>
      </div>

      <div className="bg-yellow-100 py-10">
        <div className="bg-neutral-900 shadow-lg p-8 max-w-4xl rounded-xl mx-auto text-center " style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <div className=" space-y-6 text-lg">
            <h1 className="text-yellow-400 text-4xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
              Internship Program
            </h1>

            <div style={{ fontFamily: 'Gowun Batang, serif' }}>
              <div className='text-left'>
                <p className='text-orange-200 font-bold text-2xl'></p>
                <p className='text-orange-50'>आगामी महाकुंभ-2025 प्रयागराज में साधनाश्री कुटुंब द्वारा आयोजित होने वाले कार्यक्रम 'वयम्' की सफलता में सहयोगी बनाने के लिए साधनाश्री कुटुंब अपने 'इंटर्नशिप प्रोग्राम' में आप सभी को आमंत्रित करते हुए उत्साहित है। आप हमारे साथ नीचे दिए गए इंटर्नशिप कार्यक्रमों में से किसी एक के साथ जुड़कर साधनाश्री कुटुंब का हिस्सा बन सकते हैं।</p>
              </div>

              <div className='text-left text-orange-50'>
                <p className='text-orange-200 font-bold text-2xl'></p>
                <ul className='list-disc mt-3 list-inside'>
                  <li>वयम वॉलन्टियर</li>
                  <li>मॉनिटरिंग</li>
                  <li>योग वॉलंटियर</li>
                  <li>योग इस्ट्रक्टर</li>
                  <li>आयुर्वेद इंस्ट्रक्टर</li>
                </ul>
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

        

        </div>
      </div>
    </div>
  );
};

export default InternshipProgram;



