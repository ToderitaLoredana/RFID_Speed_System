import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
interface CaseStudy {
  title: string;
  location: string;
  description: string;
  stats: {
    label: string;
    value: string;
    unit?: string;
  }[];
}

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      title: "Highway A-45 Deployment",
      location: "Munich, Germany",
      description: "Implementation of MTraffic along a 20km stretch of the A-45 highway resulted in significant improvements in traffic flow and reduction in speeding incidents.",
      stats: [
        { label: "Speed Violations", value: "32", unit: "% reduction" },
        { label: "Implementation Time", value: "3", unit: "weeks" },
        { label: "RFID Readers", value: "24", unit: "installed" },
        { label: "Data Accuracy", value: "99.8", unit: "%" }
      ]
    },
    {
      title: "Urban Traffic Management",
      location: "Barcelona, Spain",
      description: "City-wide deployment in Barcelona's central district has helped authorities monitor traffic patterns and enforce speed limits in dense urban areas.",
      stats: [
        { label: "Accidents", value: "28", unit: "% reduction" },
        { label: "Coverage Area", value: "15", unit: "km²" },
        { label: "Response Time", value: "3.5", unit: "min" },
        { label: "System Uptime", value: "99.9", unit: "%" }
      ]
    },
    {
      title: "Construction Zone Safety",
      location: "Toronto, Canada",
      description: "Temporary deployment in construction zones along Highway 401 has improved worker safety by ensuring vehicles maintain appropriate speeds.",
      stats: [
        { label: "Worker Safety", value: "45", unit: "% improved" },
        { label: "Mobile Units", value: "18", unit: "deployed" },
        { label: "Speed Compliance", value: "87", unit: "% increase" },
        { label: "Installation Time", value: "2", unit: "days" }
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how organizations around the world are using MTraffic to improve road safety
            and optimize traffic management.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-blue-600 text-white p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">{caseStudies[activeIndex].title}</h3>
                <span className="text-blue-100">{caseStudies[activeIndex].location}</span>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-8 leading-relaxed">
                {caseStudies[activeIndex].description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {caseStudies[activeIndex].stats.map((stat, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.unit}</div>
                    <div className="text-gray-700 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <button 
                  onClick={prevCase}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous Case
                </button>
                <div className="flex gap-1">
                  {caseStudies.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextCase}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Next Case
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;