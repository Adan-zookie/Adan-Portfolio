import React from 'react';

const About = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block">
          About Me
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-yellow-400"></span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          I'm a passionate developer focused on building tools that help communities, especially across Africa. 
          I work with modern stacks including C++, Python, Flutter, React, and more. 
          I value clean design and transparency in tech.
        </p>
      </div>
    </section>
  );
};

export default About;