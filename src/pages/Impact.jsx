import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { FaChartLine, FaGraduationCap, FaHandHoldingHeart, FaSchool, FaSeedling, FaUsers } from 'react-icons/fa';
import impImage from '../assets/images/fdjoy.jpg';
import Aos from 'aos';

const Impact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const stats = [
    { 
      number: "1M+", 
      text: "Students Fed", 
      icon: <FaGraduationCap className="text-3xl text-green-600" />,
      color: "text-green-700"
    },
    { 
      number: "500+", 
      text: "Schools Supported", 
      icon: <FaSchool className="text-3xl text-green-600" />,
      color: "text-red-600"
    },
    { 
      number: "16", 
      text: "Regions Covered", 
      icon: <FaUsers className="text-3xl text-green-600" />,
      color: "text-green-700"
    }
  ];

  const achievements = [
    {
      title: "Improved Attendance",
      description: "School attendance has increased by 40% since the program's inception",
      icon: <FaChartLine className="text-4xl text-green-600" />
    },
    {
      title: "Local Agriculture",
      description: "Supporting over 1000 local farmers through our food sourcing initiative",
      icon: <FaSeedling className="text-4xl text-green-600" />
    },
    {
      title: "Community Engagement",
      description: "Partnered with 200+ community organizations for program implementation",
      icon: <FaHandHoldingHeart className="text-4xl text-green-600" />
    }
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20 overflow-hidden">
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        data-aos="fade"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
          url(${impImage})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="text-center text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="text-5xl font-bold mb-4">Our Impact</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Making a difference in Ghana's education and food security since 2020
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.text}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="bg-green-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                {stat.icon}
                <div className={`text-5xl font-bold ${stat.color} mt-4`}>{stat.number}</div>
                <p className="mt-2 text-gray-700 text-lg">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  {achievement.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our program has transformed communities and improved educational outcomes across Ghana.
              Here are some of our notable achievements since inception.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              data-aos="fade-right"
              className="bg-green-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Educational Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Increased attendance rates by 40%</li>
                <li>• Improved academic performance in participating schools</li>
                <li>• Reduced dropout rates by 30%</li>
              </ul>
            </div>
            <div
              data-aos="fade-left"
              className="bg-green-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Community Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Created jobs for local food suppliers</li>
                <li>• Enhanced food security in rural areas</li>
                <li>• Strengthened community engagement in education</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;