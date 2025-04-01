import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';

import proj1 from "../assets/images/hero/proj1.png";
import proj2 from "../assets/images/hero/proj2.png";
import proj3 from "../assets/images/hero/proj3.png";
import proj4 from "../assets/images/hero/proj4.jpg";

const Projects2 = () => {
  return (
    <section className="bg-bg_light_primary" id="projects2">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <h2 className="title" data-aos="fade-down">Mobile Projects</h2>
        <h4 className="subtitle" data-aos="fade-down">Single Slide View</h4>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1} // Show only one slide at a time
          spaceBetween={10}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="rounded-3xl pb-16 max-w-full drop-shadow-primary"
        >
          {[proj1, proj2, proj3, proj4].map((image, index) => (
            <SwiperSlide key={index} className="bg-white rounded-3xl p-5 border-b-8 h-fit max-w-[320px] mx-auto">
              <img src={image} alt={`Project ${index + 1}`} className="w-full rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects2;
