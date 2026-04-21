import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, ExternalLink, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [activeGalleryTab, setActiveGalleryTab] = useState('exterior');
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; embedId: string } | null>(null);

  // Store gallery images organized by category
  const galleryImages = {
    exterior: [
      { src: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg', caption: 'Store Front View' },
      { src: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg', caption: 'Building Exterior' },
      { src: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg', caption: 'Main Entrance' },
      { src: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg', caption: 'Parking Area' }
    ],
    interior: [
      { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', caption: 'Electronics Showroom' },
      { src: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg', caption: 'Appliances Section' },
      { src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg', caption: 'Product Display Area' },
      { src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg', caption: 'Customer Shopping Area' },
      { src: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg', caption: 'Home Appliances Corner' },
      { src: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg', caption: 'Electronics Display' }
    ],
    reception: [
      { src: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg', caption: 'Reception Desk' },
      { src: 'https://images.pexels.com/photos/1368343/pexels-photo-1368343.jpeg', caption: 'Customer Service Area' },
      { src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg', caption: 'Waiting Area' }
    ],
    service: [
      { src: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg', caption: 'Repair Workshop' },
      { src: 'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg', caption: 'Technical Tools' },
      { src: 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg', caption: 'Testing Equipment' },
      { src: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg', caption: 'Service Counter' }
    ]
  };

  // Video content (ready for CMS integration)
  const videos = {
    storeTour: [
      { title: 'Complete Store Walkthrough', duration: '3:45', thumbnail: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg', embedId: 'dQw4w9WgXcQ' }
    ],
    airCoolerRepair: [
      { title: 'Air Cooler Repair Process', duration: '5:20', thumbnail: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg', embedId: 'dQw4w9WgXcQ' },
      { title: 'Cooler Maintenance Tips', duration: '2:15', thumbnail: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg', embedId: 'dQw4w9WgXcQ' }
    ],
    testimonials: [
      { title: 'Customer Reviews & Feedback', duration: '4:30', thumbnail: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg', embedId: 'dQw4w9WgXcQ' }
    ]
  };

  const galleryTabs = [
    { id: 'exterior', name: 'Exterior', count: galleryImages.exterior.length },
    { id: 'interior', name: 'Interior', count: galleryImages.interior.length },
    { id: 'reception', name: 'Reception', count: galleryImages.reception.length },
    { id: 'service', name: 'Service Section', count: galleryImages.service.length }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Get in Touch</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8 font-medium">
              Visit our store or contact us for all your electronics and home needs
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're here to help you find the perfect products and provide exceptional service. 
              Located in the heart of Palakurthy, we're your trusted electronics partner.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us - choose what's most convenient for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Phone Card */}
            <div className="card-modern p-8 text-center group hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <Phone className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6">Speak directly with our team for immediate assistance</p>
              <a
                href="tel:+919949288805"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 mr-2" />
                +91 9949288805
              </a>
            </div>

            {/* Email Card */}
            <div className="card-modern p-8 text-center group hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <Mail className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">Send us your queries and we'll respond promptly</p>
              <a
                href="mailto:contact@ravitejaenterprises.store"
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="card-modern p-8 text-center group hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <Phone className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WhatsApp Business</h3>
              <p className="text-gray-600 mb-6">Quick chat support for instant responses</p>
              <a
                href="https://wa.me/919949288805?text=Hi! I'd like to know more about your products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps & Store Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Store</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Palakurthy, easily accessible with ample parking
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.8234567890123!2d79.1234567890123!3d17.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA3JzI0LjQiTiA3OcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Raviteja Enterprises Location"
                ></iframe>
                <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-1">Get Directions</h3>
                      <p className="text-blue-100 text-sm">Navigate to our store</p>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/fzXkirmu3YNR3Stn7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-600 font-bold py-2 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Information */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Store Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-2xl mr-4">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">4-116, Ghanpur Road<br />Palakurthy - 506252<br />Telangana, India</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-2xl mr-4">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Store Hours</h4>
                      <p className="text-gray-600">All Days: 9:00 AM - 9:00 PM<br />No lunch break<br />Open on all holidays</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-2xl mr-4">
                      <Instagram className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Follow Us</h4>
                      <a
                        href="https://www.instagram.com/ravitejaenterprisesplk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
                      >
                        @ravitejaenterprisesplk
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-2">Why Visit Us?</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• See products before you buy</li>
                    <li>• Expert advice from our team</li>
                    <li>• Immediate product availability</li>
                    <li>• Professional installation service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Store Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our modern showroom and service facilities
            </p>
          </div>

          {/* Gallery Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveGalleryTab(tab.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeGalleryTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.name} ({tab.count})
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {galleryImages[activeGalleryTab as keyof typeof galleryImages].map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
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

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our store tours, repair processes, and customer testimonials
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Store Tour Videos */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Store Tour</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.storeTour.map((video, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900">{video.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Air Cooler Repair Videos */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Air Cooler Repair Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.airCoolerRepair.map((video, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-red-600" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                        SPECIALIST
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900">{video.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Testimonials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.testimonials.map((video, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-green-600" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900">{video.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-xl">
              <p className="font-semibold text-center">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{selectedVideo.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;