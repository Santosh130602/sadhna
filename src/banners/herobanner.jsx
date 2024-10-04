

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// import banner1 from '../assets/hero4.jpeg';
// import banner2 from '../assets/hero17.jpeg'; 
// import banner3 from '../assets/hero20.jpeg';
// import banner4 from '../assets/hero5.jpeg'; 
// import banner5 from '../assets/hero000.jpg';

// const images = [banner1, banner2, banner3, banner4, banner5];

// function HeroBanner() {
//   return (
//     <div className="mx-auto h-[70vh] overflow-hidden relative mb-16">
//       {/* Wrapper for Swiper with negative z-index */}
//       <div className="absolute inset-0 -z-10">
//         <Swiper
//           direction="horizontal"
//           slidesPerView={1}
//           loop={true}
//           speed={1000}
//           modules={[Autoplay, Pagination]}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           pagination={{
//             clickable: true,
//             el: '.custom-pagination', // Custom class for pagination
//             renderBullet: (index, className) => {
//               return `
//                 <span class="${className} ${index === Swiper.activeIndex ? 'solid-bullet' : 'hollow-bullet'}"></span>
//               `;
//             },
//           }}
//           className="h-full"
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index} className="h-full">
//               <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-full object-cover overflow-hidden"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Custom pagination container */}
//       <div className="custom-pagination"></div>

//       <style jsx>{`
//         .solid-bullet {
//           background: white;
//           border-radius: 50%;
//           width: 12px;
//           height: 12px;
//           display: inline-block;
//           margin: 0 4px;
//         }
//         .hollow-bullet {
//           background: transparent;
//           border: 2px solid white;
//           border-radius: 50%;
//           width: 12px;
//           height: 12px;
//           display: inline-block;
//           margin: 0 4px;
//         }
//         .custom-pagination {
//           position: absolute;
//           top: 50%; /* Align in the vertical center of the image */
//           left: 50%;
//           transform: translate(0%, -70%); /* Center horizontally and vertically */
//           z-index: 10; /* Ensure pagination is above the slides */
//           display: flex;
//           justify-content: center;
//           gap: 8px; /* Space between bullets */
//         }
//       `}</style>
//     </div>
//   );
// }

// export default HeroBanner;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import banner1 from '../assets/hero4.jpeg';
import banner2 from '../assets/hero17.jpeg'; 
import banner3 from '../assets/hero20.jpeg';
import banner4 from '../assets/hero5.jpeg'; 
import banner5 from '../assets/hero000.jpg';

const images = [banner1, banner2, banner3, banner4, banner5];

function HeroBanner() {
  return (
    <div className="mx-auto h-[70vh] overflow-hidden relative mb-16">
      {/* Wrapper for Swiper with negative z-index */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          loop={true}
          speed={1000}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: '.custom-pagination', // Custom class for pagination
            renderBullet: (index, className) => {
              return `
                <span class="${className} ${index === Swiper.activeIndex ? 'solid-bullet' : 'hollow-bullet'}"></span>
              `;
            },
          }}
          className="h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover" // Ensure images cover their containers
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom pagination container */}
      <div className="custom-pagination"></div>

      <style jsx>{`
        .solid-bullet {
          background: white;
          border-radius: 50%;
          width: 12px;
          height: 12px;
          display: inline-block;
          margin: 0 4px;
        }
        .hollow-bullet {
          background: transparent;
          border: 2px solid white;
          border-radius: 50%;
          width: 12px;
          height: 12px;
          display: inline-block;
          margin: 0 4px;
        }
        .custom-pagination {
          position: absolute;
          top: 50%; /* Align in the vertical center of the image */
          left: 50%;
          transform: translate(0%, -70%); /* Center horizontally and vertically */
          z-index: 10; /* Ensure pagination is above the slides */
          display: flex;
          justify-content: center;
          gap: 8px; /* Space between bullets */
        }
      `}</style>
    </div>
  );
}

export default HeroBanner;
