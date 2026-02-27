import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Armchair, 
  Utensils, 
  Zap, 
  Refrigerator, 
  ChefHat 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const iconMap = {
  Smartphone,
  Armchair,
  Utensils,
  Zap,
  Refrigerator,
  ChefHat
};

const CategoryGrid: React.FC = () => {
  const { categories, products } = useApp();

  const getCategoryProductCount = (categoryId: string) => {
    return products.filter(product => product.category === categoryId).length;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of quality electronics and home essentials, 
            carefully selected to meet all your household needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map(category => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const productCount = getCategoryProductCount(category.id);
            
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="card-modern p-8 text-center group hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{category.name}</h3>
                <p className="text-sm text-gray-500 font-medium">
                  {productCount} item{productCount !== 1 ? 's' : ''}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;