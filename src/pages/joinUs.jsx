import React from 'react';
import backgroundImage from "../assets/hero9.jpeg";
import { useNavigate } from 'react-router-dom'; 

const JoinUs = () => {
    const navigate = useNavigate(); 

    const handleInternshipClick = () => {
        navigate('/internship-program'); 
    };
    const handleVayamClick = () => {
        navigate('/vayam-program'); 
    };

    return (
        <div className="relative">
            {/* Header Section */}
            <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <h1 className="text-yellow-300 text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
                    Join Us
                </h1>
            </div>

            {/* Main Content Section */}
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 p-8 '>
                <div className="bg-white py-10 w-full max-w-md">
                    <div className="shadow-lg p-8 text-center bg-yellow-300" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                        <div className="text-gray-800 space-y-6 text-lg">
                            <h1 className="text-black text-4xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
                                Vayam
                            </h1>
                            <div style={{ fontFamily: 'Gowun Batang, serif' }}>
                                <div className='text-left'>
                                    <p className='text-red-500 font-bold text-2xl'></p>
                                    <p>The "Vayam" program empowers youth by immersing them in the essence of our culture, Dharma, and Vedic teachings, fostering a deep connection to Rashtra and society.</p>
                                </div>
                               
                            </div>
                            <button
                                onClick={handleVayamClick}
                                className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
                            >
                                Know About More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Internship Section */}
                <div className="bg-white py-10 w-full max-w-md">
                    <div className="shadow-lg p-8 text-center bg-yellow-300" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                        <div className="text-gray-800  space-y-6 text-lg">
                            <h1 className="text-black text-4xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
                                Internship
                            </h1>
                            <div style={{ fontFamily: 'Gowun Batang, serif' }}>
                                <div className='text-left'>
                                    <p>We offer a social work internship, providing hands-on experience in community development, empowering individuals to make a meaningful impact through social welfare initiatives</p>
                                </div>
                            </div>
                            <button
                                onClick={handleInternshipClick}
                                className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
                            >
                                Know About More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;



// import React from 'react';
// import backgroundImage from "../assets/hero9.jpeg";
// import { useNavigate } from 'react-router-dom'; 

// const JoinUs = () => {
//     const navigate = useNavigate(); 

//     const handleInternshipClick = () => {
//         navigate('/internship-program'); 
//     };

//     const handleVayamClick = () => {
//         navigate('/vayam-program'); 
//     };

//     return (
//         <div className="relative">
//             {/* Header Section */}
//             <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative"
//                 style={{
//                     backgroundImage: `url(${backgroundImage})`,
//                 }}
//             >
//                 <div className="absolute inset-0 bg-black opacity-80"></div>
//                 <h1 className="text-yellow-300 text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
//                     Join Us
//                 </h1>
//             </div>

//             {/* Main Content Section */}
//             <div className='flex flex-col md:flex-row justify-center items-center gap-10 p-8'>
//                 <div className="bg-white rounded-lg shadow-lg py-10 w-full max-w-md flex flex-col">
//                     <div className="bg-yellow-300 flex-grow p-8 text-center" style={{ borderRadius: '12px 12px 0 0' }}>
//                         <h1 className="text-black font-bold text-4xl font-thin" style={{ fontFamily: 'Gowun Batang, serif' }}>
//                             Vayam
//                         </h1>
//                         <div className='text-left'>
//                             <p className='text-red-500 font-bold text-2xl'></p>
//                             <p>The "Vayam" program empowers youth by immersing them in the essence of our culture, Dharma, and Vedic teachings, fostering a deep connection to Rashtra and society.</p>
//                         </div>
//                         <button
//                             onClick={handleVayamClick}
//                             className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
//                         >
//                             Know About More
//                         </button>
//                     </div>
//                 </div>

//                 {/* Internship Section */}
//                 <div className="bg-white rounded-lg shadow-lg py-10 w-full max-w-md flex flex-col">
//                     <div className="bg-yellow-300 flex-grow p-8 text-center" style={{ borderRadius: '12px 12px 0 0' }}>
//                         <h1 className="text-black text-4xl font-thin font-bold" style={{ fontFamily: 'Gowun Batang, serif' }}>
//                             Internship
//                         </h1>
//                         <div className='text-left'>
//                             <p>We offer a social work internship, providing hands-on experience in community development, empowering individuals to make a meaningful impact through social welfare initiatives.</p>
//                         </div>
//                         <button
//                             onClick={handleInternshipClick}
//                             className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
//                         >
//                             Know About More
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default JoinUs;
