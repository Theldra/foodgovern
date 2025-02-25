import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen">
        <div 
          className="absolute top-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1771&auto=format&fit=crop')`,
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
              <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
                Supporting school feeding programs and promoting good governance
                for a healthier, more prosperous Ghana.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
                  Get Involved
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-green-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;