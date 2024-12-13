import React from 'react';
import { FileText } from 'lucide-react';

const Certifications = () => {
  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      description: "Professional certification for AWS cloud development",
      certificateUrl: "/src/images/aws.pdf"
    },
    {
      title: "Red Hat Certified Enterprise Developer",
      issuer: "Red Hat Academy",
      description: "Professional certification for Red Hat Enterprise Developer",
      certificateUrl: "/src/images/redhat.pdf"
    },
    {
      title: "Salesforce AI Specialist",
      issuer: "Salesforce services",
      description: "Professional certification for Salesforce AI services",
      certificateUrl: "/src/images/salesforce.pdf"
    },
    {
      title: "Lingua Skill",
      issuer: "Cambridge English",
      description: "Professional Language certification from Cambridge",
      certificateUrl: "/src/images/lingua.pdf"
    },
    {
      title: "Java NPTEL Certificate",
      issuer: "NPTEL",
      description: "Professional java certification",
      certificateUrl: "/src/images/java.pdf"
    },
    // Add more certificates
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.issuer}</p>
              <p className="text-blue-600 dark:text-blue-400 mb-4">{cert.date}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{cert.description}</p>
              
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;