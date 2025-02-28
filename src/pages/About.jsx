import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaChartLine, FaHandshake, FaLightbulb, FaStar, FaUsers } from 'react-icons/fa';
import aboutBack from '../assets/images/school.jpg';

const About = () => {
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
          url(${aboutBack})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto px-4">
              We are dedicated to improving food security and promoting good governance
              in Ghana's school feeding programs.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-green-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-3xl font-bold text-green-700 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To ensure sustainable food security through effective school feeding programs
                and promote good governance practices in program implementation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-green-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-3xl font-bold text-green-700 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                A Ghana where every school child has access to nutritious meals and where
                food security programs are managed with transparency and efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-green-700 mb-16"
          >
            Our Values
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;