


import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/hero9.jpeg";

const BhavPage = () => {
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
                    भाव-BHAV
                </h1>
            </div>


            <div className="bg-yellow-100 py-10">
                <div className="rounded-xl bg-neutral-900 shadow-lg p-8 max-w-4xl mx-auto text-center relative z-10 overflow-y-auto" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <div className="text-white space-y-6 text-lg">
                        <p>वयम् अपने कार्य योजना में भारत के लिए, भारतीय जीवन मूल्यों से सुसज्जित और भारतीय सांस्कृतिक विरासत के प्रति आस्थवान युवाओं का वह समुदाय तैयार करने का लक्ष्य रखता है जो " क्रिणवंतो विश्वं आर्यं " के आदर्श को मूर्त रूप दे सकें. भारत के पास संभावनाओं का संसाधन है. भारत यदि विश्व गुरु होने का दावा करता है तो इसके पीछे ठोस आधार छिपा है. आज वैश्विक नेतृत्व तैयार करने की जिम्मेदारी भारत को उठानी ही पड़ेगी, जो त्याग व तपस्चर्या की प्राचीन परंपरा पर चलकर दधीचि जैसा उदाहरण समाज के सामने प्रस्तुत कर सके.आज तमाम भौतिक विकास के बीच मनुष्य के जीवन में खालीपन, अकेलापन और उससे जुड़ी अनेक व्याधियों  ने मानव जीवन की गुणवत्ता को प्रतिकूल रूप से प्रभावित किया है.मनुष्य भावनात्मक रूप से कमजोर हो रहा है.वैचारिक स्पष्टता के अभाव में दृष्टिहीन होकर विभिन्न प्रकार की नई-नई सामाजिक बुराइयों को जन्म दे रहा है.मनुष्य की भावनात्मक दृढ़ता के लिए उसके व्यवहार पर व्यक्ति का स्वयं का नियंत्रण अनिवार्य हो जाता है. इन लक्षणों को ध्यान में रखकर हमने चतुर्थ चरण तैयार किया है, जिसमें व्यक्ति में
                            कला, साहित्य, संगीत और यात्रा के माध्यम से व्यावहारिक कौशल का विकास किया जा सकता है.
                        </p>
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

export default BhavPage;


