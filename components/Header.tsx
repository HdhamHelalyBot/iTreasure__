
import React from 'react';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { SearchIcon } from './icons/SearchIcon';
import { LanguageIcon } from './icons/LanguageIcon';
import type { Language, Theme } from '../types';

interface HeaderProps {
  t: {
    searchPlaceholder: string;
    search: string;
    toggleLanguage: string;
  };
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ t, theme, language, toggleTheme, toggleLanguage }) => {
  return (
    <header className="sticky top-0 z-50 bg-secondary-dark/80 dark:bg-black/80 backdrop-blur-sm shadow-lg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-bold tracking-wider">
              <span className="text-white">i</span><span className="text-primary-light">Treasure</span>
            </a>
          </div>

          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-full py-2 px-6 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition"
              />
              <button className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center px-4 text-gray-400 hover:text-primary-light">
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center p-2 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition"
              aria-label="Toggle language"
            >
                <LanguageIcon />
                <span className="mx-2 font-semibold text-sm">{t.toggleLanguage}</span>
            </button>
          </div>
        </div>
        <div className="md:hidden pt-2 pb-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-full py-2 px-6 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition"
              />
              <button className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center px-4 text-gray-400 hover:text-primary-light">
                <SearchIcon />
              </button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
