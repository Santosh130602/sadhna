




import React, { useState } from 'react';
import backgroundImage from "../assets/hero9.jpeg"; // Path to your background image
import visitor1 from "../assets/ramnaik.jpg"
import visitor2 from "../assets/praduman.jpeg"
import visitor3 from "../assets/gctrip.jpeg"
import visitor4 from "../assets/manmo.jpeg"
import visitor5 from "../assets/rntrip.jpeg"
import visitor6 from "../assets/nandi.jpeg"
import visitor7 from "../assets/sarasw.jpeg"
import visitor8 from "../assets/Anand.jpeg"
import visitor9 from "../assets/govind.jpeg"
import visitor10 from "../assets/balkrish.jpeg"
import visitor11 from "../assets/berii.jpeg"
import visitor12 from "../assets/madan.jpeg"
import visitor13 from "../assets/shrik.jpeg"
import visitor14 from "../assets/ganesh.jpeg"
import visitor15 from "../assets/swami.jpeg"
import visitor16 from "../assets/nape.jpeg"
import bg from "../assets/bg10.png"

import member4 from '../assets/member7.png';

const visitors = [
  {
    id: 1,
    name: 'पूज्यश्रीशंकराचार्य स्वामी अविमुक्तेश्वरानंद सरस्वती जी महाभाग',
    position: 'शंकराचार्य- ज्योतिष पीठाधीश्वर,जोशीमठ,उत्तराखंड',
    image: visitor15,
    message: 'साधनाश्री कुटुम्ब की विस्तृत योजना  समाजोत्थान में संलग्न रहें ! बस इस बात का ध्यान रहें वेद बिना मति नहीं, गाय बिना गति नहीं',
  },
  {
    id: 2,
    name: 'गणेश चंद्र केसरवानी',
    position: 'मा.महापौर-प्रयागराज',
    image: visitor14,
    message: 'माघ मेला क्षेत्र में साधनाश्री कुटुम्ब द्वारा आयोजित होने वाले स्वानुभूति शिविर में हमारे उत्थान का मूल भारतीय ज्ञान परंपरा का साक्षात दर्शन करने को मिला ! मां त्रिवेणी सें प्रार्थना हैं ऐसे युगॠषि भाई भूषण जी पर अपनी कृपा बनाए रखें !',
  },
  {
    id: 3,
    name: 'प्रोफ. गिरीशचंद्र त्रिपाठी जी',
    position: 'पूर्व कुलपति-बी.एच.यू,पूर्व अध्यक्ष-उत्तर प्रदेश उच्च शिक्षा परिषद,उत्तर प्रदेश सरकार',
    image: visitor3,
    message: 'मुझे बहुत आश्चर्य होता है कि आज इस आधुनिक दौर में इस प्रकार से विस्तृत चिन्तन करने वाला युवा मेरे निकट सम्पर्क में है। मैं शिवम भूषण जी द्वारा स्थापित साधनाश्री कुटुम्ब के सभी प्रकल्पों की सराहना करता हूँ एवं इसकी धरातलीय सफलता के लिए ईश्वर से कामना करता हूँ।',
  },
  {
    id: 4,
    name: 'प्रोफ. आर.एन. त्रिपाठी जी',
    position: 'सदस्य - उत्तर प्रदेश लोकसेवा आयोग',
    image: visitor5,
    message: 'परमपूज्य स्वामी विवेकानन्द जी ने नर सेवा नारायण का जो मंत्र दिया है उसे आदरणीय सभी साधनाश्री कुटुम्ब के महानुभावों द्वारा प्रत्यक्ष रूप में सार्थक किया जा रहा है। इस यशस्वी कार्य को जिस प्रकार आप कर रहे हैं, ईश्वर सदैव आपके साथ रहे यही प्रार्थना है।',
  },
  {
    id: 5,
    name: 'स्वामी जितेंद्रानन्द सरस्वती जी महाराज',
    position: 'राष्ट्रीय महामंत्री - गंगा महासभा,काशी',
    image: visitor7,
    message: 'सर्वप्रथम साधनाश्री कुटुम्ब के संस्थापक श्री शिवम भूषण जी एवं इनके कार्यकर्ताओं को बहुत-बहुत आर्शीवाद मुझे बहुत अच्छा लगा कि इक्कीसवीं सदी की युवा पीढ़ी भी देश व संस्कृति के प्रति बहुत सजक व सतर्क है। वर्तमान समय में भारतीय संस्कारों एवं धर्म-शास्त्र-वेद विज्ञान प्रचार की महती आवश्यकता है। इस अभियान के द्वारा प्रशिक्षित सभी महानुभाव राष्ट्र की महान सेवा करेंगे,ऐसा मेरा विश्वास है।',
  },
  {
    id: 6,
    name: 'श्रद्धेय मिथिलेशनन्दिनीशरण जी महाराज',
    position: 'पीठाधीश्वर - श्रीलक्ष्मण किला,अयोध्या',
    image: visitor6,
    message: 'आज बहुत बड़ी जरूरत आन पड़ी है कि समाज में अच्छे और सच्चे धर्म उपदेशक हों प्रभु कृपा से कुछेक ऐसे धर्मोपदेशक इन दिनों समाज में हैं, जिनकी प्रखरता एवं विद्वता का लोहा न केवल आज आम जन बल्कि धर्म क्षेत्र के लोग भी मानने लगे हैं। साधनाश्री कुटुम्ब जिस प्रकार से गुरूकुल अभियान के तहत भारी संख्या में भारतीय संस्कृति के प्रति युवाओं को जागृत व प्रणम्य प्रयास कर रहा है। यह अतीव हर्ष का विषय है। मैं इसके संस्थापक एवं इससे जुड़े सभी कार्यकर्ताओं को बहुत-बहुत शुभाशीष एवं मंगल कामना करता हूं।',
  },
  {
    id: 7,
    name: 'प्रद्युम्न कुमार',
    position: 'माननीय राष्ट्रीय संगठक - भाजपा, नई दिल्ली',
    image: visitor2,
    message: 'सर्वप्रथम साधनाश्री कुटुम्ब युगप्रवर्तक उदघोष साबित हो, इसकी बहुत सारी शुभकामनाएं। साधनाश्री कुटुम्ब आचार्य शंकर के जीवनदर्शन पर चलने वाला, भारतीय ज्ञान परम्परा पर कार्य करने वाला संगठन है, जिससे भारत और भारतीयता को बल मिलेगा।',
  },
  {
    id: 8,
    name: 'श्री नृपेंद्र मिश्र जी',
    position: 'पूर्व प्रमुख सचिव - भारत सरकार',
    image: visitor16,
    message: 'प्रभु श्रीराम मंदिर निर्माण की व्यस्तता में वक्त निकाल कर कहीं आना जाना कठिन हैं परंतु वर्चुअल माध्यम सें भारतीय ज्ञान परम्परा संगोष्ठी का आयोजन साधनाश्री कुटुम्ब की बहुत सुन्दर पहल हैं ! विद्वानों का संगम व युवा मन के विचारों को सुनकर बहुत आनंदित हुआ ! विशेष आभार श्री शिवम भूषण जी।',
  },
  {
    id: 9,
    name: 'श्रद्धेय मुकेश आनन्द जी महाराज',
    position: 'कथावाचक - वृंदावन',
    image: visitor8,
    message: 'युगदृष्टा रूपी साधनाश्री कुटुम्ब वटवृक्ष द्वारा गुरुकुल अभियान से भारतीय संस्कृति के धर्म पोषक तैयार करने का संकल्प वर्तमान कम्प्यूटर युग में गीता उपनिषद के श्रेष्ठ आध्यात्मिक विद्वान इस महान राष्ट्र को प्रचुर मात्रा में प्रदान करने के लिए साधनाश्री कुटुम्ब को मेरी बहुत-बहुत शुभकामनाएँ।',
  },
  {
    id: 10,
    name: 'श्रद्धेय गोविंददेव गिरी जी महाराज',
    position: 'कोषाध्यक्ष - श्रीराम जन्मभूमि तीर्थक्षेत्र,पुणे,महाराष्ट्र',
    image: visitor9,
    message: 'यह जानकर हमें अत्यन्त हर्ष हो रहा है कि साधनाश्री कुटुम्ब द्वारा गुरुकुल अभियान व गोकुल अभियान जैसे महत्वपूर्ण आस्तिक जगत का महान उपकार करने जैसा कार्य किया जा रहा है। इस पवित्र संकल्प को हार्दिक बधाई व अभिनन्दन',
  },
  {
    id: 11,
    name: 'श्री मदन कौशिक जी',
    position: 'मा• कैबिनेट मंत्री,उत्तराखंड सरकार',
    image: visitor12,
    message: 'श्री शिवम भूषण जी द्वारा संचालित साधनाश्री कुटुम्ब वास्तव में समाज के युवा पीढ़ी को संस्कारी बनाने के लिए व उनके मूल्यों को अस्तित्ववान करने के लिए एक बहुत सुन्दर पहल है । मैं साधनाश्री कुटुम्ब के पवित्र कार्य को यथोचित आजीवन सहयोग करता रहूँगा।',
  },







  {
    id: 12,
    name: 'राम नाईक',
    position: 'माननीय राज्यपाल उत्तर प्रदेश सन-2014-19',
    image: visitor1,
    message: 'अत्यन्त हर्षित हो उठता हूँ जब कोई युवा सांस्कृतिक मूल्यों के लिए स्वयं को खपाता है। आज की आधुनिकता भरे दौर में, श्री शिवम भूषण कर्वाधती साधनाश्री कुटुम्ब आपको शुभकामना ही नहीं, अपितु सहयोग भी सदैव बना रहेगा। आपने इस देव कार्य को मेरे साथ साझा किया, इसके लिए आपका विशेष आभार।',
  },
  
  
  {
    id: 13,
    name: 'डॉ. मनमोहन वैद्य ',
    position: 'मा.सह सरकार्यवाह - राष्ट्रीय स्वयंसेवक संघ',
    image: visitor4,
    message: 'संघ के स्वयंसेवक सदैव राष्ट्र व समाज के प्रति सजग रहते हैं। मैं शिवम भूषण जी द्वारा स्थापित साधनाश्री कुटुम्ब जो कि अध्यात्मक प्रेरित स्वैच्छिक सेवा संस्थान है, को उत्कृष्ट कार्य करने हेतु बहुत-बहुत शुभेच्छु प्रेषित करता हूँ।',
  },
  
  {
    id: 14,
    name: 'आचार्य बालकृष्ण जी',
    position: 'अध्यक्ष - पतंजलि योगपीठ,हरिद्वार,उत्तराखंड',
    image: visitor10,
    message: 'मुझे बहुत प्रसन्नता हुई कि मेरे अलावा भी इस 21वीं सदी में वेद-विज्ञान तथा भारतीय संस्कृति का प्रकाश जन-जन तक पहुंचाने व देश का मान एवं गौरव बढ़ाने का काम साधनाश्री कुटुम्ब द्वारा हो रहा है। मेरी ओर से बहुत सारा शुभाशीष।',
  },
  {
    id: 15,
    name: 'श्री अशोक बेरी जी',
    position: 'सदस्य - राष्ट्रीय कार्यकारिणी,राष्ट्रीय स्वयंसेवक संघ',
    image: visitor11,
    message: 'साधनाश्री कुटुम्ब वैश्विक महामारी कोविड-19 के दौरान जिस प्रकार से  अपने ध्येय के अलावा सेवा के क्षेत्र में भी अपनी भूमिका तय करी है, इससे मैं बहुत प्रभावित हूँ। मैं साधनाश्री कुटुम्ब एवं इससे जुड़े सभी सदस्य व कार्यकर्ताओं को अनेकानेक मंगलकामना व अभिनन्दन करता हूं।',
  },
  
  {
    id: 16,
    name: 'श्री श्रीकांत शर्मा जी',
    position: ' मा.ऊर्जा मंत्री,उत्तर प्रदेश सरकार',
    image: visitor13,
    message: 'आधुनिक ऋषि के रूप में साधनाश्री कुटुम्ब की योजना के दौरान श्री भूषण जी मुझसे मिले और योजना की विस्तृत चर्चा कर मुझे बहुत प्रभावित किया। कुटुम्ब द्वारा आयोजित वर्चुअल संगोष्ठी में मुख्य अतिथि के रूप में शामिल हुआ और देखा कि आज भी हमारी युवा पीढ़ी समाज व संस्कृति के प्रति बहुत सजग है। इस योजना वृत्त को मेरी ओर से बहुत सारी शुभकामनाएँ।',
  },
  
  
  
];

const Visitor = () => {
  const [expandedMessages, setExpandedMessages] = useState({});

  const toggleMessage = (id) => {
    setExpandedMessages((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const getFirst20Words = (message) => {
    const words = message.split(' ');
    return words.length > 20
      ? words.slice(0, 20).join(' ') + '...'
      : message;
  };

  return (
    <div className="relative">
      {/* Background Section */}
      <div
        className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative inset-0 -z-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <h1 className="text-yellow-300 text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
          Visitor / Messages
        </h1>
      </div>

      {/* Visitors Section */}
      <div className="bg-yellow-100 p-8 mx-auto py-10" style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        // opacity:'0.8'
      }}>
        <div className="flex flex-col gap-8">
          {visitors.map((visitor) => {
            const isExpanded = expandedMessages[visitor.id];
            const messageToDisplay = isExpanded
              ? visitor.message
              : getFirst20Words(visitor.message);

            return (
              <div key={visitor.id} className="bg-neutral-900 shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
                {/* Visitor Image */}
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <img
                    src={visitor.image}
                    alt={visitor.name}
                    className="w-48 h-48  object-cover mx-auto"
                  />
                </div>

                {/* Visitor Details */}
                <div className="w-full md:w-3/4 flex flex-col ml-0 md:ml-8">
                  
                  <div className="flex flex-col md:flex-row items-baseline">
                    <h3 className="text-2xl text-yellow-400 font-semibold text-center md:text-left">
                      {visitor.name}
                    </h3>
                    <p className="text-orange-200 mb-2 text-center md:text-left ml-2">
                      ({visitor.position})
                    </p>
                  </div>



                  <p className="mb-4 text-orange-50 text-center md:text-left">{messageToDisplay}</p>
                  <button
                    onClick={() => toggleMessage(visitor.id)}
                    className="text-orange-300 hover:underline self-center md:self-start"
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Visitor;

