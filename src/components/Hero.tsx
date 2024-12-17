import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
          alt="Caregiver helping senior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional Home Health Care<br />on the Upper East Side
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Compassionate and reliable home health aides providing personalized care
            in the comfort of your own home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-rose-600 text-white px-8 py-3 rounded-md hover:bg-rose-700 text-lg font-medium">
              Schedule a Consultation
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 text-lg font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}