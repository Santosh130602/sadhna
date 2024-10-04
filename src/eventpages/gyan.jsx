


import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/hero9.jpeg";

const GyanPage = () => {
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
                    ज्ञान-GYAN
                </h1>
            </div>


            <div className="bg-yellow-100 py-10">
                <div className="rounded-xl bg-neutral-900 shadow-lg p-8 max-w-4xl mx-auto text-center relative z-10 overflow-y-auto" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <div className="text-white space-y-6 text-lg">
                        <p>यह हमारी यह हमारे कार्य योजना का दूसरा चरण है. इसमें हम स्वस्थ शरीर व स्वस्थ मन के साथ समाज के बीच सह अस्तित्व के विचार को प्रतिष्ठित कर सकेंगे.इसके लिए हमने जो कार्य व्यवहार निर्धारित किये हैं वह है..
                            <br/>
                            <ul className=''>
                                <li>सहअस्तित्व का बोध,</li>
                                <li>दायित्व का बोध  का विकास और</li>
                                <li>सामुदायिक सेवा.</li>
                            </ul>
                            

                            इन तीनों के सफल व्यवहार से जो निर्मित होगी, वह होगी प्राकृतिक जीवन शैली.जिसमें कृत्रिमता और आडंबर के लिए कोई स्थान नहीं होगा. देश के विभिन्न क्षेत्रों से आए प्रशिक्षुओं को प्रयागराज के महाकुंभ में पधारे वृहत्तर, वैविध्य पूर्ण समाज के बीच अपने ज्ञान का व्यावहारिक प्रयोग सीखने का अवसर मिलेगा. इसके लिए महाकुंभ - 2025 एक बड़ा सामाजिक प्रतिदर्श होगा</p>
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

export default GyanPage;


