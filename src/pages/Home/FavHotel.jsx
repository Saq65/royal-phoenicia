import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../../styles/FavHotel.css";

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
          <div className="row w-100 justify-content-center align-items-center mx-3 p-2">
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
            <button className="mt-10 bg-light px-6 py-2 border border-gray-800 rounded-full text-gray-700 font-serif hover:bg-gray-100 transition">
              Accommodation
            </button>
          </div>

        </div>
      </div>
    </div>

  );
}
