import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
              Hi, I'm <span className="text-blue-600">Gurala Siva Teja Reddy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer | Tech Enthusiast
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="src/images/sivateja.jpg"
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;