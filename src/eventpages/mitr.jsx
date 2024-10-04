


import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/hero9.jpeg";

const MitrPage = () => {
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
                    मित्र-MITR
                </h1>
            </div>


            <div className="bg-yellow-100 py-10">
                <div className="rounded-xl bg-neutral-900 shadow-lg p-8 max-w-4xl mx-auto text-center relative z-10 overflow-y-auto" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <div className="text-white space-y-6 text-lg">
                        <p>यह हमारी योजना का तीसरा चरण है.
                            ज्यों ही हमें अपने समाज के साथ  सहअस्तित्व का बोध होता है तुरंत ही हम विभिन्न प्रकार के सामाजिक संबंधों  (औपचारिक /अनौपचारिक) में बंधते जाते हैं. इन संबंधों का व्यक्ति के निजी व सामाजिक जीवन की प्रगति में अनमोल योगदान होता है. इन संबंधों से व्यक्ति के निजी जीवन को जहां मनोवैज्ञानिक उत्थान, भावनात्मक संबल मिलता है वहीं सामाजिक जीवन में पहचान और आत्म संतुष्टि का भाव भी उत्पन्न  होता है. अतः समाज में बनने वाले ऐसे संबंधों पर पड़ने वाले विभिन्न प्रकार के बाहरी प्रभावों का मूल्यांकन और इनमें जन्म लेने वाले तनाव को संतुलित करने की मानसिक तैयारी बहुत ही आवश्यक हो जाती  है. इस उद्देश्य के दृष्टिगत हमने यह कार्यक्रम तैयार किया है और इनमें हम जिन प्रयोगों का  सहारा लेंगे उनमें प्रमुख है..
                            मनोवैज्ञानिक परीक्षण
                            करियर काउंसलिंग और
                            मोटिवेशन.</p>
                    </div>

                    <div className="bg-gray-800 text-yellow-300 py-4 mt-8 rounded-md">
                        <p className="italic text-lg">
                        यह पूरा कार्यक्रम व्यक्त को निजी और सामाजिक जीवन की भूमिका और जिम्मेदारियों के कुशल निर्वहन में सक्षम और समर्थ बनाएगा.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MitrPage;



