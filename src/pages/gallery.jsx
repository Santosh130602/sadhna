// import React from 'react';
// import img1 from "../assets/hero2.jpeg"

// // Sample image data
// const images = [

// ];

// const Gallery = () => {
//     return (
//         <div className="p-8 bg-gray-100">
//             <h1 className="text-3xl font-bold text-center mb-6">Image Gallery</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {images.map((image, index) => (
//                     <div key={index} className="overflow-hidden rounded-lg shadow-lg">
//                         <img 
//                             src={image} 
//                             alt={`Gallery image ${index + 1}`} 
//                             className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Gallery;


// import React from 'react';
// import img1 from "../assets/hero2.jpeg"; // Import your image

// // Sample image data (image repeated 7 times)
// const images = new Array(7).fill(img1); // Create an array with img1 repeated 7 times

// const Gallery = () => {
//     return (
//         <div className="p-8 bg-gray-100">
//             <h1 className="text-3xl font-bold text-center mb-6">Image Gallery</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {images.map((image, index) => (
//                     <div key={index} className="overflow-hidden rounded-lg shadow-lg">
//                         <img 
//                             src={image} 
//                             alt={`Gallery image ${index + 1}`} 
//                             className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Gallery;



import React from 'react';
import backgroundImage from "../assets/hero9.jpeg";
import img1 from "../assets/hero2.jpeg";
import img2 from "../assets/hero3.jpeg";
import img3 from "../assets/hero4.jpeg";
import img4 from "../assets/hero5.jpeg";
import img5 from "../assets/hero6.jpeg";
import img6 from "../assets/hero7.jpeg";
import img7 from "../assets/hero8.jpeg";
import img8 from "../assets/hero9.jpeg";
import img9 from "../assets/hero10.jpeg";
import img10 from "../assets/hero11.jpeg";
import img11 from "../assets/hero12.jpeg";
import FooterBackground from "../assets/bg10.png";

// Sample image data (image repeated 7 times)
const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
];

const Gallery = () => {
    return (
        <div className="relative ">
            {/* Background Image Section */}
            <div className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative inset-0 -z-10" style={{
                backgroundImage: `url(${backgroundImage})`,
            }}>
                {/* Overlay for darkening effect */}
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <h1 className="text-yellow-300 text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>Gallery</h1>
            </div>

            {/* Main Content Section */}
            <div className=" py-10 " style={{
                backgroundImage: `url(${FooterBackground})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                opacity: '0.8'
            }}>
                <div className=" rounded-xl shadow-lg p-8  mx-auto text-center relative z-10 overflow-y-auto" >
                    {/* <h2 className="text-5xl font-thin text-gray-800 mb-16"> Gallery</h2> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((image, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    className=" h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
