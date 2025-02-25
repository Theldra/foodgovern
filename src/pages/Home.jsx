import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaUtensils } from 'react-icons/fa';

const Home = () => {
  const programs = [
    {
      title: 'School Feeding',
      description: 'Providing nutritious meals to students across Ghana',
      icon: <FaUtensils className="w-8 h-8 text-red-600" />,
    },
    {
      title: 'Food Security',
      description: 'Ensuring sustainable food systems and agricultural practices',
      icon: <FaLeaf className="w-8 h-8 text-green-700" />,
    },
    {
      title: 'Good Governance',
      description: 'Promoting transparency and efficiency in program management',
      icon: <FaUsers className="w-8 h-8 text-red-600" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with background image */}
      <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen">
        <div 
          className="absolute top-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
            url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1771&auto=format&fit=crop')`,
          }}
        />
        <div className="container relative mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold text-white mb-6"
              >
                Ensuring Food Security
                <span className="block text-green-300">for Ghana's Future</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-xl text-white max-w-3xl mx-auto"
              >
                Supporting school feeding programs and promoting good governance
                for a healthier, more prosperous Ghana.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 flex justify-center gap-4"
              >
                <button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
                  Get Involved
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-green-700 transition-colors">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">Our Programs</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mt-4" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-700"
              >
                <div className="flex justify-center mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-16">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "1M+", text: "Students Fed", color: "text-green-700" },
                { number: "500+", text: "Schools Supported", color: "text-red-600" },
                { number: "16", text: "Regions Covered", color: "text-green-700" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.text}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className={`text-5xl font-bold ${stat.color}`}>{stat.number}</div>
                  <p className="mt-2 text-gray-600 text-lg">{stat.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;