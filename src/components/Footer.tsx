
import React from 'react';
import { GitHub, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold flex items-center space-x-2">
              <span className="text-teal">&lt;</span>
              <span>Dev</span>
              <span className="text-teal">/&gt;</span>
            </a>
            <p className="text-gray-400 mt-2">Frontend Developer</p>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-4 text-center md:text-left">Quick Links</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#home" className="text-gray-400 hover:text-teal transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-teal transition-colors">About</a>
              <a href="#skills" className="text-gray-400 hover:text-teal transition-colors">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-teal transition-colors">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-teal transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-center md:text-left">Connect</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 hover:text-teal transition-colors">
                <GitHub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="text-gray-400 hover:text-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:john.doe@example.com" aria-label="Email" className="text-gray-400 hover:text-teal transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed and built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
