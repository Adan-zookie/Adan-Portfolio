import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <div className="animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
          Adan Baraka
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium">
          IT Expert | Full-Stack Developer | Designer
        </p>
        <a 
          href="#contact" 
          className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full hover:bg-purple-100 transition-all transform hover:scale-105 shadow-lg"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;