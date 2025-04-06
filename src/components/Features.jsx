import React from 'react';

const Features = ({ features }) => (
  <section className="py-16 bg-[#101012]">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Revolutionary Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-neutral-900 rounded-xl p-6 hover:bg-neutral-800 transition-all">
            <div className="bg-purple-600 p-3 rounded-lg inline-block mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;