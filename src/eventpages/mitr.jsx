import React from 'react';
import { useNavigate } from 'react-router-dom';

const MitrPage = () => {
    const navigate = useNavigate();

    const handlePaymentRedirect = () => {
        // Redirect to your payment gateway URL
        navigate('/payment-gateway'); // Replace with your actual payment gateway path
    };

    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-4">सोच (SOCH)</h1>
            <h2 className="text-2xl mb-2">सुंदर सामुदायिक जीवन के लिए आध्यात्मिक तैयारी</h2>

            <div className="mt-6">
                <h3 className="text-xl font-semibold">1. योग</h3>
                <p className="mb-4">योग शारीरिक और मानसिक स्वास्थ्य के लिए एक अद्भुत माध्यम है। यह तनाव को कम करता है और शरीर को स्वस्थ रखता है।</p>

                <h3 className="text-xl font-semibold">2. आयुर्वेद</h3>
                <p className="mb-4">आयुर्वेद प्राकृतिक चिकित्सा प्रणाली है, जो जीवन शैली और आहार के माध्यम से संतुलन बनाए रखने पर जोर देती है।</p>

                <h3 className="text-xl font-semibold">3. स्वाध्याय</h3>
                <p>स्वाध्याय आत्म-ज्ञान और आत्म-निर्णय का अभ्यास है। यह व्यक्ति को अपने अंदर की आवाज़ सुनने और स्वयं को समझने में मदद करता है।</p>
            </div>

            <button
                onClick={handlePaymentRedirect}
                className="mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                दान करें
            </button>
        </div>
    );
};

export default MitrPage;
