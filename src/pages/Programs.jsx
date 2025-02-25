import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaChartLine, FaHandsHelping, FaUsers, FaUtensils } from 'react-icons/fa';

const Programs = () => {
  const programs = [
    {
      title: "School Feeding Program",
      description: "Providing nutritious daily meals to students across Ghana, improving attendance and learning outcomes through sustainable local food sourcing.",
      icon: <FaUtensils className="text-4xl text-green-700" />,
      image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop",
      category: "Food Security"
    },
    {
      title: "Community Agriculture",
      description: "Supporting local farmers and schools in developing sustainable agricultural practices to ensure food security.",
      icon: <FaHandsHelping className="text-4xl text-green-700" />,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
      category: "Food Security"
    },
    {
      title: "Transparency Initiative",
      description: "Implementing digital tracking systems and open data practices to ensure accountability in program management.",
      icon: <FaBalanceScale className="text-4xl text-green-700" />,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
      category: "Good Governance"
    },
    {
      title: "Stakeholder Engagement",
      description: "Facilitating collaboration between government agencies, schools, and communities for effective program implementation.",
      icon: <FaUsers className="text-4xl text-green-700" />,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      category: "Good Governance"
    },
    {
      title: "Monitoring & Evaluation",
      description: "Continuous assessment and improvement of program effectiveness through data-driven decision making.",
      icon: <FaChartLine className="text-4xl text-green-700" />,
      image: "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=2070&auto=format&fit=crop",
      category: "Good Governance"
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
          url('https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2037&auto=format&fit=crop')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Our Programs</h1>
            <p className="text-xl text-white">Promoting Food Security and Good Governance in Ghana</p>
          </div>
        </div>
      </motion.div>

      {/* Programs Sections */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Food Security Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Food Security Initiatives</h2>
            <div className="space-y-16">
              {programs
                .filter(program => program.category === "Food Security")
                .map((program, index) => (
                  <ProgramCard key={program.title} program={program} index={index} />
                ))}
            </div>
          </motion.div>

          {/* Good Governance Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Good Governance Programs</h2>
            <div className="space-y-16">
              {programs
                .filter(program => program.category === "Good Governance")
                .map((program, index) => (
                  <ProgramCard key={program.title} program={program} index={index} />
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Program Card Component
const ProgramCard = ({ program, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="grid md:grid-cols-2 gap-8 items-center"
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
    <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
      <img
        src={program.image}
        alt={program.title}
        className="rounded-lg shadow-lg w-full h-[300px] object-cover"
      />
    </div>
  </motion.div>
);

export default Programs;