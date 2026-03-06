import React from 'react';
import { Star, Award, Users, Clock, CheckCircle, Heart, ArrowRight } from 'lucide-react';

const OwnerPage: React.FC = () => {
  const timelineEvents = [
    {
      year: '2005',
      title: 'The Beginning',
      description: 'Started with watch repair services, learning the fundamentals of precision and customer service.',
      icon: Clock,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2008',
      title: 'Audio Electronics Era',
      description: 'Expanded expertise to tape recorder repairs, mastering audio electronics and building technical skills.',
      icon: Star,
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '2012',
      title: 'Digital Transition',
      description: 'Moved into memory cards and modern electronics, adapting to the digital revolution.',
      icon: Award,
      color: 'from-green-500 to-green-600'
    },
    {
      year: '2015',
      title: 'Raviteja Enterprises Born',
      description: 'Founded Raviteja Enterprises with a vision to provide quality electronics at affordable prices.',
      icon: Users,
      color: 'from-orange-500 to-orange-600'
    },
    {
      year: '2025',
      title: 'Legacy Continues',
      description: '10+ years of enterprise excellence, serving thousands of satisfied customers across the region.',
      icon: Heart,
      color: 'from-red-500 to-red-600'
    }
  ];

  const coreValues = [
    {
      title: 'Trust',
      description: 'Building lasting relationships through honest business practices',
      icon: CheckCircle,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Quality',
      description: 'Only genuine products from trusted brands and manufacturers',
      icon: Star,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Customer First',
      description: 'Every decision is made with our customers\' best interests in mind',
      icon: Heart,
      color: 'bg-red-100 text-red-600'
    }
  ];

  const storeImages = [
    {
      src: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      caption: 'Modern Electronics Showroom'
    },
    {
      src: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg',
      caption: 'Home Appliances Section'
    },
    {
      src: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
      caption: 'Customer Service Area'
    },
    {
      src: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
      caption: 'Technical Service Center'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Our Founder
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient">Kurapati</span>{' '}
                <span className="text-gradient">Raj Kumar</span>
              </h1>
              
              <p className="text-2xl text-gray-600 mb-8 font-medium">
                18+ Years Retail & Service Legacy
              </p>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From humble beginnings repairing watches to building one of Palakurthy's most 
                trusted electronics enterprises, Raj Kumar's journey is a testament to dedication, 
                innovation, and unwavering commitment to customer satisfaction.
              </p>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">18+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                  <div className="text-sm text-gray-600 font-medium">Enterprise Years</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl transform rotate-3 opacity-30"></div>
                <img 
                  src="/owner-photo.jpg" 
                  alt="Kurapati Raj Kumar - Founder of Raviteja Enterprises" 
                  className="relative z-10 w-80 h-96 lg:w-96 lg:h-[480px] object-cover rounded-3xl shadow-2xl border-4 border-white"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-1">Kurapati Raj Kumar</h3>
                  <p className="text-sm text-gray-600">Founder & CEO</p>
                  <p className="text-xs text-blue-600 font-medium mt-1">Raviteja Enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of growth, learning, and building trust in the community
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={event.year} className={`flex items-center mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${event.color} mb-4`}>
                        {event.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 mx-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and interaction at Raviteja Enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 rounded-3xl ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Store Gallery */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Store</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our modern showroom and experience quality products with exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {storeImages.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold text-sm">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Experience the Difference</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Visit our store and discover why thousands of customers trust Raviteja Enterprises 
            for their electronics and home needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919949288805"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Call Now: +91 9949288805
            </a>
            <a
              href="https://wa.me/919949288805?text=Hi! I'd like to know more about your products."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              WhatsApp Us <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OwnerPage;