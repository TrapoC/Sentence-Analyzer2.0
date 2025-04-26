import React from 'react';
import { BarChart3, LineChart, PieChart, MessageSquare } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare size={24} className="text-blue-500" />,
      title: 'Text Analysis',
      description: 'Accurately counts characters, words, and vowels in any sentence.'
    },
    {
      icon: <BarChart3 size={24} className="text-indigo-500" />,
      title: 'Real-time Results',
      description: 'Get instant feedback as you analyze your sentences.'
    },
    {
      icon: <PieChart size={24} className="text-purple-500" />,
      title: 'Vowel Recognition',
      description: 'Sophisticated algorithm to identify and count vowels in your text.'
    },
    {
      icon: <LineChart size={24} className="text-green-500" />,
      title: 'Syntax Validation',
      description: 'Ensures proper sentence structure with period validation.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Our Analyzer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trapo Sentence Analyzer is a powerful tool designed to help you understand the composition of your sentences through detailed analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-12 w-12 mx-auto flex items-center justify-center rounded-full bg-blue-50 dark:bg-gray-700 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Trapo, we're committed to creating intuitive tools that help users analyze and understand text more effectively. Our sentence analyzer is designed with simplicity and accuracy in mind.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Whether you're a writer, editor, or student, our tool provides valuable insights into your sentences' structure and composition.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Trapo?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Modern, intuitive interface</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Accurate analysis results</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Fast, responsive performance</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Continuous updates and improvements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;