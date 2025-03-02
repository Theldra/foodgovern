import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaChartLine, FaChevronDown, FaGraduationCap, FaMapMarkerAlt, FaSchool, FaUsers, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import foodGovernance from '../assets/images/fsc.jpeg';
import feedingProgram from '../assets/images/feddem.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1771&auto=format&fit=crop',
      title: 'Food Security',
      subtitle: 'Creating resilient food systems across Ghana.'
      //description: 
    },
    {
      image: foodGovernance,
      title: 'Good Governance',
      subtitle: 'Setting the standard for program accountability.'
      //description: 
    },
    {
      image: feedingProgram,
      title: 'Nourishing Ghana\'s Future',
      subtitle: 'One School at a Time',
     // description: 'Empowering communities through sustainable school feeding programs.'
    }
   
  ];

  const programs = [
    {
      icon: <FaUtensils className="text-4xl text-green-600" />,
      title: "School Feeding",
      description: "Providing nutritious meals to students across Ghana."
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "Community Support",
      description: "Empowering local farmers and food suppliers."
    },
    {
      icon: <FaChartLine className="text-4xl text-green-600" />,
      title: "Good Governance",
      description: "Ensuring transparency in program management."
    }
  ];

  const faqs = [
    {
      question: "What is the School Feeding Program?",
      answer: "Our School Feeding Program provides nutritious daily meals to students across Ghana, supporting education and food security simultaneously."
    },
    {
      question: "How do you ensure program transparency?",
      answer: "We maintain strict monitoring and evaluation systems, regular audits, and public reporting to ensure full transparency in all our operations."
    },
    {
      question: "How can communities get involved?",
      answer: "Communities can participate through our local farmer integration program, volunteer opportunities, and various partnership initiatives."
    },
    {
      question: "What regions do you currently serve?",
      answer: "We currently operate in 16 regions across Ghana, reaching both urban and rural communities."
    }
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen overflow-hidden">
        {/* Hero Section with custom slider */}
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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                url(${slide.image})`
              }}
            />
            <div className="relative pt-20 flex items-center justify-center min-h-screen">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center" data-aos="fade-up">
                  <h1 className="text-5xl font-bold text-white mb-6">
                    {slide.title}
                    <span className="block text-green-300">{slide.subtitle}</span>
                  </h1>
                  <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
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

        {/* CTA Buttons */}
        <div className="absolute bottom-20 left-0 right-0 z-10">
          <div className="flex justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
            <Link 
              to="/programs"
              className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-green-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-16">Our Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={program.title}
                  className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-green-700 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-16">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                ["1M+", "Students Fed", <FaGraduationCap className="text-4xl text-green-600 mb-4" />],
                ["500+", "Schools", <FaSchool className="text-4xl text-green-600 mb-4" />],
                ["16", "Regions", <FaMapMarkerAlt className="text-4xl text-green-600 mb-4" />]
              ].map(([number, text, icon], index) => (
                <div
                  key={text}
                  className="text-center transform hover:-translate-y-1 transition-transform duration-500"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  {icon}
                  <div className="text-5xl font-bold text-green-700">{number}</div>
                  <p className="mt-2 text-gray-600 text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900">FAQs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-red-600 mx-auto mt-4" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-700"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <FaChevronDown className="text-green-700 mt-1.5 flex-shrink-0 transform transition-transform group-open:rotate-180" />
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 bg-white">
                    <p className="text-gray-600 leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
            <Link 
              to="/contact"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;