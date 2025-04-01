import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper';

import proj1 from "../assets/images/hero/proj1.png";
import proj2 from "../assets/images/hero/proj2.png";
import proj3 from "../assets/images/hero/proj3.png";
import proj4 from "../assets/images/hero/proj4.jpg";

const Projects3 = () => {
  return (
    <section className="bg-bg_light_primary" id="projects3">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <h2 className="title" data-aos="fade-down">Mobile Projects</h2>
        <h4 className="subtitle" data-aos="fade-down">Two Slides View</h4>

        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1.5} // Show one big, one small slide
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="rounded-3xl pb-16 max-w-full drop-shadow-primary"
        >
          {[proj1, proj2, proj3, proj4].map((image, index) => (
            <SwiperSlide key={index} className={`transition-transform duration-300 ${index === 0 ? 'scale-110' : 'scale-90 opacity-80'}`}>
              <img src={image} alt={`Project ${index + 1}`} className="w-full rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects3;
