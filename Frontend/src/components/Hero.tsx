import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './ui/Link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-80 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">

          {/* left column */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Intelligent RFID <span className="text-blue-600">Speed Tracking</span> System
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Monitor vehicle speeds in real-time with precision and reliability,
              regardless of weather or lighting conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#features"
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-center"
              >
                Explore Features
              </Link>
              <Link
                href="#technology"
                className="bg-white text-blue-600 border border-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors font-medium flex items-center justify-center gap-2 group"
              >
                How It Works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* right column */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
                <div className="bg-blue-600 rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-white font-semibold">Live Speed Monitoring</div>
                    <div className="bg-white text-blue-600 rounded-full px-3 py-1 text-sm font-medium">
                      Active
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {[65, 58, 72].map((speed, i) => (
                        <div key={i} className="bg-white rounded-lg p-3 text-center">
                          <div className="text-blue-600 font-bold text-xl">{speed}</div>
                          <div className="text-blue-600 text-xs">km/h</div>
                        </div>
                      ))}
                    </div>
                    <div className="h-32 relative">
                      {/* Simulated speed graph */}
                      <div className="absolute inset-0 flex items-end">
                        {[40, 60, 45, 70, 50, 65, 55, 75, 60, 50, 65, 55].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 mx-0.5 bg-blue-300"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Highway Section A-12</div>
                  <div className="text-sm text-gray-500">Updated: Just Now</div>
                </div>
              </div>

              {/* background blurs */}
              <div className="absolute -z-10 -top-8 -right-8 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-50" />
              <div className="absolute -z-10 -bottom-10 -left-6 w-36 h-36 bg-blue-300 rounded-full blur-3xl opacity-40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
