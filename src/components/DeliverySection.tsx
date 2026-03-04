import React, { useState } from 'react';
import { Truck, MapPin, Clock, CheckCircle, Search } from 'lucide-react';

const DeliverySection: React.FC = () => {
  const [location, setLocation] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleLocationCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      setShowInfo(true);
    }
  };

  const deliveryAreas = [
    'Palakurthy Town',
    'Ghanpur',
    'Chityal',
    'Jangaon',
    'Raghunathpally',
    'Kodakandla',
    'Lingampally',
    'Bachannapet'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              Home Delivery Available
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fast & Reliable Delivery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your products delivered right to your doorstep across Palakurthy and nearby villages
            </p>
          </div>

          {/* Main Delivery Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Info */}
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Delivery Coverage</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 mb-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-800 font-semibold mb-2">
                          Home delivery available within Palakurthy town and nearby villages 
                          <span className="text-blue-600 font-bold"> (approx 10km radius)</span>
                        </p>
                        <p className="text-gray-600 text-sm">
                          Nominal charges apply based on distance and product size
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Same day delivery available</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Careful handling and packaging</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Installation service available</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Delivery timing: 9 AM - 7 PM</span>
                  </div>
                </div>

                {/* Location Check Form */}
                <form onSubmit={handleLocationCheck} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Check delivery availability for your area
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter your village name or pincode"
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-300 text-lg"
                      />
                      <MapPin className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Check Delivery
                  </button>
                </form>

                {/* Info Message */}
                {showInfo && location && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-2xl animate-fade-in">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <p className="text-blue-800 font-semibold mb-1">
                          Delivery Available for "{location}"
                        </p>
                        <p className="text-blue-700 text-sm">
                          We deliver to your area! Contact us for exact delivery charges and timing.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side - Coverage Areas */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Popular Delivery Areas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {deliveryAreas.map((area, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-blue-200" />
                        <span className="font-medium">{area}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <h4 className="font-bold mb-3 text-lg">Need Delivery?</h4>
                  <p className="text-blue-100 mb-4 text-sm">
                    Contact us for delivery scheduling and charges
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+919949288805"
                      className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300 text-center text-sm"
                    >
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/919949288805?text=Hi! I need delivery information."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 text-center text-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              <strong>Free delivery</strong> on orders above ₹5,000 within Palakurthy town limits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;