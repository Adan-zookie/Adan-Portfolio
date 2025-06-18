import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactEducation from './components/ContactEducation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 min-h-screen text-white font-sans">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactEducation />
      <Footer />
    </div>
  );
}

export default App;