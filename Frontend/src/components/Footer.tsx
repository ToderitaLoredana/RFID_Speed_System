import React from 'react';
import { Activity, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
              <Activity className="h-8 w-8 text-blue-400" />
              <span>MTraffic</span>
            </div>
            <p className="text-gray-400 mb-6">
              Intelligent RFID Speed Tracking System for improved road safety and traffic management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Highway Monitoring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Urban Traffic Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Construction Zone Safety</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">School Zone Protection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fleet Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">White Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <div className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MTraffic. All rights reserved.
          </div>
          <div className="text-gray-500">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors mx-3 md:ml-6 md:mr-0">
              Terms
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors mx-3 md:ml-6 md:mr-0">
              Privacy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors mx-3 md:ml-6 md:mr-0">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;