import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import { FaBalanceScale, FaChartLine, FaHandsHelping, FaUsers, FaUtensils } from 'react-icons/fa';
import schoolFeeding from '../assets/images/schfeed.png';
import communityAgriculture from '../assets/images/onfarm.webp';
import transparency from '../assets/images/transp.jpg';
import stakeholder from '../assets/images/cabmeet.jpeg';
import monitoring from '../assets/images/ministerfood.jpg';
import heroImage from '../assets/images/fsc.jpeg';
import heroImage2 from '../assets/images/good.jpeg';
import Aos from 'aos';

const Programs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides Data
  const slides = [
    {
      image: heroImage,
      overlay: 'rgba(0, 0, 0, 0.6)',
      title: 'Food Security Programs',
      subtitle: 'Ensuring Every Child Has Access to Nutritious Meals',
      description: 'Supporting schools and communities across Ghana'
    },
    {
      image: heroImage2,
      overlay: 'rgba(0, 0, 0, 0.2)',
      title: 'Good Governance',
      subtitle: 'Transparency in Action',
      description: 'Building sustainable and accountable systems'
    }
  ];

  // Programs Data
  const programs = [
    {
      category: "Food Security",
      title: "School Feeding Program",
      description: "Providing nutritious meals to school children across Ghana",
      icon: <FaUtensils className="w-6 h-6" />,
      image: schoolFeeding,
      imageCaption: "Students enjoying nutritious meals at school",
      highlights: [
        "Daily nutritious meals for students",
        "Local farmer participation",
        "Improved attendance rates"
      ]
    },
    {
      category: "Food Security",
      title: "Community Agriculture",
      description: "Supporting local farmers and sustainable agriculture",
      icon: <FaHandsHelping className="w-6 h-6" />,
      image: communityAgriculture,
      imageCaption: "Local farmers working in their fields",
      highlights: [
        "Farmer training programs",
        "Agricultural resources support",
        "Market access facilitation"
      ]
    },
    {
      category: "Good Governance",
      title: "Transparency Initiative",
      description: "Ensuring accountability in program implementation",
      icon: <FaBalanceScale className="w-6 h-6" />,
      image: transparency,
      imageCaption: "Transparent reporting and documentation",
      highlights: [
        "Regular auditing",
        "Public reporting",
        "Stakeholder engagement"
      ]
    },
    {
      category: "Good Governance",
      title: "Stakeholder Engagement",
      description: "Building strong partnerships with key stakeholders",
      icon: <FaUsers className="w-6 h-6" />,
      image: stakeholder,
      imageCaption: "Regular stakeholder meetings ensure program success",
      highlights: [
        "Government Agencies collaboration",
        "Local Community partnerships",
        "School Administrator coordination",
        "Farmer Association integration",
        "Development Partner engagement"
      ]
    },
    {
      category: "Good Governance",
      title: "Monitoring & Evaluation",
      description: "Tracking program impact and effectiveness",
      icon: <FaChartLine className="w-6 h-6" />,
      image: monitoring,
      imageCaption: "Program monitoring in action",
      highlights: [
        "Regular impact assessment",
        "Data-driven decisions",
        "Continuous improvement"
      ]
    }
  ];

  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });

    // Auto-slide functionality
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(${slide.overlay}, ${slide.overlay}), 
                url(${slide.image})`
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div className="max-w-4xl" data-aos="fade-up">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {slide.title}
                  <span className="block text-green-300 text-2xl md:text-4xl mt-2">
                    {slide.subtitle}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white opacity-90">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Navigation */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-green-700 w-6' 
                  : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Programs Grid */}
          {["Food Security", "Good Governance"].map((category) => (
            <div key={category} className="mb-16">
              <h2 
                className="text-3xl font-bold text-center mb-12 text-green-700"
                data-aos="fade-down"
              >
                {category} Programs
              </h2>
              <div className="space-y-16">
                {programs
                  .filter(program => program.category === category)
                  .map((program, index) => (
                    <ProgramCard 
                      key={program.title} 
                      program={program} 
                      index={index} 
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900">
              Want to Get Involved?
            </h2>
            <p className="text-lg text-gray-600">
              Join us in making a difference in Ghana's food security and governance
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-all hover:shadow-lg">
                Join Our Programs
              </button>
              <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-full hover:bg-green-700 hover:text-white transition-all">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Program Card Component
const ProgramCard = ({ program, index }) => {
  const [showHighlights, setShowHighlights] = useState(false);

  return (
    <div
      className="grid md:grid-cols-2 gap-4 items-start"
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
    >
      <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
        <div className="flex items-center gap-4 transform group-hover:translate-x-2 transition-transform">
          <div className="text-green-600 bg-green-50 p-4 rounded-full">
            {React.cloneElement(program.icon, { className: "w-8 h-8" })}
          </div>
          <h3 className="text-3xl font-bold text-gray-800">{program.title}</h3>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">{program.description}</p>
        
        {/* Highlights Section */}
        {showHighlights && (
          <div className="bg-green-50 p-6 rounded-lg border border-green-100 shadow-sm animate-slideDown mt-2">
            <ul className="space-y-3">
              {program.highlights?.map((highlight, i) => (
                <li 
                  key={i} 
                  className="flex items-center gap-3 text-lg text-gray-700 animate-fadeIn"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Learn More Button */}
        <button
          onClick={() => setShowHighlights(!showHighlights)}
          className="bg-green-700 text-white px-10 py-4 text-lg rounded-full hover:bg-red-600 transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-3 mt-4"
        >
          {showHighlights ? 'Show Less' : 'Learn More'}
          <svg 
            className={`w-5 h-5 transition-transform duration-300 ${showHighlights ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div 
        className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src={program.image}
          alt={program.title}
          className="rounded-lg shadow-lg w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-lg flex items-end p-8">
          <p className="text-white text-lg">{program.imageCaption}</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;