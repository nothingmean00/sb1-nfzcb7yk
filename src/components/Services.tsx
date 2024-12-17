import React from 'react';
import { Clock, Heart, Home, Calendar } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Clock className="h-8 w-8 text-rose-600" />,
      title: "24/7 Care Available",
      description: "Round-the-clock support and assistance whenever you need it."
    },
    {
      icon: <Heart className="h-8 w-8 text-rose-600" />,
      title: "Personal Care",
      description: "Assistance with daily activities, hygiene, and medication management."
    },
    {
      icon: <Home className="h-8 w-8 text-rose-600" />,
      title: "Household Help",
      description: "Light housekeeping, meal preparation, and errands assistance."
    },
    {
      icon: <Calendar className="h-8 w-8 text-rose-600" />,
      title: "Flexible Scheduling",
      description: "Customizable care plans that fit your specific needs and schedule."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive home health care services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}