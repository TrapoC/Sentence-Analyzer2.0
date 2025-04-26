import React from 'react';
import AnalyzerCard from './AnalyzerCard';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Trapo Sentence Analyzer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A sophisticated tool that analyzes your sentences for character count, word count, and vowel frequency.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <AnalyzerCard />
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Scroll down to learn more
            </span>
          </div>
          <div className="animate-bounce bg-white dark:bg-gray-800 p-2 w-10 h-10 ring-1 ring-gray-200 dark:ring-gray-700 shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;