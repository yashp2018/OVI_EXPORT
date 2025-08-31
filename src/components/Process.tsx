import React, { useEffect, useState } from 'react';
import { Sprout, Truck, Package, Globe, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start truck animation when component is visible
          const interval = setInterval(() => {
            setCurrentStep((prev) => (prev < 4 ? prev + 1 : 0));
          }, 2000);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('process');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const steps = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: 'Farm Selection',
      description: 'We partner with certified farmers in Nashik\'s fertile regions',
      details: ['Quality soil assessment', 'Farmer certification', 'Sustainable practices']
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Control',
      description: 'Rigorous quality checks at every stage of production',
      details: ['Pre-harvest inspection', 'Post-harvest grading', 'Export standards compliance']
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Processing & Packaging',
      description: 'State-of-the-art processing and export-grade packaging',
      details: ['Hygienic processing', 'Export-grade packaging', 'Cold chain maintenance']
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Logistics',
      description: 'Efficient transportation and timely delivery',
      details: ['Temperature-controlled transport', 'Real-time tracking', 'Documentation support']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Delivery',
      description: 'Safe delivery to international markets worldwide',
      details: ['Export documentation', 'Customs clearance', 'Final delivery confirmation']
    }
  ];

  // Calculate truck position based on current step
  const truckPosition = () => {
    const positions = ['0%', '25%', '50%', '75%', '100%'];
    return positions[currentStep];
  };

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            From Nashik's Fertile Lands to Global Tables
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures premium quality from farm to your doorstep
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line with Moving Truck */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-300 to-green-300 transform -translate-y-1/2">
            {/* Moving Truck */}
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-1000 ease-in-out"
              style={{ left: truckPosition() }}
            >
              <div className="bg-emerald-600 p-2 rounded-full shadow-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group ${
                  index === currentStep ? 'ring-4 ring-emerald-400 scale-105' : ''
                }`}>
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`bg-gradient-to-r from-emerald-500 to-green-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      index === currentStep ? 'scale-125' : ''
                    }`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4 mt-4">
                    <div className={`bg-gradient-to-r from-emerald-100 to-green-100 p-4 rounded-full group-hover:from-emerald-200 group-hover:to-green-200 transition-colors duration-300 ${
                      index === currentStep ? 'from-emerald-200 to-green-200 scale-110' : ''
                    }`}>
                      <div className={`text-emerald-600 transition-colors duration-300 ${
                        index === currentStep ? 'text-emerald-700' : ''
                      }`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      index === currentStep ? 'text-emerald-700' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center justify-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                            index === currentStep ? 'bg-emerald-500' : 'bg-emerald-400'
                          }`}></div>
                          <span className="text-sm text-gray-500">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 mb-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-300 to-green-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
            <div className="text-gray-600">Successful Exports</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
            <div className="text-gray-600">Quality Guarantee</div>
          </div>
        </div>

        {/* Animation Controls (optional) */}
        <div className="text-center mt-8">
          <button
            onClick={() => setCurrentStep((prev) => (prev > 0 ? prev - 1 : 4))}
            className="bg-emerald-500 text-white px-4 py-2 rounded-l-lg hover:bg-emerald-600 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep((prev) => (prev < 4 ? prev + 1 : 0))}
            className="bg-emerald-500 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;