import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../styles/StayPackage.css";

const StayPackage = () => {

    const data = [
        { description: 'Royal Weekend Escape Package', image: '../../images/first-stay.jpg' },
        { description: 'Pools', image: '/images/third-stay.jpg' },
        { description: 'Dining', image: '/images/second-stay.jpg' },
        { description: 'Rooms', image: '../../images/first-stay.jpg' },
        { description: 'Pools', image: '/images/second-stay.jpg' },
        { description: 'Dining', image: '/images/third-stay.jpg' },
    ];

    return (
        <div className='stay-pack-container'>
            <div className="stay mt-5">
                <div className="heading-stay">
                    <h2>Stay Packages</h2>
                </div>

                <div>
                    <div className="my-swiper" >
                        <Swiper
                            spaceBetween={30}
                            breakpoints={{
                                768: { slidesPerView: 1 },
                                992: { slidesPerView: 2 },
                                1048: { slidesPerView: 3 }
                            }}>

                            {data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="hover-slide"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${item.image})`,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center'
                                        }}>
                                        <div className='content-stay'>
                                            <span>all season</span>
                                            <p className='text-center'>{item.description} <br />
                                                <span>From BHD 250 / Per person / 3 Night</span>
                                            </p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className='mx-auto' style={{ borderBottom: '1px solid #777777', width: '90%', paddingBottom: '70px' }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StayPackage