import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ui from "../assets/images/hero/whiteg.jpg";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects"  style={{
          backgroundImage: `url(${ui})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
    
        }}> 
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
          
            {Projects.about}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">MEET ME</h4>
          
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="w-60 h-60 rounded-full object-cover shadow-lg ml-[80px] mb-[300px] mr-[20px]"
    style={{ boxShadow: "0 0 0 16px rgba(73, 73, 103, 0.71), 0 0 0 16px rgba(73, 73, 103, 0.71)" }}
          />
         
            
                            <div className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit w-full max-w-4xl mx-auto"    data-aos="fade-left">
                <h4 className="text-lg font-semibold text-gray-800">
                    With over 4 years of experience in software and system development, I specialize in creating robust and scalable applications using .NET technologies, SQL development, and modern design principles. As a dedicated team player, I thrive in collaborative environments, leveraging my expertise to deliver innovative software solutions tailored to user needs. My passion for problem-solving and my ability to design efficient systems ensure the seamless development of high-quality applications.
                </h4>

                <h4 className="text-lg font-semibold text-gray-800 mt-4">
                    <strong>1. Full-Stack Expertise:</strong> Successfully developed 10 full-stack websites using a range of web technologies, including ASP.NET, Django, PHP, and Java, showcasing versatility in adapting to diverse frameworks and client requirements.
                </h4>

                <h4 className="text-lg font-semibold text-gray-800 mt-4">
                    <strong>2. API Design Excellence:</strong> Delivered 130+ optimized RESTful APIs for seamless communication between systems, backed by strong database management skills with SQL Server.
                </h4>

                <h4 className="text-lg font-semibold text-gray-800 mt-4">
                    I am excited to explore opportunities where I can leverage my expertise in .NET, SQL, and modern frameworks to develop and design innovative software solutions. I am eager to collaborate with forward-thinking teams to build applications that address complex business challenges and contribute to cloud-based systems and microservices architectures that enhance scalability and performance.
                </h4>
                </div>
             
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
