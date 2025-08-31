import React from 'react';
import { Users, Award, Truck, Globe, FlaskConical, Sprout } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 'founder',
      name: 'Vikram Berad',
      role: 'Founder & Director',
      description: 'A farmer son with deep roots in agriculture, Vikram leads the company with hands-on experience in farming and a strong vision for global trade. He started with local supply and expanded into national and now international markets, focusing on quality, farmer partnerships, and long-term growth.',
      icon: <Award className="w-12 h-20" />,
      image: "/founder.jpg",
      
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 'team1',
      name: 'Shubham Thete',
      role: 'Quality Control Manager',
      description: 'With over 10 years of experience in agricultural quality assurance, Rajesh ensures that all our products meet international standards. He oversees the entire quality control process from farm to packaging.',
      icon: <FlaskConical className="w-8 h-8" />,
      image: './SHubham.jpg',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
  ];

  const teamDepartments = [
    {
      id: 'coordinators',
      title: 'Farmer Network Coordinators',
      description: 'We work closely with a group of dedicated coordinators who manage relationships with our network of trusted farmers in the Nashik region. They ensure that crop quality, harvesting, and post-harvest practices meet export-grade requirements.',
      icon: <Sprout className="w-12 h-12" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      teamImage: 'https://images.pexels.com/photos/4963433/pexels-photo-4963433.jpeg'
    },
    {
      id: 'quality',
      title: 'Quality Control & Packaging Team',
      description: 'Our quality experts inspect every batch of grapes, pomegranates, onions, and vegetables for size, freshness, and safety. The packaging team ensures hygienic, damage-free packing for both domestic and export shipments.',
      icon: <FlaskConical className="w-12 h-12" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      teamImage: 'https://images.pexels.com/photos/5425821/pexels-photo-5425821.jpeg'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-800 font-medium">Meet Our Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At the heart of our export business is a passionate and skilled team committed to delivering 
            premium-quality produce with integrity and care. From soil to shipment, each member plays a 
            key role in ensuring that our grapes, pomegranates, onions, and other vegetables meet international standards.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Member Image */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-2xl transform rotate-3"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full h-64 object-cover rounded-2xl"
                />
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Departments */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {teamDepartments.map((department) => (
            <div
              key={department.id}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Department Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`${department.bgColor} rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={department.iconColor}>
                    {department.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{department.title}</h3>
                </div>
              </div>

              {/* Team Image */}
              <div className="mb-6">
                <img
                  src={department.teamImage}
                  alt={`${department.title} team`}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {department.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Values */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our team in delivering excellence every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-emerald-50 rounded-2xl p-6 mb-4 group-hover:bg-emerald-100 transition-colors">
                <div className="flex justify-center mb-4">
                  <Award className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Quality First</h4>
                <p className="text-gray-600">Uncompromising commitment to premium quality in every product we export</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-blue-50 rounded-2xl p-6 mb-4 group-hover:bg-blue-100 transition-colors">
                <div className="flex justify-center mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Farmer Partnership</h4>
                <p className="text-gray-600">Building lasting relationships with farmers based on trust and mutual growth</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-purple-50 rounded-2xl p-6 mb-4 group-hover:bg-purple-100 transition-colors">
                <div className="flex justify-center mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Global Vision</h4>
                <p className="text-gray-600">Connecting Nashik's finest produce with markets around the world</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-orange-50 rounded-2xl p-6 mb-4 group-hover:bg-orange-100 transition-colors">
                <div className="flex justify-center mb-4">
                  <Sprout className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h4>
                <p className="text-gray-600">Promoting sustainable farming practices for a better future</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-green-400 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Network</h3>
            <p className="text-lg mb-6 opacity-90">
              Interested in partnering with us? We're always looking for quality farmers and reliable partners.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>Contact Our Team</span>
              <Users className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;