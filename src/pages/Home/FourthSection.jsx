import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import "../../styles/Fourthsection.css";
import { Autoplay, Pagination } from 'swiper/modules';

function FourthSection() {
    return (
        <div className='forth-section'>
            <div className="mb-5 mt-4 animate-bounce  flex items-center justify-center">
                <div className="border border-gray-400 rounded w-10 h-10 flex items-center justify-center">
                    <span className="text-xl font-serif">IV</span>
                </div>
            </div>

            <div className="exeptional">
                <div>
                    <p>exceptional gastronomy <br />
                        served in elegant spaces.
                    </p>
                </div>
            </div>

            <div className="horizental-slider">
                <div style={{ width: '90%',borderBottom:'1px solid #777777',paddingBottom:'70px' }} className="row mx-auto">
                    <div className="col-lg-6">
                        <div className="">
                            <Swiper
                                direction="vertical"
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination]}
                                className="h-[500px]"

                            >
                                <SwiperSlide>
                                    <div>
                                        <img src="../../images/first-t.jpg" style={{ objectFit: 'cover' }} alt="" className="img-fluid" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <img src="../../images/second-t.jpg" style={{ objectFit: 'cover' }} alt="" className="img-fluid" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <img src="../../images/third-t.jpg" style={{ objectFit: 'cover' }} alt="" className="img-fluid" />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div  className='mx-4'>
                            <div className="heading">
                                <p className='about-text'>About Us</p>
                            </div>
                            <div>
                                <p className='royaltext'>Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort
                                    and convenience of every guest. The hotel features a luxurious spa and wellness center,
                                    where guests can indulge in soothing treatments and rejuvenating massages. For those seeking
                                    to maintain their fitness routine, the fully equipped gym provides a space for exercise,
                                    while the outdoor pool offers a relaxing environment to unwind. Dining at the hotel is a pleasure,
                                    with an on-site restaurant offering a diverse selection of cuisines in an elegant atmosphere.
                                    Additionally, the hotel provides business facilities, including meeting rooms and event spaces,
                                    ideal for corporate travelers. With its comprehensive range of services.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FourthSection