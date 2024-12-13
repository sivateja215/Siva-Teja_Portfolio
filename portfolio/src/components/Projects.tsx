import React from 'react';
import { Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Bus Ticket Booking Application",
      description: "A Python full-stack web application built with Django",
      technologies: ["Django", "Python"],
    },
    {
      title: "Online Art Gallery",
      description: "A MERN stack web application built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://online-art-gallery-nine.vercel.app/"
    },
    {
      title: "Indian Culture and Heritage Management System",
      description: "A Java full-stack web application built with React and Spring",
      technologies: ["React", "Spring", "SQL"],
      demo: "https://indiancultureandheritagemanagementsystem.up.railway.app"
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;