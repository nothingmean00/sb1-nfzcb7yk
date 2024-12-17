import React from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Upper East Aide</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-rose-600">Home</a>
            <a href="#services" className="text-gray-700 hover:text-rose-600">Services</a>
            <a href="#about" className="text-gray-700 hover:text-rose-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-600">Contact</a>
            <button className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-rose-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Contact</a>
            <button className="w-full text-left bg-rose-600 text-white px-3 py-2 rounded-md hover:bg-rose-700">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}