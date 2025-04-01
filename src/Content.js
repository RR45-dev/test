// import images
import Hero_person from "./assets/images/Hero/person.png";
import Hero from "./assets/images/Hero/profile1.png";


import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import java from "./assets/images/Skills/java.png";
import js from "./assets/images/Skills/js.png";
import aspnet from "./assets/images/Skills/asp.net.png";
import sql from "./assets/images/Skills/sql.png";

import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";





import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import { CgCodeSlash } from "react-icons/cg";
import { IoDiamondOutline } from "react-icons/io5";





export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#projects",
      icon: BiUser,
    },
    {
      link: "#skills",
      icon: IoDiamondOutline,
    },
    {
      link: "#projects1",
      icon: CgCodeSlash,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    name: "Raghuram Yerramsetti",
    title: "Web Developer",
    
    
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  Abouts: {
    title: "About",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      }
    ],
  },
  About1: {
    about: "This is the about section text.",
    image: "path/to/image.jpg"
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "ASP .NET",
        para: "Developed secure, scalable web applications and RESTful APIs for businesses.",
        logo: aspnet,
      },
      {
        name: "React JS",
        para: "Built dynamic, interactive user interfaces with reusable components and hooks.",
        logo: reactjs,
      },
      {
        name: "Java",
        para: "Engineered backend systems with strong OOP principles and performance optimization.",
        logo: java,
      },
      {
        name: "SQL Server",
        para: "Designed and optimized complex database queries for efficient data management.",
        logo: sql,
      },
      {
        name: "nodejs",
        para: "Created fast, scalable backend services with Express and real-time functionality.",
        logo: nodejs,
      },
      {
        name: "Python",
        para: "Developed data-driven applications and optimized performance for large datasets.",
        logo: python,
      },
      {
        name: "HTML",
        para: "Developed structured, accessible, and SEO-friendly markup for web pages.",
        logo: html,
      },
      {
        name: "CSS",
        para: "Designed responsive, visually appealing layouts using modern styling techniques.",
        logo: css,
      },
      {
        name: "JS",
        para: "Enhanced web functionality with efficient, interactive, and dynamic scripting solutions.",
        logo: js,
      },
      {
        name: "JS",
        para: "Enhanced web functionality with efficient, interactive, and dynamic scripting solutions.",
        logo: js,
      }

    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    about:"About",
    subtitle: "MY CREATION",
    image: Hero,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "yraghuram799@gmail.com",
        icon: GrMail,
        link: "mailto:yraghuram799@gmail.com",
      },
      {
        text: "+15054605822",
        icon: MdCall,
        link: "https://wa.me/+15054605822",
      },
      {
        text: "RR45-dev",
        icon: GrMail,
        link: "https://github.com/RR45-dev",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
