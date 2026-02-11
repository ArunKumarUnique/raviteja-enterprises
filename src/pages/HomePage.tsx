import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Headphones } from 'lucide-react';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import { useApp } from '../context/AppContext';

const HomePage: React.FC = () => {
  const { searchQuery, filteredProducts } = useApp();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to Raviteja Enterprises
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Your one-stop destination for electronics and home needs. 
                Quality products, competitive prices, and excellent service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/category/electronics"
                  className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Shop Electronics <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/category/appliances"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center"
                >
                  View Appliances
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img 
                  src="/Screenshot_2026-02-12_at_12.50.06_AM.png" 
                  alt="Raviteja - Founder" 
                  className="relative z-10 w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
              Search Results for "{searchQuery}" ({filteredProducts.length} items)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-blue-900">
                        ₹{product.price.toLocaleString()}
                      </span>
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
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    With years of experience in the electronics and home appliances industry, 
                    Raviteja founded this enterprise with a vision to provide quality products 
                    at affordable prices to every household.
                  </p>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Our commitment to customer satisfaction and genuine products has made us 
                    a trusted name in Palakurthy and surrounding areas.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">10+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">1000+ Happy Customers</span>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl transform rotate-6"></div>
                    <img 
                      src="/Screenshot_2026-02-12_at_12.50.06_AM.png" 
                      alt="Raviteja - Founder of Raviteja Enterprises" 
                      className="relative z-10 w-80 h-96 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We're committed to providing the best shopping experience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
                  <p className="text-gray-600">Only genuine and high-quality products from trusted brands</p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Warranty</h3>
                  <p className="text-gray-600">Comprehensive warranty coverage on all products</p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-gray-600">Quick and safe delivery to your doorstep</p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Headphones className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock customer support for all your needs</p>
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