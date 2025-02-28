import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaLeaf, FaUsers, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

  const faqs = [
    {
      question: "How does the school feeding program work?",
      answer: "Our school feeding program partners with local farmers and communities to provide nutritious daily meals to students across Ghana, improving both education outcomes and local food security."
    },
    {
      question: "How can schools participate in the program?",
      answer: "Schools can apply through their district education offices. We evaluate applications based on need and available resources to ensure sustainable program implementation."
    },
    {
      question: "What measures ensure program transparency?",
      answer: "We implement digital tracking systems, regular audits, and community oversight to maintain transparency and accountability in all our operations."
    },
    {
      question: "How can I contribute to the program?",
      answer: "You can contribute through volunteering, partnerships, or donations. Contact us to learn more about specific opportunities to support our mission."
    }
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
                <Link 
                  to="/programs"
                  className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
                >
                  Get Involved
                </Link>
                <Link 
                  to="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-green-700 transition-colors"
                >
                  Learn More
                </Link>
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

      {/* FAQs Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">FAQs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-red-600 mx-auto mt-4" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-700"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <FaChevronDown className="text-green-700 mt-1.5 flex-shrink-0 transform transition-transform group-open:rotate-180" />
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                  </summary>
                  <motion.div
                    initial={false}
                    animate={{ backgroundColor: "#fff" }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                </details>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
            <Link 
              to="/contact"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;