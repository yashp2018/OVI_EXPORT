import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/33596704/pexels-photo-33596704.jpeg",
      category: 'farm',
      title: 'Our Organic Farm',
      description: 'A view of our sustainable farming operations in Nashik'
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/39351/purple-grapes-vineyard-napa-valley-napa-vineyard-39351.jpeg",
      category: 'products',
      title: 'Fresh Grapes Harvest',
      description: 'Premium quality grapes ready for export'
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/13623439/pexels-photo-13623439.jpeg",
      category: 'products',
      title: 'Pomegranates',
      description: 'Ruby red pomegranates packed with antioxidants'
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/7728074/pexels-photo-7728074.jpeg",
      category: 'processing',
      title: 'Quality Control',
      description: 'Rigorous quality checks at our processing facility'
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/6229950/pexels-photo-6229950.jpeg",
      category: 'team',
      title: 'Our Farming Team',
      description: 'Dedicated farmers working in our fields'
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: 'logistics',
      title: 'Export Packaging',
      description: 'Careful packaging for international shipping'
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/12324202/pexels-photo-12324202.jpeg",
      category: 'certifications',
      title: 'Quality Certifications',
      description: 'Our internationally recognized quality certifications'
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/22668490/pexels-photo-22668490.jpeg",
      category: 'products',
      title: 'Fresh Onions',
      description: 'High-quality onions ready for export markets'
    },
    {
      id: 9,
      src: "./founder.jpg",
      category: 'team',
      title: 'Our Founder',
      description: 'Vikram Berad, Founder & Director'
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'farm', name: 'Farm' },
    { id: 'products', name: 'Products' },
    { id: 'processing', name: 'Processing' },
    { id: 'team', name: 'Team' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'certifications', name: 'Certifications' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    
    setSelectedImage(filteredItems[newIndex].id);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our operations, from farm to table, and see how we maintain quality at every step.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer bg-white"
              onClick={() => openLightbox(item.id)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="max-w-4xl w-full max-h-full flex items-center justify-center">
              <div className="relative">
                <img
                  src={filteredItems.find(item => item.id === selectedImage)?.src}
                  alt={filteredItems.find(item => item.id === selectedImage)?.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="text-white text-center mt-4">
                  <h3 className="text-xl font-bold">
                    {filteredItems.find(item => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-gray-300">
                    {filteredItems.find(item => item.id === selectedImage)?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-green-400 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">See Our Products in Person</h3>
            <p className="text-lg mb-6 opacity-90">
              Interested in seeing our operations firsthand? Contact us to schedule a visit to our farms and processing facilities.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>Schedule a Visit</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;