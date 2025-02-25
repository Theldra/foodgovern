import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaGraduationCap, FaHandHoldingHeart, FaSchool, FaSeedling, FaUsers } from 'react-icons/fa';

const Impact = () => {
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
          url('https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=2070&auto=format&fit=crop')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Our Impact</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Making a difference in Ghana's education and food security since 2020
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-green-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                {stat.icon}
                <div className={`text-5xl font-bold ${stat.color} mt-4`}>{stat.number}</div>
                <p className="mt-2 text-gray-700 text-lg">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Key Achievements
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  {achievement.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our program has transformed communities and improved educational outcomes across Ghana.
              Here are some of our notable achievements since inception.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Educational Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Increased attendance rates by 40%</li>
                <li>• Improved academic performance in participating schools</li>
                <li>• Reduced dropout rates by 30%</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Community Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Created jobs for local food suppliers</li>
                <li>• Enhanced food security in rural areas</li>
                <li>• Strengthened community engagement in education</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;