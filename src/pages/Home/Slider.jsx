import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
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
        <div className=''>
            <Swiper
                modules={[Autoplay, EffectFade]}
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
                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${slide.image})` }}
                        >
                            <div className="text-center text-white p-8 rounded animate-fade-up">
                                <h1 style={{fontFamily:'Crimson Text'}} className="text-6xl mb-4">{slide.title}</h1>
                                <p style={{fontFamily:'Poppins'}} className="text-xl">{slide.subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default Slider;
