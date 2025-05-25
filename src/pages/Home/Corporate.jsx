import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay } from 'swiper';

import "../../styles/Corporate.css";

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
                                <div className="slide-content">{content}</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Corporate;
