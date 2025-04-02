
import React from 'react';

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md card-hover">
      <h3 className="text-xl font-semibold mb-4 text-navy-dark">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-gray-100 text-navy-dark px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"]
    },
    {
      title: "UI/UX & Design",
      skills: ["Responsive Design", "Figma", "CSS Animation", "Accessibility", "Design Systems", "UI Prototyping"]
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "Webpack", "Vite", "Jest", "npm/yarn", "VS Code", "CI/CD", "Vercel"]
    },
    {
      title: "Other Skills",
      skills: ["REST API", "GraphQL", "Performance Optimization", "Technical Writing", "SEO Basics", "Node.js"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-navy-dark">My Skills</h2>
          <div className="w-20 h-1 bg-teal mb-6 rounded"></div>
          <p className="text-gray-600 max-w-2xl text-center">
            I've worked with a variety of technologies in the web development world.
            Here's a quick overview of my technical skillset and tools I use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index} 
              title={category.title} 
              skills={category.skills} 
            />
          ))}
        </div>

        <div className="mt-16 bg-navy-light text-white p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">My Development Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-bold mb-2">User-Centered</h4>
              <p className="text-gray-300">I build websites with the end user in mind, focusing on usability and accessibility.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-bold mb-2">Clean Code</h4>
              <p className="text-gray-300">I believe in writing maintainable, well-documented code that's easy to understand.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-bold mb-2">Continuous Learning</h4>
              <p className="text-gray-300">The tech world evolves rapidly, and I'm committed to growing with it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
