import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="ml-2 text-lg font-semibold">Upper East Aide</span>
            </div>
            <p className="text-gray-400">
              Professional home health care services in New York's Upper East Side.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">24/7 Care</li>
              <li className="text-gray-400">Personal Care</li>
              <li className="text-gray-400">Household Help</li>
              <li className="text-gray-400">Companionship</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>(212) 555-0123</li>
              <li>contact@uppereastaide.com</li>
              <li>123 East 86th Street</li>
              <li>New York, NY 10028</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Upper East Aide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}