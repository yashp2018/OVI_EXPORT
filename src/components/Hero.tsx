import React from 'react';
import { ArrowRight, Leaf, Globe, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Agricultural fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-green-800/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center mt-16">
        <div className="max-w-4xl mx-auto">
         

          {/* Badge - Moved down */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 mt-4">
            <Leaf className="w-5 h-5 text-emerald-300" />
            <span className="text-white font-medium">Premium Agricultural Exports from Nashik</span>
          </div>
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            From Nashik's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-200">
              Fertile Lands
            </span>
            to Global Markets
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium quality grapes, pomegranates, and onions sourced directly from Maharashtra's finest farms. 
            Your trusted partner for agricultural exports worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#products"
              className="bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Get Quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Globe className="w-8 h-8 text-emerald-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8 text-emerald-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-300">Successful Exports</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Leaf className="w-8 h-8 text-emerald-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-300">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;