import React, { useState } from 'react';
import { X, MessageCircle, Phone, Mail, Send, User, MessageSquare } from 'lucide-react';
import { Product } from '../types';

interface EnquireModalProps {
  product: Product;
  onClose: () => void;
}

const EnquireModal: React.FC<EnquireModalProps> = ({ product, onClose }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    productName: product.name,
    queryMessage: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in ${product.name}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/919949288805?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+919949288805';
    onClose();
  };

  const handleEmail = () => {
    const subject = `Inquiry about ${product.name}`;
    const body = `Hi,\n\nI'm interested in ${product.name}.\n\nCould you please provide more details including pricing and availability?\n\nThank you!`;
    const emailUrl = `mailto:contact@ravitejaenterprises.store?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
    onClose();
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate email sending (in production, this would call your backend API)
    try {
      // Create email content
      const emailSubject = `New Product Inquiry - ${formData.productName}`;
      const emailBody = `
New Product Inquiry Received

Product: ${formData.productName}
Customer Name: ${formData.customerName}
Phone Number: ${formData.phoneNumber}
Query: ${formData.queryMessage}

Please contact the customer at your earliest convenience.

Best regards,
Raviteja Enterprises Website
      `.trim();

      // In a real implementation, you would send this to your backend
      // For now, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Email would be sent with:', {
        to: 'contact@ravitejaenterprises.store',
        subject: emailSubject,
        body: emailBody
      });

      setIsSubmitted(true);
      
      // Close modal after showing success message
      setTimeout(() => {
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Error sending inquiry:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-xl transition-all duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Product Info */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg shadow-md"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              </div>
            </div>
          </div>

          {!showContactForm && !isSubmitted ? (
            <>
              <p className="text-gray-600 mb-6 text-center">
                Choose your preferred way to get in touch with us
              </p>

              {/* Contact Options */}
              <div className="space-y-3">
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Chat</span>
                </button>

                <button
                  onClick={handlePhoneCall}
                  className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </button>

                <button
                  onClick={handleEmail}
                  className="w-full flex items-center justify-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Mail size={20} />
                  <span>Send Email</span>
                </button>

                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Send size={20} />
                  <span>Contact Form</span>
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  We'll respond within 24 hours
                </p>
              </div>
            </>
          ) : isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-green-600 text-2xl">✓</div>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">Inquiry Sent Successfully!</h3>
              <p className="text-gray-600 mb-4">
                Thank you for your interest in {product.name}. We'll contact you soon with more details.
              </p>
              <p className="text-sm text-gray-500">
                This modal will close automatically...
              </p>
            </div>
          ) : (
            <>
              {/* Contact Form */}
              <div className="mb-4">
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                >
                  ← Back to options
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare size={16} className="inline mr-2" />
                    Your Query
                  </label>
                  <textarea
                    name="queryMessage"
                    value={formData.queryMessage}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Please describe what you'd like to know about this product..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-semibold transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquireModal;