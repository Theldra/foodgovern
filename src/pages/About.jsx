import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaBullseye, FaChartLine, FaHandshake, FaLightbulb, FaStar, FaUsers } from 'react-icons/fa';
import aboutBack from '../assets/images/school.jpg';

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const values = [
    {
      icon: <FaUsers className="h-12 w-12 text-green-600" />,
      title: 'Community-Driven',
      description: 'Working together with local communities to create sustainable solutions'
    },
    {
      icon: <FaBullseye className="h-12 w-12 text-green-600" />,
      title: 'Impact-Focused',
      description: 'Measuring and maximizing our impact on food security and education'
    },
    {
      icon: <FaStar className="h-12 w-12 text-green-600" />,
      title: 'Excellence',
      description: 'Maintaining high standards in program implementation and governance'
    },
    {
      icon: <FaHandshake className="h-12 w-12 text-green-600" />,
      title: 'Collaboration',
      description: 'Building strong partnerships for effective program delivery'
    },
    {
      icon: <FaLightbulb className="h-12 w-12 text-green-600" />,
      title: 'Innovation',
      description: 'Embracing new approaches to solve complex challenges'
    },
    {
      icon: <FaChartLine className="h-12 w-12 text-green-600" />,
      title: 'Accountability',
      description: 'Ensuring transparency and responsible resource management'
    }
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20 overflow-hidden">
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] bg-cover bg-center"
        data-aos="fade"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
          url(${aboutBack})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="text-center text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto px-4">
              We are dedicated to improving food security and promoting good governance
              in Ghana's school feeding programs.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div
              data-aos="fade-right"
              className="bg-green-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-3xl font-bold text-green-700 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To ensure sustainable food security through effective school feeding programs
                and promote good governance practices in program implementation.
              </p>
            </div>

            <div
              data-aos="fade-left"
              className="bg-green-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-3xl font-bold text-green-700 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                A Ghana where every school child has access to nutritious meals and where
                food security programs are managed with transparency and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-4xl font-bold text-center text-green-700 mb-16"
            data-aos="fade-up"
          >
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;