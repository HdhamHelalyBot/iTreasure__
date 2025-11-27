
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoriesGrid from './components/CategoriesGrid';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Article from './components/Article';
import Footer from './components/Footer';
import { translations } from './lib/translations';
import type { Language, Theme } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'dark';
  });
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'ar';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ar' : 'en'));
  };

  const t = useMemo(() => translations[language], [language]);

  const appFont = language === 'ar' ? 'font-cairo' : 'font-sans';
  const bgColor = 'bg-white dark:bg-secondary-dark';
  const textColor = 'text-secondary-dark dark:text-gray-200';

  return (
    <div className={`${appFont} ${bgColor} ${textColor} transition-colors duration-300`}>
      <Header
        t={t.header}
        theme={theme}
        language={language}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />
      <main>
        <Hero t={t.hero} />
        <CategoriesGrid t={t.categories} />
        <FeaturedProducts t={t.featuredProducts} />
        <About t={t.about} />
        <Article t={t.article} />
      </main>
      <Footer t={t.footer} />
    </div>
  );
}

export default App;
