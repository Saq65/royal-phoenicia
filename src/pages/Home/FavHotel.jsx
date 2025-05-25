import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../../styles/FavHotel.css";
import { IoIosArrowForward } from "react-icons/io";

const slides = [
  {
    image: "../images/first-fav.jpg",
    description: (
      <>
        <ul className="list-fav">
          <li>Favorite hotel</li>
          <li>Business and Event Spaces</li>
          <li>Diverse Dining Options</li>
          <li>Multiple Swimming Pools</li>
          <li>Family-Friendly Amenities</li>
        </ul>
      </>
    ),
  },
  {
    image: "../images/second-fav.jpg",
    description: (
      <>
        <ul className="list-fav">
          <li>Favorite hotel</li>
          <li>Business and Event Spaces</li>
          <li>Diverse Dining Options</li>
          <li>Multiple Swimming Pools</li>
          <li>Family-Friendly Amenities</li>
        </ul>
      </>
    )
  },
  {
    image: "../images/third-fav.jpg",
    description: (
      <>
        <ul className="list-fav" >
          <li>Favorite hotel</li>
          <li>Business and Event Spaces</li>
          <li>Diverse Dining Options</li>
          <li>Multiple Swimming Pools</li>
          <li>Family-Friendly Amenities</li>
        </ul>
      </>
    )
  }
];

export default function FavHotel() {
  return (
    <div className="fav-container">
      <div className="slider-container">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <img src={slide.image} alt={slide.title} className="slide-image" />
                <div className="slide-overlay">
                  <div className="">
                    <div className="card bg-white text-dark w-30 p-3 border-1 border-[#748598] rounded-0">
                      {slide.description}
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="second-fav mt-5">
        <div className="mb-8 animate-bounce flex items-center justify-center">
          <div className="border border-gray-400 rounded w-10 h-10 flex items-center justify-center">
            <span className="text-xl font-serif">II</span>
          </div>
        </div>

        <div className="mt-5">
          <div style={{rowGap:'20px'}} className="row mx-auto">
            <div className="col-lg-4 col-12">
              <div className="card border-0 rounded-0 first-card">
                <h1>Rooms</h1>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="card border-0 rounded-0 first-card">
                <h1>Pools</h1>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="card border-0 rounded-0 first-card">
                <h1>Dining</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center align-center p-2 py-5">
            <div className="group relative mt-10">
              <button className="px-6 py-2 bg-light border border-gray-500 rounded-full text-gray-700 font-serif hover:bg-gray-100 transition">
                <span className="group-hover:hidden">Accommodation</span>
                <span className="group-hover:block hidden" >
                  <IoIosArrowForward className="text-dark fs-xxl" />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
