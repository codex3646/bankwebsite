// SlidingSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./SlidingSection.css"; // 👈 Custom styles

const slides = [
  {
    title: "Ultraviolet Black Card", // Cartão Black Ultraviolet
    image: "src/components/imgs1.jpg",
  },
  {
    title: "Global Account", // Conta Global
    image: "src/components/imgs2.jpg",
  },
  {
    title: "Investments", // Investimentos
    image: "src/components/imgs3.jpg",
  },
  {
    title: "Ultraviolet Support", // Atendimento Ultraviolet
    image: "src/components/imgs4.jpg",
  },
  {
    title: "NuTag", // NuTag is a brand name (no translation)
    image: "src/components/imgs5.jpg",
  },
];


const SlidingSection = () => {
  return (
    <div className="carousel-wrapper">
      <Swiper
        spaceBetween={-80}
        slidesPerView={4}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`slide-card card-${index % 5}`}>
              <img src={slide.image} alt={slide.title} />
              <div className="caption">{slide.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidingSection;
