import React from 'react';
import { Shield, Clock, CloudRain, LineChart, Truck, AlertTriangle } from 'lucide-react';
import { motion } from './ui/motion';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <motion
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy Compliant",
      description: "Only broadcasts unique IDs without personal data. Fully anonymizable for privacy compliance."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-Time Monitoring",
      description: "Continuous speed monitoring with immediate data processing and feedback."
    },
    {
      icon: <CloudRain className="w-6 h-6" />,
      title: "All-Weather Operation",
      description: "Functions reliably in any weather condition, from heavy rain to dense fog and bright sunlight."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Accurate Analytics",
      description: "Precise speed calculations and comprehensive traffic pattern analysis."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fleet Management",
      description: "Specialized features for commercial fleet tracking and management."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Violation Alerts",
      description: "Instant notifications for speed violations to appropriate authorities."
    }
  ];

  return (
    <section id="features" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MTraffic combines advanced RFID technology with intelligent software to deliver 
            a comprehensive speed monitoring solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;