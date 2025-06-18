import React from 'react';

const ContactEducation = () => {
  return (
    <section id="contact" className="px-6 py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
          Education & Contact
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-yellow-400"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-left md:text-center">
          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold">Information Technology</h4>
                <p className="text-purple-100">Catholic University of East Africa</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Certifications</h4>
                <p className="text-purple-100">Full-Stack Web Development</p>
                <p className="text-purple-100">Flutter Development</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold">Phone</h4>
                <a href="tel:+254795314779" className="text-purple-100 hover:text-white transition">
                  +254 795 314 779
                </a>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Email</h4>
                <a href="mailto:barakaadan3@gmail.com" className="text-purple-100 hover:text-white transition">
                  barakaadan3@gmail.com
                </a>
              </div>
              <div className="pt-4">
                <a 
                  href="mailto:barakaadan3@gmail.com" 
                  className="inline-block bg-white text-purple-700 font-bold py-3 px-6 rounded-full hover:bg-purple-100 transition-all transform hover:scale-105 shadow-md"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEducation;