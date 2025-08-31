import React from 'react';
import { Truck, Package, Globe, Shield, CheckCircle, Leaf } from 'lucide-react';

const Service: React.FC = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Export Services',
      description: 'Comprehensive export solutions including documentation, logistics, and compliance management for international markets.',
      features: ['Customs clearance', 'Export documentation', 'International logistics', 'Quality certification']
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Packaging Solutions',
      description: 'Specialized packaging designed to maintain product freshness and quality during transportation.',
      features: ['Export-grade packaging', 'Temperature control', 'Hygienic handling', 'Custom labeling']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Distribution',
      description: 'Efficient distribution network ensuring timely delivery to markets worldwide.',
      features: ['Worldwide shipping', 'Cold chain management', 'Real-time tracking', 'Local partnerships']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes to meet international standards and customer expectations.',
      features: ['Quality inspections', 'Compliance testing', 'Certification support', 'Traceability systems']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-800 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Agricultural
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
              Export Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From farm to global markets, we provide end-to-end services ensuring the highest quality standards 
            and timely delivery of agricultural products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Service Icon */}
              <div className="bg-emerald-100 rounded-2xl p-4 w-fit mb-6 group-hover:bg-emerald-200 transition-colors">
                <div className="text-emerald-600">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Service Process</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamlined process ensuring quality and efficiency at every step of your agricultural export journey.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 rounded-2xl p-6 mb-4 mx-auto w-fit">
                <div className="text-2xl font-bold text-emerald-600">01</div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Consultation</h4>
              <p className="text-gray-600">Understanding your requirements and market needs</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-2xl p-6 mb-4 mx-auto w-fit">
                <div className="text-2xl font-bold text-emerald-600">02</div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Sourcing</h4>
              <p className="text-gray-600">Selecting the finest quality produce from trusted farmers</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-2xl p-6 mb-4 mx-auto w-fit">
                <div className="text-2xl font-bold text-emerald-600">03</div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Processing</h4>
              <p className="text-gray-600">Quality control, packaging, and certification</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-2xl p-6 mb-4 mx-auto w-fit">
                <div className="text-2xl font-bold text-emerald-600">04</div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Delivery</h4>
              <p className="text-gray-600">Efficient logistics and timely global delivery</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-green-400 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Export?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let us handle your agricultural export needs with our comprehensive services and expertise.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>Get Started Today</span>
              <CheckCircle className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;