import React from 'react';
import { motion } from './ui/motion';

const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How MTraffic Technology Works</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              MTraffic uses passive UHF RFID technology to monitor vehicle speeds with unparalleled accuracy.
              The system operates through a network of strategically placed RFID readers along roadways.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">RFID Tag Detection</h3>
                  <p className="text-gray-600">
                    Each vehicle carries a passive UHF RFID tag that is detected by roadside readers
                    when passing through monitored zones.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Time Calculation</h3>
                  <p className="text-gray-600">
                    The system records precise timestamps as vehicles pass multiple readers
                    along a known distance.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Speed Computation</h3>
                  <p className="text-gray-600">
                    Using the distance between readers and the time elapsed, MTraffic calculates
                    the average speed with high precision.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Data Processing</h3>
                  <p className="text-gray-600">
                    The collected data is processed in real-time, allowing for immediate
                    alerts and comprehensive traffic analysis.
                  </p>
                </div>
              </div>
            </div>
          </motion>
          
          <motion
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-blue-600 rounded-2xl p-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700 opacity-50"></div>
              <div className="relative bg-white rounded-xl p-6">
                <div className="w-full h-64 mb-6 bg-gray-100 rounded-lg overflow-hidden relative">
                  {/* Road visualization */}
                  <div className="absolute inset-0 flex flex-col">
                    <div className="flex-grow bg-gray-300"></div>
                    <div className="h-20 bg-gray-500 flex items-center justify-between px-8">
                      <div className="w-full h-1 bg-white"></div>
                    </div>
                    <div className="flex-grow bg-gray-300"></div>
                  </div>
                  
                  {/* RFID Readers */}
                  <div className="absolute top-4 left-8 w-8 h-12 bg-blue-600 rounded"></div>
                  <div className="absolute top-4 right-8 w-8 h-12 bg-blue-600 rounded"></div>
                  
                  {/* Signal Lines */}
                  <div className="absolute top-10 left-16 w-32 h-1 bg-blue-400 animate-pulse origin-left"></div>
                  <div className="absolute top-10 right-16 w-32 h-1 bg-blue-400 animate-pulse origin-right"></div>
                  
                  {/* Car */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-blue-500 rounded-sm animate-car"></div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">System Advantages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mr-2">
                        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                      </span>
                      <span className="text-gray-700">Works in all weather conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mr-2">
                        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                      </span>
                      <span className="text-gray-700">Passive tags require no power source</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mr-2">
                        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                      </span>
                      <span className="text-gray-700">High accuracy and reliability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mr-2">
                        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                      </span>
                      <span className="text-gray-700">Privacy-preserving architecture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion>
        </div>
      </div>
    </section>
  );
};

export default Technology;