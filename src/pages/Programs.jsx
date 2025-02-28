import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { FaBalanceScale, FaChartLine, FaHandsHelping, FaUsers, FaUtensils } from 'react-icons/fa';
import schoolFeeding from '../assets/images/schfeed.png';
import communityAgriculture from '../assets/images/onfarm.webp';
import transparency from '../assets/images/transp.jpg';
import stakeholder from '../assets/images/cabmeet.jpeg';
import monitoring from '../assets/images/ministerfood.jpg';
import heroImage from '../assets/images/fsc.jpeg';
import heroImage2 from '../assets/images/good.jpeg'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import Slider from 'react-slick';

const Programs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const programs = [
    {
      title: "School Feeding Program",
      description: "Providing nutritious daily meals to students across Ghana, improving attendance and learning outcomes through sustainable local food sourcing.",
      icon: <FaUtensils className="text-4xl text-green-700" />,
      image: schoolFeeding,
      category: "Food Security"
    },
    {
      title: "Community Agriculture",
      description: "Supporting local farmers and schools in developing sustainable agricultural practices to ensure food security.",
      icon: <FaHandsHelping className="text-4xl text-green-700" />,
      image: communityAgriculture,
      category: "Food Security"
    },
    {
      title: "Transparency Initiative",
      description: "Implementing digital tracking systems and open data practices to ensure accountability in program management.",
      icon: <FaBalanceScale className="text-4xl text-green-700" />,
      image: transparency,
      category: "Good Governance"
    },
    {
      title: "Stakeholder Engagement",
      description: "Facilitating collaboration between government agencies, schools, and communities for effective program implementation.",
      icon: <FaUsers className="text-4xl text-green-700" />,
      image: stakeholder,
      category: "Good Governance"
    },
    {
      title: "Monitoring & Evaluation",
      description: "Continuous assessment and improvement of program effectiveness through data-driven decision making.",
      icon: <FaChartLine className="text-4xl text-green-700" />,
      image: monitoring,
      category: "Good Governance"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Slider */}
      <div className="relative h-[40vh]">
        <Slider {...sliderSettings}>
          <div className="relative h-[40vh]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                url(${heroImage})`
              }}
            />
          </div>
          <div className="relative h-[40vh]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
                url(${heroImage2})`
              }}
            />
          </div>
        </Slider>
        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4" data-aos="fade-up">
              Our Programs
            </h1>
            <p className="text-xl text-white" data-aos="fade-up" data-aos-delay="200">
              Promoting Food Security and Good Governance in Ghana
            </p>
          </div>
        </div>
      </div>

      {/* Programs Sections */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Food Security Programs */}
          <div className="mb-16">
            <h2 
              className="text-3xl font-bold text-center mb-12 text-green-700"
              data-aos="fade-down"
            >
              Food Security Initiatives
            </h2>
            <div className="space-y-16">
              {programs
                .filter(program => program.category === "Food Security")
                .map((program, index) => (
                  <ProgramCard key={program.title} program={program} index={index} />
                ))}
            </div>
          </div>

          {/* Good Governance Programs */}
          <div className="mb-16">
            <h2 
              className="text-3xl font-bold text-center mb-12 text-green-700"
              data-aos="fade-down"
            >
              Good Governance Programs
            </h2>
            <div className="space-y-16">
              {programs
                .filter(program => program.category === "Good Governance")
                .map((program, index) => (
                  <ProgramCard key={program.title} program={program} index={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Program Card Component
const ProgramCard = ({ program, index }) => (
  <div
    className="grid md:grid-cols-2 gap-8 items-center"
    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
  >
    <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
      <div className="flex items-center gap-4">
        {program.icon}
        <h3 className="text-2xl font-bold text-gray-800">{program.title}</h3>
      </div>
      <p className="text-lg text-gray-600">{program.description}</p>
      <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
        Learn More
      </button>
    </div>
    <div 
      className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <img
        src={program.image}
        alt={program.title}
        className="rounded-lg shadow-lg w-full h-[300px] object-cover"
      />
    </div>
  </div>
);

export default Programs;