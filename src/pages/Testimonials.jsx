import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Working with this photographer was amazing! They captured our wedding perfectly. The attention to detail and creativity were outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      text: 'Professional, creative, and easy to work with. My corporate headshots turned out better than I expected. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      text: 'The family portrait session was wonderful. The photographer made everyone feel comfortable and the final images are beautiful.',
      rating: 5
    },
    {
      name: 'David Smith',
      text: 'Excellent event coverage for our company conference. They captured all the important moments and the editing was top-notch.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Client Testimonials</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900 dark:text-white">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
