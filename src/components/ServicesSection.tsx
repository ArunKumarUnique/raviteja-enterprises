import React from 'react';
import { Zap, Fan, Wind, Snowflake, Blender, Wrench, Star } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Ceiling Fan Wiring',
      description: 'Professional ceiling fan installation and wiring services with safety guarantee',
      icon: Fan,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      featured: false
    },
    {
      id: 2,
      title: 'Table Fan Wiring',
      description: 'Expert table fan repair and wiring solutions for all brands',
      icon: Wind,
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      featured: false
    },
    {
      id: 3,
      title: 'Stand Fan Wiring',
      description: 'Complete stand fan wiring and maintenance services',
      icon: Fan,
      image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg',
      featured: false
    },
    {
      id: 4,
      title: 'Air Coolers Repair',
      description: 'Specialized air cooler repair and maintenance - Your cooling experts!',
      icon: Snowflake,
      image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
      featured: true,
      specialist: true
    },
    {
      id: 5,
      title: 'Mixer Repairs',
      description: 'Professional mixer grinder repair and servicing for all models',
      icon: Blender,
      image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg',
      featured: false
    },
    {
      id: 6,
      title: 'Installations',
      description: 'Complete electrical appliance installation services with warranty',
      icon: Wrench,
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Technical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional electrical and appliance services by experienced technicians. 
            Quality workmanship with warranty coverage for your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Specialist Badge */}
                  {service.specialist && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg animate-pulse">
                      <Star className="w-3 h-3 inline mr-1" />
                      SPECIALIST
                    </div>
                  )}

                  {/* Featured Badge */}
                  {service.featured && !service.specialist && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg">
                      <Star className="w-3 h-3 inline mr-1" />
                      FEATURED
                    </div>
                  )}

                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Get Service
                    </button>
                    
                    {service.specialist && (
                      <div className="text-right">
                        <div className="text-xs text-red-600 font-bold uppercase tracking-wide">Air Coolers</div>
                        <div className="text-xs text-red-500 font-medium">Specialist</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Need Professional Service?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Contact our expert technicians for reliable and affordable electrical services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919949288805"
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Call Now: +91 9949288805
              </a>
              <a
                href="https://wa.me/919949288805?text=Hi! I need technical service assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;