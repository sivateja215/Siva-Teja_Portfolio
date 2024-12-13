import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Contact Me</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <Mail className="h-6 w-6 text-blue-600 mr-4" />
              <span className="text-gray-800 dark:text-white">sivateja2515@gmail.com</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/siva-teja-reddy-gurala-94b243255/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <Linkedin className="h-6 w-6 text-blue-600 mr-4" />
              <span className="text-gray-800 dark:text-white">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;