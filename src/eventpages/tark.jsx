

import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/hero9.jpeg";

const TarkPage = () => {
    const navigate = useNavigate();

    const handlePaymentRedirect = () => {
        // Redirect to your payment gateway URL
        navigate('/payment-gateway');
    };


    return (
        <div className="relative">
            {/* Background Image Section */}
            <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative inset-0 -z-10" style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
            >
                <div className="absolute inset-0  bg-black opacity-80"></div>
                <h1 className="text-yellow-300	 text-6xl font-thin relative z-10 " style={{ fontFamily: 'Gowun Batang, serif' }}>
                    तर्क-TARK
                </h1>
            </div>


            <div className="bg-yellow-100 py-10">
                <div className="rounded-xl bg-neutral-900 shadow-lg p-8 max-w-4xl mx-auto text-center relative z-10 overflow-y-auto" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <div className="text-white space-y-6 text-lg">
                        <p>हम सभी जानते हैं कि मनुष्य मुक्तिकामी है. इस कामना को सबसे प्रमुख आश्रय है धर्म का अर्थात प्रत्येक व्यक्ति धार्मिक है.मनुष्य धर्म के बगैर नहीं रह सकता भले वह आस्तिक हो  अथवा नास्तिक.धार्मिक होने के बावजूद व्यक्ति जब अपने धर्म का पालन नहीं कर पाता है तब वह निराशा, हताशा का शिकार हो जाता है और अधार्मिक अथवा धर्म विरोधी होने का अभिनय करता है. इनमें कुछ तो धार्मिक परिस्थितियों का योगदान होता है लेकिन अधिकतम योगदान होता है धर्म के बिगड़े स्वरूप का. स्वार्थी तत्वों द्वारा धर्म में अनेक प्रकार के बदलाव कर दिए जाते हैं इसीलिए सामान्य मनुष्य धर्म और विज्ञान को एक दूसरे का विरोध ही मानने लगता है. यह भविष्य में एक बड़े संघर्ष को जन्म देने में सक्षम विषय है. वयम्  ने अपने इस पांचवें चरण में भारत की युवा पीढ़ी को धार्मिक और वैज्ञानिक दोनों ही बनाने का लक्ष्य रखा है. <br/>
                            इसलिए हमारे कार्य योजना में शामिल है <br/>
                            धर्म और विज्ञान की सुसंगत पर व्याख्यान, <br/>
                            धर्मयुक्त दैनिक जीवन पद्धति  का वैज्ञानिक आधार पर प्रशिक्षण/ कार्यशाला और <br/>
                            धार्मिक जीवन के सर्वस्विकार्य लक्षणों का संकलन साहित्य के रूप में </p>
                    </div>

                    {/* <div className="bg-gray-800 text-yellow-300 py-4 mt-8 rounded-md">
                        <p className="italic text-lg">
                            कालॆ खलु समारम्भाः फलं बध्नन्ति नितरां:
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default TarkPage;



