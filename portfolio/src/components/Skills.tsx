import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "HTML", "CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Java"]
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      category: "Tools",
      items: ["Git", "AWS", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;