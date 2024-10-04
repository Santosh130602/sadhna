


import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/hero9.jpeg";

const SatyPage = () => {
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
                    सत्य-SATY
                </h1>
            </div>


            <div className="bg-yellow-100 py-10">
                <div className="rounded-xl bg-neutral-900 shadow-lg p-8 max-w-4xl mx-auto text-center relative z-10 overflow-y-auto" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <div className="text-white space-y-6 text-lg">
                        <p>सनातन परंपरा का आधार मूल तत्व है त्याग, बलिदान और दान.सनातन की मान्यता है कि जो त्यागता है वही पाता है.आप त्यागते हैं भौतिक वस्तुएं और पाते हैं  अधिभौतिक संतोष अर्थात त्याग आपको मानव से महामानव बना देता है.त्यागने की प्रवृत्ति का विकास ही हमारे यहां परम पुरुषार्थ है.इसीलिए हमारी परंपरा प्रमाणिक है.सदियों से व्यवहारित हमारी परंपराएं मानवता के  लिए के लिए सत्य के रूप में प्रतिष्ठित हो गई है. इस सत्य स्वरूप परंपरा के निर्वाह में हम असफल हो रहे हैं क्योंकि हम इन मूल्यों पर जीने के लिए अभ्यस्त नहीं है."सत्य ही सनातन है" युवाओं के बीच इस ऋषि वाक्य को पहुंचाना और इन पर उन्हें  चलाना ही वयम् के इस अंतिम चरण का लक्ष्य है.हम इस मान्यता को प्रतिष्ठित करने का उद्देश्य रखते हैं कि भौतिक समृद्धि के साथ  आध्यात्मिक उन्नति का मार्ग भी प्रशस्त हो सकता है</p>
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

export default SatyPage;



