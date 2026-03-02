import React, { useState } from 'react';
import { ShoppingCart, Eye, CreditCard as Edit, Trash2, Star } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import InquiryModal from './InquiryModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const { isAdmin, deleteProduct } = useApp();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(product.id);
    }
  };

  return (
    <>
      <div className="card-modern overflow-hidden group">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 text-xs font-medium rounded-full shadow-lg">
              <Star className="w-3 h-3 inline mr-1" />
              Featured
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <span className="text-white font-semibold text-lg bg-red-600 px-4 py-2 rounded-full">
                Out of Stock
              </span>
            </div>
          )}
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex items-center justify-end mb-6">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              product.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <div className="flex gap-3">
            {product.inStock && (
              <button
                onClick={() => setShowInquiryModal(true)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
              >
                <ShoppingCart size={16} className="mr-2" />
                Enquire Now
              </button>
            )}
            
            {isAdmin && (
              <div className="flex gap-2">
                <button className="p-3 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                  <Edit size={16} />
                </button>
                <button 
                  onClick={handleDelete}
                  className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showInquiryModal && (
        <InquiryModal
          product={product}
          onClose={() => setShowInquiryModal(false)}
        />
      )}
    </>
  );
};

export default ProductCard;