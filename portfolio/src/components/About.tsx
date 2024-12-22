import React from 'react';
import { FileText } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech",
      institution: "K L University",
      year: "2022-2026",
      description: "Pursuing Bachelor of Technology in Computer Science and Engineering."
    },
    {
      degree: "Intermediate",
      institution: "Aditya Junior College",
      year: "2020-2022",
      description: "Completed Intermediate education with a focus on Mathematics, Physics, and Chemistry (MPC)."
    },
    {
      degree: "SSC",
      institution: "Aditya School",
      year: "2020",
      description: "Completed Secondary School Certificate (SSC) under the Andhra Pradesh State Board."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">About Me</h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a passionate developer with expertise in full-stack development. 
            My journey in technology started with a curiosity to understand how things work, 
            which led me to pursue computer science. I love creating efficient solutions 
            and learning new technologies.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">Education Timeline</h3>
          <div className="relative">
            {education.map((edu, index) => (
              <div key={index} className="mb-8 flex">
                <div className="flex-1 ml-4">
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    <p className="text-blue-600 dark:text-blue-400">{edu.year}</p>
                    <p className="text-gray-500 dark:text-gray-400">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">My Resume</h3>
          <a
            href="/src/images/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <FileText className="mr-2" />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;