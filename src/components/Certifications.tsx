import React from 'react';
import { Award, Shield, CheckCircle, Globe, Leaf, Star } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      name: 'HACCP',
      description: 'Hazard Analysis Critical Control Points',
      icon: <Shield className="w-12 h-12" />,
      issuer: 'Food Safety Authority',
      validUntil: '2025',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      name: 'Global GAP',
      description: 'Good Agricultural Practices',
      icon: <Globe className="w-12 h-12" />,
      issuer: 'GlobalG.A.P. c/o FoodPLUS GmbH',
      validUntil: '2024',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 3,
      name: 'APEDA',
      description: 'Agricultural and Processed Food Products Export Development Authority',
      icon: <Award className="w-12 h-12" />,
      issuer: 'Government of India',
      validUntil: '2026',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 4,
      name: 'AGMARK',
      description: 'Agricultural Marketing Certification',
      icon: <CheckCircle className="w-12 h-12" />,
      issuer: 'Directorate of Marketing & Inspection, India',
      validUntil: '2025',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 5,
      name: 'FSSAI',
      description: 'Food Safety and Standards Authority of India',
      icon: <Star className="w-12 h-12" />,
      issuer: 'Government of India',
      validUntil: '2026',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 6,
      name: 'ISO 22000:2018',
      description: 'Food Safety Management System',
      icon: <Leaf className="w-12 h-12" />,
      issuer: 'International Organization for Standardization',
      validUntil: '2025',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }
  ];

  const qualityStandards = [
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every stage of production and processing',
      icon: <CheckCircle className="w-8 h-8 text-emerald-600" />
    },
    {
      title: 'Traceability',
      description: 'Complete farm-to-fork traceability for all our products',
      icon: <Globe className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Sustainability',
      description: 'Environmentally sustainable farming and processing practices',
      icon: <Leaf className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Food Safety',
      description: 'Strict adherence to international food safety standards',
      icon: <Shield className="w-8 h-8 text-purple-600" />
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-800 font-medium">Quality Certifications</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Certified Excellence in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
              Agricultural Exports
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality is backed by internationally recognized certifications 
            and rigorous compliance with global food safety standards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Certificate Icon */}
              <div className={`${cert.bgColor} rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={cert.iconColor}>
                  {cert.icon}
                </div>
              </div>

              {/* Certificate Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{cert.name}</h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Issued by:</span>
                    <span className="font-medium text-gray-700">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Valid until:</span>
                    <span className="font-medium text-gray-700">{cert.validUntil}</span>
                  </div>
                </div>
              </div>

              {/* Certificate Badge */}
              <div className={`bg-gradient-to-r ${cert.color} text-white py-2 px-4 rounded-lg text-center font-semibold`}>
                Certified & Verified
              </div>
            </div>
          ))}
        </div>

        {/* Quality Standards Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Quality Standards</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of quality, safety, and sustainability 
              in all our agricultural export operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-6 mb-4 group-hover:bg-gray-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    {standard.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{standard.title}</h4>
                  <p className="text-gray-600">{standard.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-green-400 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Trust in Our Quality</h3>
            <p className="text-lg mb-6 opacity-90">
              Our certifications ensure that you receive only the highest quality agricultural products 
              that meet international standards.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>Get Certified Products</span>
              <CheckCircle className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;