import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DemoSection: React.FC = () => {
  const [speeds, setSpeeds] = useState<number[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [averageSpeed, setAverageSpeed] = useState(0);

  useEffect(() => {
    // Generate random speeds between 40 and 90 km/h
    const initialSpeeds = Array.from({ length: 15 }, () =>
      Math.floor(Math.random() * 50) + 40
    );
    setSpeeds(initialSpeeds);
    setAverageSpeed(
      Math.round(initialSpeeds.reduce((a, b) => a + b, 0) / initialSpeeds.length)
    );

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Update speeds and average every 3 seconds
    const speedTimer = setInterval(() => {
      const newSpeed = Math.floor(Math.random() * 50) + 40;
      setSpeeds((prev) => {
        const next = [...prev.slice(1), newSpeed];
        setAverageSpeed(Math.round(next.reduce((a, b) => a + b, 0) / next.length));
        return next;
      });
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(speedTimer);
    };
  }, []);

  const getSpeedColor = (speed: number) => {
    if (speed > 80) return 'text-red-600';
    if (speed > 70) return 'text-amber-600';
    return 'text-green-600';
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Live Demo Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how MTraffic monitors and analyzes vehicle speeds in real-time.
            This simulation demonstrates the core functionality of our RFID tracking system.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="flex justify-between items-center bg-blue-600 text-white p-4">
              <div className="text-lg font-semibold">Highway Monitoring Station Demo</div>
              <div className="text-sm bg-blue-500 px-3 py-1 rounded-full">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              <div className="md:col-span-2">
                <div className="bg-gray-50 rounded-xl p-4 h-full">
                  <div className="font-medium text-gray-900 mb-3">Speed Readings (km/h)</div>
                  <div className="h-64 flex items-end">
                    {speeds.map((speed, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-blue-500 hover:bg-blue-600 transition-all rounded-t"
                          style={{
                            height: `${speed}%`,
                            opacity: 0.7 + (i / speeds.length) * 0.3,
                          }}
                        />
                        <div className="text-xs mt-1 text-gray-500">
                          {Math.floor(i === 0 ? -45 : -45 + i * 3)}s
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">Average Speed</div>
                  <div className={`text-3xl font-bold ${getSpeedColor(averageSpeed)}`}>
                    {averageSpeed} <span className="text-sm font-normal">km/h</span>
                  </div>
                  <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        averageSpeed > 80
                          ? 'bg-red-500'
                          : averageSpeed > 70
                          ? 'bg-amber-500'
                          : 'bg-green-500'
                      }`}
                      style={{ width: `${averageSpeed}%` }}
                    />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">Latest Readings</div>
                  <div className="space-y-2">
                    {speeds
                      .slice(-5)
                      .reverse()
                      .map((speed, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <div className="text-sm text-gray-700">
                            Vehicle #{Math.floor(Math.random() * 1000) + 1000}
                          </div>
                          <div className={`font-medium ${getSpeedColor(speed)}`}>
                            {speed} km/h
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">System Status</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="text-green-600 font-medium">Operational</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">RFID Readers: 4/4 Online</div>
                  <div className="mt-1 text-sm text-gray-500">Data Processing: Active</div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 p-4 bg-gray-50">
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div>Demo Mode: Simulated Traffic Data</div>
                <div>Refresh Rate: 3 seconds</div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
