

// import React from 'react';
// import backgroundImage from "../assets/hero9.jpeg"; // Path to your background image

// const About = () => {
//   return (
//     <div className="relative">
//       {/* Background Image Section */}
//       <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative" style={{
//           backgroundImage: `url(${backgroundImage})`,
//         }}
//       >
//         {/* Overlay for darkening effect */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <h1 className="text-white text-6xl font-thin relative z-10">About</h1>
//       </div>

//       {/* Main Content Section */}
//       <div className="bg-white py-10">
//         <div className="bg-yellow-100 rounded-xl shadow-lg p-8 max-w-4xl mx-auto text-center relative z-10 overflow-y-auto" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
//           <div className="text-gray-800 space-y-6 text-lg">
//             <p>
//               साधनाश्री कुण्डम्ब की स्थापना शिक्षा, संस्कृति, धर्म और राष्ट्र की समृद्धि और चतुर्विध उन्नति के लिए हुआ है। इस न्यास की स्थापना भगवद्पाद शिव अवतार आदिशंकराचार्य भगवान के पावन प्राकट्य दिवस, वैशाख शुक्ल पंचमी, विक्रम संवत 2077 (तदनुसार 28 अप्रैल 2020) के पावन पर्व पर हुई है। साधनाश्री का उद्देश्य स्वच्छ, सुंदर, स्वस्थ, समृद्ध, संस्कारी, सदाचार संपन्न शिक्षित शीलयुक्त समाज का निर्माण करना है.
//             </p>
//             <p>
//               भारत और भारतीयता के पुनर्जागरण के लिए साधनश्री प्रतिबद्ध है। साधनश्री वैदिक ज्ञान - विज्ञान के प्रचार-प्रसार के लिए सनातन मूल्यों पर आधुनिकता युक्त गुरुकुलों का संचालन, धर्म और ब्रह्म की होत्तक, देवताओं की भी देवता गोवंश का पालन और संरक्षण के लिए गौशाला का निर्माण और संचालन, वैदिक ज्ञान परंपरा के महान तथ्यों से परिचय कराने के लिए विभिन्न स्तरों पर व्याख्यान माला का आयोजन करने में दृढ़ संकल्पित होकर संलग्न है.
//             </p>
//           </div>

//           {/* Footer Banner */}
//           <div className="bg-gray-800 text-yellow-300 py-4 mt-8 rounded-md">
//             <p className="italic text-lg">
//               कालॆ खलु समारम्भाः फलं बध्नन्ति नितरां:
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



import React from 'react';
import backgroundImage from "../assets/hero9.jpeg"; // Path to your background image

const About = () => {
  return (
    <div className="relative">
      {/* Background Image Section */}
      <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative" style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay for darkening effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-white text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
          About
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-10">
        <div className="bg-yellow-100 rounded-xl shadow-lg p-8 max-w-4xl mx-auto text-center relative z-10 overflow-y-auto" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <div className="text-gray-800 space-y-6 text-lg">
            <p>
              साधनाश्री कुण्डम्ब की स्थापना शिक्षा, संस्कृति, धर्म और राष्ट्र की समृद्धि और चतुर्विध उन्नति के लिए हुआ है। इस न्यास की स्थापना भगवद्पाद शिव अवतार आदिशंकराचार्य भगवान के पावन प्राकट्य दिवस, वैशाख शुक्ल पंचमी, विक्रम संवत 2077 (तदनुसार 28 अप्रैल 2020) के पावन पर्व पर हुई है। साधनाश्री का उद्देश्य स्वच्छ, सुंदर, स्वस्थ, समृद्ध, संस्कारी, सदाचार संपन्न शिक्षित शीलयुक्त समाज का निर्माण करना है.
            </p>
            <p>
              भारत और भारतीयता के पुनर्जागरण के लिए साधनश्री प्रतिबद्ध है। साधनश्री वैदिक ज्ञान - विज्ञान के प्रचार-प्रसार के लिए सनातन मूल्यों पर आधुनिकता युक्त गुरुकुलों का संचालन, धर्म और ब्रह्म की होत्तक, देवताओं की भी देवता गोवंश का पालन और संरक्षण के लिए गौशाला का निर्माण और संचालन, वैदिक ज्ञान परंपरा के महान तथ्यों से परिचय कराने के लिए विभिन्न स्तरों पर व्याख्यान माला का आयोजन करने में दृढ़ संकल्पित होकर संलग्न है.
            </p>
          </div>

          {/* Footer Banner */}
          <div className="bg-gray-800 text-yellow-300 py-4 mt-8 rounded-md">
            <p className="italic text-lg">
              कालॆ खलु समारम्भाः फलं बध्नन्ति नितरां:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
