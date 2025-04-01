// import content
import { useEffect } from "react";
import { content } from "../Content";
import Typewriter from 'typewriter-effect';
import bg from "../assets/images/hero/homepage1.jpg";



const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden"  style={{
      backgroundImage: `url(${bg})`, 
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      

    }}>
     
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
     

        {/* first col */}
      
        <div className="pb-16 px-6 pt-5" data-aos="fade-up">
        <h1 style={{ color: "white" }} data-aos="fade-up">
         
          {hero.name}
        </h1>
        
       
        <h1  className="react-typewriter-text" >
          <Typewriter
            options={{
              strings: ["< Web Developer />"],
              autoStart: true,
              loop : false,
              pauseFor: 500000
            }}
           
          />
        </h1>
          
          
        <div className="flex flex-col gap-5 mt-5">
  {hero.hero_content.map((content, i) => (
    <div
      key={i}
      data-aos="fade-down"
      data-aos-delay={i * 300}
      className={`flex items-center w-80 gap-5 
        ${i === 1 && " flex-row-reverse text-right"}  
        ${i === hero.hero_content.length - 1 ? "mb-5" : ""}  {/* Add margin-bottom only for last item */}
      `}
    >
      <h3 style={{ color: "white", fontWeight: "400" }}>{content.count}</h3>
      <p style={{ color: "white ", fontWeight: "400" }}>{content.text}</p>
    </div>
  ))}
</div>
        </div>
        


        {/* sec col */}

      </div>
      
    </section>
  );
};

export default Hero;
