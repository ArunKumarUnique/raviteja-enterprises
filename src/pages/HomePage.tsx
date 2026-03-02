import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Headphones, Sparkles } from 'lucide-react';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import { useApp } from '../context/AppContext';

const HomePage: React.FC = () => {
  const { searchQuery, filteredProducts } = useApp();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Trusted Since 2015
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Welcome to{' '}
                <span className="text-gradient">Raviteja</span>{' '}
                <span className="text-gradient">Enterprises</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your premium destination for electronics and home essentials. 
                Experience quality products, competitive pricing, and exceptional service 
                that has made us Palakurthy's most trusted retail partner.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/category/electronics"
                  className="btn-primary inline-flex items-center justify-center text-lg"
                >
                  Explore Electronics <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/category/appliances"
                  className="btn-secondary inline-flex items-center justify-center text-lg"
                >
                  View Appliances
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Support</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl transform rotate-3 opacity-30"></div>
                <img 
                  src="/owner-photo.jpg" 
                  alt="Kurapati Raj Kumar - Founder" 
                  className="relative z-10 w-80 h-96 lg:w-96 lg:h-[480px] object-cover rounded-3xl shadow-2xl border-4 border-white"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-1">Kurapati Raj Kumar</h3>
                  <p className="text-sm text-gray-600">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">
              Search Results for "{searchQuery}" 
              <span className="text-blue-600">({filteredProducts.length} items)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="card-modern overflow-hidden">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Enquire Now
                      </button>
                      <Link
                        to={`/category/${product.category}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View Category
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      {!searchQuery && <CategoryGrid />}

      {/* Featured Products */}
      {!searchQuery && <FeaturedProducts />}

      {/* Features Section */}
      {!searchQuery && (
        <>
          {/* About Section */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                    <Star className="w-4 h-4 mr-2" />
                    Our Story
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    With over 18 years of experience in the electronics and home appliances industry, 
                    Kurapati Raj Kumar founded Raviteja Enterprises with a vision to provide quality products 
                    at affordable prices to every household in Palakurthy and beyond.
                  </p>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Our unwavering commitment to customer satisfaction and genuine products has made us 
                    a trusted name throughout the region, building lasting relationships with families 
                    and businesses alike.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">18+ Years</div>
                        <div className="text-sm text-gray-600">Industry Experience</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
                        <Star className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">1000+</div>
                        <div className="text-sm text-gray-600">Satisfied Customers</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl transform rotate-6 opacity-50"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl transform -rotate-3 opacity-30"></div>
                    <img 
                      src="/owner-photo.jpg" 
                      alt="Kurapati Raj Kumar - Founder of Raviteja Enterprises" 
                      className="relative z-10 w-80 h-96 lg:w-96 lg:h-[480px] object-cover rounded-3xl shadow-2xl border-4 border-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We're committed to providing the best shopping experience with unmatched quality and service
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Star className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Products</h3>
                  <p className="text-gray-600 leading-relaxed">Only genuine and high-quality products from trusted brands and manufacturers</p>
                </div>

                <div className="text-center group">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Warranty Coverage</h3>
                  <p className="text-gray-600 leading-relaxed">Comprehensive warranty coverage on all products with reliable after-sales support</p>
                </div>

                <div className="text-center group">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">Quick and safe delivery to your doorstep across Palakurthy and nearby areas</p>
                </div>

                <div className="text-center group">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Headphones className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">24/7 Support</h3>
                  <p className="text-gray-600 leading-relaxed">Round-the-clock customer support for all your needs and queries</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default HomePage;