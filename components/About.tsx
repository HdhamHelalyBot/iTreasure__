
import React from 'react';

interface AboutProps {
  t: {
    businessTitle: string;
    businessText: string;
    aboutUsTitle: string;
    aboutUsText: string;
  };
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section className="py-16 sm:py-20 bg-gray-100 dark:bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-secondary-dark dark:text-white border-b-2 border-primary-light pb-2 mb-4">{t.businessTitle}</h2>
            <p>{t.businessText}</p>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-secondary-dark dark:text-white border-b-2 border-primary-light pb-2 mb-4">{t.aboutUsTitle}</h2>
            <p>{t.aboutUsText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
