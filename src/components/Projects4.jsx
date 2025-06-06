import { useState } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";

import proj1 from "../assets/images/Hero/proj1.png";
import proj5 from "../assets/images/Hero/proj5.jpg";
import proj6 from "../assets/images/Hero/proj6.png";
import proj7 from "../assets/images/Hero/proj7.png";
import proj9 from "../assets/images/Hero/proj9.jpg";

import React, { Suspense, lazy } from "react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { LinearGradient } from 'react-text-gradients'

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";


const projectData = [
  {
    image: proj1,
    title: "Vitaldx",
    description:
      "Worked on developing new features and fixing bugs for the company's main product.",
      neonClass: "neon2",
      tech: ["ASP.NET Core", "Entity Framework", "Razor Pages", "SQL Server", "C#", "HTML/CSS", "JavaScript"],
      subdescription: `As a Software Engineer at Vitaldx, I contributed to the continuous enhancement of the company’s flagship healthcare diagnostics platform.
      I was responsible for implementing new feature modules that improved user experience and diagnostic efficiency.
      Collaborated closely with cross-functional teams to identify and resolve complex bugs across frontend and backend services.
      Utilized ASP.NET Core and Entity Framework to build scalable APIs and ensure robust data handling.
      Implemented unit and integration tests to maintain high code quality and ensure release stability.
      Participated in code reviews and sprint planning, contributing to agile development practices.
      Ensured compliance with healthcare data standards, prioritizing security and performance optimization.
      This experience strengthened my ability to deliver high-impact solutions in mission-critical environments.`,
      bgClass: "bg-[rgba(255,0,255,0.2)]",
      glowClass:"shadow-[0_0_10px_10px_#FF00FF]",

  },
  {
    image: proj7,
      title: "OneTracker",
      description:
        "Developed an online library as part of my internship, featuring all the functions of a real library.",
      tech: ["ASP.NET Core", "Entity Framework", "Razor Pages", "SQL Server", "C#", "HTML/CSS", "JavaScript"],
      subdescription: `Led a team of interns in developing a full-featured online library management system during my internship.
      Designed and built the web application using ASP.NET Core, Razor Pages, and Entity Framework for seamless CRUD operations.
      Managed SQL Server integration for secure data storage, implementing relationships, indexing, and stored procedures.
      Guided junior team members on version control, software design patterns, and agile best practices.
      Developed authentication and role-based access controls to simulate librarian and member workflows.
      Integrated dynamic UI components using JavaScript and CSS for an interactive, responsive user experience.
      Conducted regular code reviews and debugging sessions to ensure quality and maintainable code.
      This project honed both my technical and leadership skills in delivering production-grade applications.

      `,
      neonClass: "neon1",
      bgClass: "bg-[rgba(0,255,255,0.2)]",
      glowClass:"shadow-[0_0_10px_10px_#00FFFF]",
      
  },
  {
    image: proj9,
    title: "ESA",
    description:
      "Built a Student Management System with a unique feature that predicts future grades based on past results using Machine Learning.",
      neonClass: "neon3",
      tech: ["Django", "Python", "scikit-learn", "Machine Learning", "SQLite", "HTML", "CSS", "JavaScript", "Bootstrap", "Kaggle", "Data Visualization"],

      subdescription: `Led a team of interns in developing a web-based Student Management System aimed at predicting future grades based on historical performance using machine learning.
      Utilized Django for the backend, ensuring efficient handling of student data, secure API endpoints, and smooth integration with the front-end.
      Implemented machine learning models using Python and scikit-learn, sourced data from Kaggle to predict academic performance based on past results.
      Designed a responsive web interface using HTML, CSS, and JavaScript, enabling students to track their grades and see future predictions on an intuitive dashboard.
      Managed deployment using Heroku, ensuring scalability and optimal performance of the application for live access.
      Collaborated closely with the front-end team to integrate visualizations of performance trends and predictive analytics.
      Handled project management, delegating tasks, conducting code reviews, and mentoring interns in adopting best practices for web development and version control.
      This web-based solution effectively combined my leadership, machine learning expertise, and web development skills, culminating in a valuable college project..`,
      bgClass: "bg-[rgba(57,255,20,0.2)]",
      glowClass:"shadow-[0_0_10px_10px_#39FF14]",

  },
  {
    image: proj5,
    title: "Microservices Inventory System",
    description:
      "Developed a scalable inventory management system using ASP.NET Core and Docker, enhancing real-time tracking and order processing.",
      neonClass: "neon4",
      tech: ["ASP.NET Core", "Docker", "Entity Framework", "SQL Server",  "HTML", "CSS", "JavaScript", "ASP.NET Identity", "RESTful APIs", "Microservices Architecture"],
      subdescription: `Developed a highly scalable and efficient inventory management system leveraging ASP.NET Core, enabling real-time tracking, automated order processing, and seamless inventory updates. Implemented a microservices architecture with Docker for containerization, ensuring smooth deployment and scaling. Integrated Entity Framework for ORM, using SQL Server for data storage, allowing the system to manage large datasets with minimal latency. Utilized ASP.NET Core Web API for handling complex business logic and RESTful interactions between services, ensuring easy integration with external applications.

      Incorporated RabbitMQ for message-driven communication, enabling asynchronous processing and improving the system’s overall responsiveness under high-load scenarios. Developed an intuitive front-end with HTML, CSS, and JavaScript, ensuring an optimal user experience for inventory management. Optimized database queries and backend logic to handle a large number of simultaneous requests, providing consistent uptime and reliability. Successfully implemented a robust authentication system using ASP.NET Identity, securing sensitive data and ensuring compliance with industry standards.`,
      bgClass: "bg-[rgba(255,110,199,0.2)]",
      glowClass:"shadow-[0_0_10px_10px_#FF6EC7]",

  },
  {
    image: proj6,
    title: "Automated Analytics Dashboard",
    description:
      "Built a real-time analytics dashboard with ASP.NET Core and Angular, providing actionable insights and custom reporting.",
      neonClass: "neon5",
      tech: ["ASP.NET Core", "Angular", "SignalR", "Entity Framework", "SQL Server", "C#", "HTML", "CSS", "JavaScript", "RESTful APIs", "JWT", "ASP.NET Core Identity"],
      subdescription: `Designed and developed a real-time analytics dashboard using ASP.NET Core for the backend and Angular for the front-end, enabling users to view real-time data visualizations and insights. Utilized SignalR to implement real-time updates, ensuring that users receive immediate changes without refreshing the page. Created a custom reporting feature allowing users to generate dynamic reports based on selected filters and time ranges, ensuring flexibility and ease of use. Integrated with external data sources through RESTful APIs, facilitating seamless data flow and enabling actionable insights across different platforms.

      Developed advanced C# algorithms for data processing and calculations, ensuring high performance and accuracy. Optimized the backend by leveraging Entity Framework for efficient data retrieval from SQL Server, while adhering to best practices in data storage and access. Employed Angular components and services to create an interactive and user-friendly front-end interface, offering smooth navigation and real-time data rendering. Incorporated secure authentication using JWT and ASP.NET Core Identity, ensuring a robust and secure user experience while maintaining compliance with privacy standards.`,
      bgClass: "bg-[rgba(255,204,0,0.2)]",
      glowClass:"shadow-[0_0_10px_10px_#FFCC00]",

  },
];

const Projects4 = () => {
  const { Projects } = content;

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null);

  const handleReadMore = (project, index) => {
    if (loadingIndex !== null) return;
    setLoadingIndex(index);
    setTimeout(() => {
      setSelectedProject(project);
      setShowModal(true);
      setLoadingIndex(null);
    }, 100); // slight delay to prevent jitter
  };

  

  
  
  // console.log(selectedProject.neonClass);

  

  return (
    <section className="bg-bg_light_primary" id="Projects4">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
      <div>
          <h2 className="title" data-aos="fade-down">{Projects.title}</h2>
          <h4 className="subtitle" data-aos="fade-down">{Projects.subtitle}</h4>
        </div>

        <div className="flex items-center lg:flex-row flex-col-reverse gap-1">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={100}
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
            className="rounded-3xl pb-16 max-w-full drop-shadow-primary self-start"
          >
            {projectData.map((proj, index) => (
                <SwiperSlide
                key={index}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit max-w-[320px] mx-auto transition-transform duration-300"
              >
                <img src={proj.image} alt={proj.title} className="w-full rounded-lg" />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{proj.title}</h5>
                  <p className="font-Poppins text-sm text-gray-600">
                    {proj.description}
                  </p>
                  <button
                    className="font-bold text-gray-800"
                    onClick={() => handleReadMore(proj, index)}
                  >
                    Read More
                  </button>
                  {loadingIndex === index && (
                    <div className="flex justify-center mt-2">
                      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent border-gray-800"></div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modal Section */}
        {showModal && selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-5">
 <div className="bg-black bg-opacity-50 w-full h-full p-6 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lg">

 <div
  className="px-40"
  style={{ perspective: '1000px' }}
>
  <img
    src={selectedProject.image}
    alt={selectedProject.title}
    className={`w-[700px] h-[500px] object-cover rounded-xl ${selectedProject.glowClass}`}
    style={{
      transform: 'rotateY(15deg) rotateX(0deg)',
      transformStyle: 'preserve-3d',
    }}
  />
</div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-Poppins mb-3 mt-10">

                   <div className={selectedProject.neonClass}> {selectedProject.title} </div>
                  </h3>
                  <p className="text-gray-700 font-Poppins mt-6">
                  <div className={selectedProject.neonClass}> {selectedProject.description} </div>
                  </p>
                  
                  <div className="flex flex-wrap gap-2 my-3">
                  {selectedProject.tech.map((techItem, index) => (
                    <div
                      key={index}
                      className={`text-white px-4 py-1 rounded-xl text-sm font-medium shadow-md ${selectedProject.bgClass}`}
                    >
                      {techItem}
                    </div>
                    
                  ))}
                  
                </div>
                  <p className="text-gray-700 font-Poppins mt-10">
                  <div className={selectedProject.neonClass}> {selectedProject.subdescription} </div>
                  </p>
                </div>
                <div className="flex justify-end">
                <div className="flex justify-end mr-4">
                <button
                  className="mt-2 px-4 py-2 bg-white text-blue-900 rounded-lg hover:bg-gray-100 border border-blue-900 w-fit"
                  onClick={() => setShowModal(false)}
                >
                  Back
                </button>
              </div>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects4;
