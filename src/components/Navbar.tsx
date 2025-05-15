import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white bg-opacity-90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
            <Activity className="h-8 w-8" />
            <span>MTraffic</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</Link>
          <Link href="#technology" className="text-gray-700 hover:text-blue-600 transition-colors">Technology</Link>
          <Link href="#case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">Case Studies</Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          <Link 
            href="#demo" 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            View Demo
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#technology" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Technology
            </Link>
            <Link 
              href="#case-studies" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="#demo" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              View Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;