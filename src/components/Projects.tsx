import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  reverse?: boolean;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  reverse = false,
}: ProjectProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <div className="overflow-hidden rounded-lg shadow-lg project-card">
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-auto transition-transform duration-500"
          />
        </div>
      </div>
      <div className={`${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <h3 className="text-2xl font-bold mb-3 text-navy-dark">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-navy px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <Button asChild variant="outline" size="sm">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
          <Button asChild size="sm">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing capabilities.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Firebase"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Blog Platform",
      description: "A modern blog platform with a clean design, powerful editor, and robust content management system for writers and publishers.",
      technologies: ["Next.js", "MDX", "Styled Components", "Prisma", "Vercel"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      reverse: true,
    },
    {
      title: "Weather Application",
      description: "A beautiful and intuitive weather app providing real-time forecasts, radar maps, and detailed weather information for locations worldwide.",
      technologies: ["Vue.js", "Vuex", "CSS Grid", "OpenWeather API", "Progressive Web App"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-navy-dark">Featured Projects</h2>
          <div className="w-20 h-1 bg-teal mb-6 rounded"></div>
          <p className="text-gray-600 max-w-2xl text-center">
            Here are some of my recent projects. Each project showcases different skills and technologies.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Check out more of my projects on GitHub</p>
          <Button asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mx-auto">
              <Github size={18} />
              <span>View GitHub Profile</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
