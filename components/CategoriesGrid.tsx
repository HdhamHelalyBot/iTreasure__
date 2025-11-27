
import React from 'react';
import { categories } from '../lib/data';
import type { Language } from '../types';

interface CategoriesGridProps {
  t: {
    title: string;
  };
}

const CategoriesGrid: React.FC<CategoriesGridProps> = ({ t }) => {
  const language = document.documentElement.lang as Language || 'ar';
  
  return (
    <section id="categories" className="py-16 sm:py-20 bg-gray-100 dark:bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-secondary-dark dark:text-white">
          {t.title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              className="group block bg-white dark:bg-secondary-dark rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-primary-light/20 overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={category.imageUrl}
                alt={category.name[language]}
                className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-center font-semibold text-secondary-dark dark:text-gray-200 group-hover:text-primary-light dark:group-hover:text-primary-light transition-colors">
                  {category.name[language]}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
