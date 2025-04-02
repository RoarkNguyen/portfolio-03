
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2 text-navy-dark">About Me</h2>
          <div className="w-20 h-1 bg-teal mb-10 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-navy">My Journey</h3>
            <p className="text-gray-600 mb-4">
              Hello! I'm John, a passionate frontend developer with a keen eye for creating visually appealing and user-friendly web experiences. My journey in web development began during college when I built my first website, and I've been hooked ever since.
            </p>
            <p className="text-gray-600 mb-4">
              With 5+ years of experience, I've had the opportunity to work with various technologies and frameworks to deliver responsive, accessible, and performant web applications. I believe in writing clean, maintainable code that translates design into functional interfaces.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community engagement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-navy">Education & Experience</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-navy-dark">Senior Frontend Developer</h4>
              <p className="text-teal">TechCorp Inc. | 2020 - Present</p>
              <p className="text-gray-600 mt-2">
                Lead frontend development for multiple client projects, implementing modern web technologies and best practices.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-bold text-navy-dark">Frontend Developer</h4>
              <p className="text-teal">WebSolutions LLC | 2018 - 2020</p>
              <p className="text-gray-600 mt-2">
                Developed responsive web applications and collaborated with design team to implement UI/UX improvements.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-navy-dark">Bachelor of Computer Science</h4>
              <p className="text-teal">University of Technology | 2014 - 2018</p>
              <p className="text-gray-600 mt-2">
                Focused on web technologies and user interface design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
