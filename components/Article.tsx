
import React from 'react';

interface ArticleProps {
  t: {
    title: string;
    excerpt: string;
    readMore: string;
  };
}

const Article: React.FC<ArticleProps> = ({ t }) => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-secondary-dark rounded-xl shadow-2xl dark:shadow-primary-light/10 overflow-hidden md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-56" src="https://picsum.photos/seed/article/400/600" alt="Tech article"/>
          </div>
          <div className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark dark:text-white mb-4">{t.title}</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">{t.excerpt}</p>
            <a href="#" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition duration-300">
              {t.readMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
