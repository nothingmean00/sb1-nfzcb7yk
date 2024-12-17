import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80"
              alt="Caring team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Upper East Aide?
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                With over 15 years of experience serving the Upper East Side community,
                we understand the importance of providing compassionate, professional
                care that maintains dignity and independence.
              </p>
              <p className="text-gray-600">
                Our carefully selected and thoroughly trained home health aides are
                passionate about what they do and are committed to providing the
                highest quality of care.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-rose-600 rounded-full mr-2"></span>
                  Licensed and bonded professionals
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-rose-600 rounded-full mr-2"></span>
                  Rigorous background checks
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-rose-600 rounded-full mr-2"></span>
                  Ongoing training and education
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-rose-600 rounded-full mr-2"></span>
                  Personalized care plans
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}