
import React from 'react';

interface FooterProps {
  t: {
    about: string;
    terms: string;
    privacy: string;
    rights: string;
  };
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-secondary-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-start">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-white">i</span><span className="text-primary-light">Treasure</span>
            </h3>
            <p className="text-gray-400 max-w-sm mx-auto md:mx-0">
              {t.about}
            </p>
          </div>
          <div className="md:col-span-2 flex justify-center md:justify-end">
             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 rtl:sm:space-x-reverse text-lg">
                <a href="#" className="hover:text-primary-light transition-colors">{t.terms}</a>
                <a href="#" className="hover:text-primary-light transition-colors">{t.privacy}</a>
             </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
