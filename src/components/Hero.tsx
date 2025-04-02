
import React from 'react';
import { ArrowDown, GitHub, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative pt-16 pb-10"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="mb-4">
            <span className="text-teal font-mono">Hello, my name is</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-navy-dark">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-600">
            I build things for the <span className="highlight-text">web</span>.
          </h2>
          <p className="text-gray-600 max-w-lg mb-8">
            I'm a frontend developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex space-x-4">
            <Button asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          <div className="flex items-center space-x-6 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-600 hover:text-teal transition-colors">
              <GitHub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-600 hover:text-teal transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="text-gray-600 hover:text-teal transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal shadow-xl float-animation">
            <div className="w-full h-full bg-gradient-to-br from-navy via-navy-light to-teal-dark flex items-center justify-center">
              <span className="text-white text-6xl font-bold">JD</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
        <a href="#about" aria-label="Scroll down" className="text-gray-400 hover:text-teal transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
