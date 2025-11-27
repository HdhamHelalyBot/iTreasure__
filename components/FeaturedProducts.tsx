
import React from 'react';
import { featuredProducts } from '../lib/data';
import type { Language } from '../types';

interface FeaturedProductsProps {
  t: {
    title: string;
    details: string;
  };
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ t }) => {
  const language = document.documentElement.lang as Language || 'ar';

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-secondary-dark dark:text-white">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-secondary-dark rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl dark:hover:shadow-primary-light/20 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name[language]}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-secondary-dark dark:text-white group-hover:text-primary-light transition-colors">
                  {product.name[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {product.description[language]}
                </p>
                <a
                  href="#"
                  className="mt-auto self-start bg-transparent border-2 border-primary-light text-primary-light font-semibold py-2 px-5 rounded-full hover:bg-primary-light hover:text-white transition duration-300"
                >
                  {t.details}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
