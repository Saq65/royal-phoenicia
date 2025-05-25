import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import "../../styles/Corporate.css";
import { IoIosArrowForward } from 'react-icons/io';

const Corporate = () => {
    const slides = [
        'Slide 1 Content',
        'Slide 2 Content',
        'Slide 3 Content',
        'Slide 4 Content',
        'Slide 5 Content',
    ];

    return (
        <div>
            <div className="corporate-landing">
                <div className="mb-8 animate-bounce flex items-center justify-center mt-4">
                    <div className="border border-light rounded w-10 h-10 flex items-center justify-center">
                        <span className="text-xl text-white font-serif">V</span>
                    </div>
                </div>
                <div className="background-image"></div>

                <div className="marquee">
                    <div className="marquee-content">
                        <span>Latest News: Our new product launch is coming soon! Stay tuned. </span>
                        <span>Latest News: Our new product launch is coming soon! Stay tuned. </span>
                    </div>
                </div>

                <div className="swiper-container">
                    <Swiper
                        direction="vertical"
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        {slides.map((content, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-[300px] bg-white mx-auto border border-gray-200 shadow-lg rounded-md p-6 text-center font-sans">
                                    <h2 className="text-[24px] font-[500] leading-tight mb-4 font-serif">Family gatherings</h2>
                                    <p className="text-[14px] text-gray-700 leading-relaxed mb-6">
                                        We know how much your event means to you—be it a jubilee, anniversary, or wedding, we’re here to make every detail count with elegance, care, and unforgettable experiences tailored just for you.
                                    </p>
                                  <div className="group relative mt-10">
                                           <button className="px-6 py-2 bg-light border border-gray-500 rounded-full text-gray-700 font-serif hover:bg-gray-100 transition">
                                             <span className="group-hover:hidden">More</span>
                                             <span className="group-hover:block hidden" >
                                               <IoIosArrowForward className="text-dark fs-xxl" />
                                             </span>
                                           </button>
                                         </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Corporate;
