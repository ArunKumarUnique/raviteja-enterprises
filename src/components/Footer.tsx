import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=100&h=100" 
                alt="Raviteja Enterprises Logo" 
                className="h-12 w-auto object-contain mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold">Raviteja Enterprises</h3>
                <p className="text-gray-400 text-sm">Electronics & Home Needs</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              Your trusted partner for electronics and home needs. Quality products at affordable prices, 
              serving Palakurthy and surrounding areas with excellence since 2015.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ravitejaenterprisesplk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-2xl hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/category/electronics" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Electronics
                </a>
              </li>
              <li>
                <a href="/category/furniture" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Furniture
                </a>
              </li>
              <li>
                <a href="/category/appliances" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Appliances
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="bg-blue-600 p-2 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-gray-300 block mb-2">4-116, Ghanpur Road, Palakurthy - 506252</span>
                  <a 
                    href="https://maps.app.goo.gl/fzXkirmu3YNR3Stn7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    View on Map <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="bg-green-600 p-2 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                  <Phone size={16} />
                </div>
                <a href="tel:+919949288805" className="text-gray-300 hover:text-white transition-colors">
                  +91 9949288805
                </a>
              </li>
              <li className="flex items-center group">
                <div className="bg-purple-600 p-2 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                  <Mail size={16} />
                </div>
                <a href="mailto:contact@ravitejaenterprises.store" className="text-gray-300 hover:text-white transition-colors">
                  contact@ravitejaenterprises.store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Clock size={16} className="mr-2 text-blue-400" />
              <span className="text-gray-300">Store Hours: All Days 9:00 AM - 9:00 PM</span>
            </div>
            
            <div className="flex items-center">
              <a 
                href="https://www.instagram.com/ravitejaenterprisesplk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mr-6"
              >
                <Instagram size={16} className="mr-2" />
                @ravitejaenterprisesplk
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 flex items-center justify-center">
              © 2025 Raviteja Enterprises. Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for our customers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;