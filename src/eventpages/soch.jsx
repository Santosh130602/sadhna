


import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/hero9.jpeg";

const SochPage = () => {
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
                    सोच-SOCH
                </h1>
            </div>


            <div className="bg-yellow-100 py-10">
                <div className="rounded-xl bg-neutral-900 shadow-lg p-8 max-w-4xl mx-auto text-center relative z-10 overflow-y-auto" >
                    <div className="text-white space-y-6 text-lg">
                        <p>हमारे अस्तित्व को संपूर्णता के साथ प्रकट करने के लिए जिस शब्द को प्रयोग में लाया जाता है वह है 'हम' जिसमें 'मैं' और 'मेरे अतिरिक्त सभी' सम्मिलित हैं. 'मैं' हमारी सबसे छोटी और मूल पहचान तो है परंतु "हम" हमारे जीवन का, अस्तित्व का आधार है और मेरे होने के सबसे विश्वसनीय प्रतिभूति भी. इस चिंतन को भारतीय शास्त्रों में " अयं निज: परोवेति गणनां लघुचेतसाम्, उदारचरितानां तु वसुधैव कुटुंबकम " कहकर हमारा मार्ग  प्रशस्त किया गया है.भारतीय संविधान की उद्देशिका में भी संपूर्ण भारत, स्वयं को "हम भारत के लोग" कह कर संबोधित करता है. इस प्रकार 'मैं' और 'मेरा समाज' एक दूसरे के पूरक हैं और इस आध्यात्मिक व कल्याणकारी भावना के विकास के लिए किसी व्यक्ति को तैयार करने की कार्य योजना है "सोच (SOCH) ".</p>
                        <p>इसके साधन के तौर पर हमने चुना है, <br/>
                            योग के प्रति सजगता, <br/>
                            आयुर्वेद की स्वीकार्यता और <br/>
                            स्वाध्याय के प्रति सक्रियता. <br/>

                            हमारी इस योजना में शामिल है, <br/>
                            योग अभ्यास, <br/>
                            योग दर्शन का परिचय, <br/>
                            सद्साहित्य का अध्ययन, <br/>
                            सद्साहित्य का संकलन, सृजन, संरक्षण <br/>
                            आयुर्वेद की शिक्षा, और <br/>
                            उसके अनुप्रयोगों का प्रशिक्षण. <br/>
                        </p>
                    </div>

                    <div className="bg-gray-800 text-yellow-300 py-4 mt-8 rounded-md">
                        <p className="italic text-lg">
                        इस अभ्यास के बाद हम शारीरिक, मानसिक रूप से स्वस्थ होकर यह दृढ़ निश्चय कर सकेंगे कि हमारी पीढ़ी के उत्तरदायित्व क्या है?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SochPage;



