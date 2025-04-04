import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";

import ui from "../assets/images/hero/ui.png";
import proj1 from "../assets/images/hero/proj1.png";
import proj2 from "../assets/images/hero/proj2.png";
import proj3 from "../assets/images/hero/proj3.png";
import proj4 from "../assets/images/hero/proj4.jpg";
import proj5 from "../assets/images/hero/proj5.jpg";
import proj6 from "../assets/images/hero/proj6.png";
import proj7 from "../assets/images/hero/proj7.png";
import proj9 from "../assets/images/hero/proj9.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';

const Projects1 = () => {
  const { Projects } = content;

  return (
    <section className="bg-bg_light_primary" id="projects1">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">{Projects.title}</h2>
          <h4 className="subtitle" data-aos="fade-down">{Projects.subtitle}</h4>
        </div>

        <div className="flex items-center lg:flex-row flex-col-reverse gap-1" >
          <Swiper
            effect={'coverflow'}
            
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3} // Show 3 slides at once
          spaceBetween={100} // Adjusted space between slides
          coverflowEffect={{
            rotate: 10,  // No rotation for the centered slide
            stretch: 0,
            depth: 150, // Adds depth to the slides
            modifier: 1.5,  // Increased modifier for a stronger 3D effect
            slideShadows: true, // Add shadow for a more realistic 3D effect
  }}
  
            pagination={{ clickable: true }}
            navigation={{ clickable: true }}
            autoplay={{
                delay: 2000, // Delay between slides in milliseconds (2.5 seconds)
                disableOnInteraction: false, // Continue autoplay even after user interaction
              }}
              
            
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="rounded-3xl pb-16 max-w-full drop-shadow-primary self-start"
          >
            {/* Manual SwiperSlide 1 */}
            <SwiperSlide
              className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit max-w-[320px] mx-auto transition-transform duration-300"
              style={{ backgroundColor: 'white' }} >
              <img src={proj1} alt="Project 1" className="w-full rounded-lg"  />
              <div className="flex flex-col gap-1 mt-2">
                <h5 className="font-bold font-Poppins">Vitaldx</h5>
                <p className="font-Poppins text-sm text-gray-600">Worked on developing new features and fixing bugs for the company's main product.</p>
                <button className="font-bold text-gray-700 self-end">READ MORE</button>
              </div>
            </SwiperSlide>

            {/* Manual SwiperSlide 2 */}
            <SwiperSlide
              key={2}
              className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit max-w-[320px] mx-auto transition-transform duration-300"
            >
              <img src={proj7} alt="Project 2" className="w-full rounded-lg" />
              <div className="flex flex-col gap-1 mt-2">
                <h5 className="font-bold font-Poppins">OneTracker</h5>
                <p className="font-Poppins text-sm text-gray-600">Developed an online library as part of my internship, featuring all the functions of a real library.</p>
                <button className="font-bold text-gray-700 self-end">READ MORE</button>
              </div>
            </SwiperSlide>

            {/* Manual SwiperSlide 3 */}
            <SwiperSlide
              key={3}
              className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit max-w-[320px] mx-auto transition-transform duration-300"
            >
              <img src={proj9} alt="Project 3" className="w-full rounded-lg" />
              <div className="flex flex-col gap-1 mt-2">
                <h5 className="font-bold font-Poppins">ESA</h5>
                <p className="font-Poppins text-sm text-gray-600">Built a Student Management System with a unique feature that predicts future grades based on past results using Machine Learning.</p>
                <button className="font-bold text-gray-700 self-end">READ MORE</button>
              </div>
            </SwiperSlide>

            <SwiperSlide
              key={4}
              className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit max-w-[320px] mx-auto transition-transform duration-300"
            >
              <img src={proj5} alt="Project 3" className="w-full rounded-lg" />
              <div className="flex flex-col gap-1 mt-2">
                <h5 className="font-bold font-Poppins">Microservices Inventory System</h5>
                <p className="font-Poppins text-sm text-gray-600">Developed a scalable inventory management system using ASP.NET Core and Docker, enhancing real-time tracking and order processing.</p>
                <button className="font-bold text-gray-700 self-end">READ MORE</button>
              </div>
            </SwiperSlide>

            <SwiperSlide
              key={5}
              className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit max-w-[320px] mx-auto transition-transform duration-300"
            >
              <img src={proj6} alt="Project 3" className="w-full rounded-lg" />
              <div className="flex flex-col gap-1 mt-2">
                <h5 className="font-bold font-Poppins">Automated Analytics Dashboard</h5>
                <p className="font-Poppins text-sm text-gray-600">Built a real-time analytics dashboard with ASP.NET Core and Angular, providing actionable insights and custom reporting.</p>
                <button className="font-bold text-gray-700 self-end">READ MORE</button>
              </div>
            </SwiperSlide>

            {/* Add more SwiperSlide components as needed */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects1;
