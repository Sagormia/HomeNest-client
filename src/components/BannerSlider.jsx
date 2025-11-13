// React components
import { Swiper, SwiperSlide } from "swiper/react";

// Modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const BannerSlider = () => {
  const slides = [
    {
      title: "Discover Your Perfect Home",
      subtitle: "Explore thousands of curated listings for rent and sale across top locations.",
      image: "https://images.unsplash.com/flagged/photo-1600002807685-2345c0b50a7c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "List Your Property Effortlessly",
      subtitle: "Reach potential buyers and renters—fast, easy & hassle‑free with HomeNest.",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Luxury Homes at Your Fingertips",
      subtitle: "Browse top tier listings—villas, penthouses, commercial spaces & more.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  return (
    <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    autoplay={{ delay: 5000 }}
    navigation
    pagination={{ clickable: true }}
    loop={true}
    className="w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
    >
    {slides.map((slide, index) => (
        <SwiperSlide key={index}>
        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
        <div className="absolute flex-center inset-0 text-white bg-black/50">
            <div className="container text-center">
                <h2 className="text-4xl lg:text-6xl font-bold">{slide.title}</h2>
                <p className="text-xl mt-4">{slide.subtitle}</p>
            </div>
        </div>
        </SwiperSlide>
    ))}
    </Swiper>

  );
};

export default BannerSlider;
