import React, { useState } from 'react';
import { Phone, MessageCircle, Star, Package, Calendar, Globe, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  packaging: string;
  availability: string;
  varieties: string;
  specifications: string[];
  type: string;
  sugar: string;
  color: string;
  berrySize: string;
  preCooling: string;
}

const ProductShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Grapes",
      image: "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Fresh, juicy grapes with exceptional sweetness and quality. Perfect for export markets.",
      rating: 4.9,
      packaging: "5kg, 10kg cartons",
      availability: "Nov-Feb",
      varieties: "Thompson Seedless, Red Globe",
      specifications: [
        "Export grade quality",
        "Cold chain maintained",
        "Pesticide residue tested",
        "International standards"
      ],
      type: "Table Grapes",
      sugar: "18-22 Brix",
      color: "Green/Red/Black",
      berrySize: "18-22mm",
      preCooling: "Forced air cooling within 2 hours of harvest"
    },
    {
      id: 2,
      name: "Fresh Pomegranates",
      image: "https://images.pexels.com/photos/13623439/pexels-photo-13623439.jpeg",
      description: "Ruby red pomegranates packed with antioxidants and natural sweetness.",
      rating: 4.8,
      packaging: "3kg, 5kg cartons",
      availability: "Oct-Mar",
      varieties: "Bhagwa, Arakta",
      specifications: [
        "High antioxidant content",
        "Premium grade sorting",
        "Moisture controlled packaging",
        "Global GAP certified"
      ],
      type: "Pomegranate",
      sugar: "16-18 Brix",
      color: "Deep Red",
      berrySize: "N/A",
      preCooling: "Hydro cooling within 4 hours of harvest"
    },
    {
      id: 3,
      name: "Quality Onions",
      image: "https://images.pexels.com/photos/7129153/pexels-photo-7129153.jpeg",
      description: "Fresh, high-quality onions with excellent storage life and pungency.",
      rating: 4.7,
      packaging: "25kg, 50kg mesh bags",
      availability: "Year-round",
      varieties: "Red, White, Yellow",
      specifications: [
        "Long storage life",
        "Uniform size grading",
        "Low moisture content",
        "Export quality standards"
      ],
      type: "Onions",
      sugar: "5-7%",
      color: "Red/White",
      berrySize: "N/A",
      preCooling: "Room cooling within 6 hours of harvest"
    }
  ];

  const handleCall = () => {
    window.open('tel:+917028712888', '_self');
  };

  const handleWhatsApp = (productName: string) => {
    const message = `Hi! I'm interested in your ${productName}. Could you please provide more details about pricing and availability?`;
    const whatsappUrl = `https://wa.me/917028712888?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of export-quality agricultural products, carefully selected and processed 
            to meet international standards.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Product Image */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => openModal(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                {/* Product Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Package className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Packaging</p>
                      <p className="text-sm font-medium text-gray-800">{product.packaging}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Season</p>
                      <p className="text-sm font-medium text-gray-800">{product.availability}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Varieties</p>
                      <p className="text-sm font-medium text-gray-800">{product.varieties}</p>
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => openModal(product)}
                  className="w-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mb-4"
                >
                  View Detailed Specifications
                </button>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={handleCall}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </button>
                  <button
                    onClick={() => handleWhatsApp(product.name)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold">{selectedProduct.name}</h3>
                  <button 
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="h-64 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Type</h4>
                    <p>{selectedProduct.type}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Sugar Content</h4>
                    <p>{selectedProduct.sugar}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Color</h4>
                    <p>{selectedProduct.color}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Availability</h4>
                    <p>{selectedProduct.availability}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Berry Size</h4>
                    <p>{selectedProduct.berrySize}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Pre Cooling</h4>
                    <p>{selectedProduct.preCooling}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-700 mb-2">Description</h4>
                  <p className="text-gray-600">{selectedProduct.description}</p>
                </div>
                
                <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-emerald-700 mb-2">Quality Standards</h4>
                  <ul className="space-y-2">
                    {selectedProduct.specifications.map((spec, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                        <span className="text-gray-600">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={closeModal}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bulk Order Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Bulk Orders?</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Contact us for bulk quantity orders. We offer competitive rates 
            for wholesale and export requirements with custom packaging options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCall}
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call for Bulk Orders</span>
            </button>
            <button
              onClick={() => handleWhatsApp("bulk orders")}
              className="bg-green-500 hover:bg-green-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;