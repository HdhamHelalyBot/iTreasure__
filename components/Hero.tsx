
import React from 'react';

interface HeroProps {
  t: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section 
      className="relative flex items-center justify-center h-[60vh] min-h-[400px] bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/tech/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
          {t.subtitle}
        </p>
        <a
          href="#categories"
          className="bg-primary-light hover:bg-primary text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;
