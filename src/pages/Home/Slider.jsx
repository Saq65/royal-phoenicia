import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Slider = () => {

    const slides = [
        {
            image: '/images/first-slide.jpg',
            title: (
                <>
                    <span className="block">Hotel</span>
                    <span className="block">Royal Phoenicia</span>
                </>
            ),
            subtitle: 'YOUR FAVOURITE PLACE. OUR FAMILY STORY.',
        },
        {
            image: '/images/second-slide.jpg',
            title: (
                <>
                    <span className="block">Hotel</span>
                    <span className="block">Royal Phoenicia</span>
                </>
            ),
            subtitle: 'Feel like royalty',
        },
    ];


    return (
        <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            effect="fade"
            className="h-screen"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="h-screen bg-cover bg-center flex items-center justify-center animate-fade-zoom"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="text-center text-white p-8 rounded animate-fade-up">
                            <h1 className="text-6xl  mb-4">{slide.title}</h1>
                            <p className="text-xl">{slide.subtitle}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
