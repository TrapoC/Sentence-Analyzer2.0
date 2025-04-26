import React, { useState, useRef, useEffect } from 'react';
import { AlertCircle, Smile, PlayCircle } from 'lucide-react';

const AnalyzerCard: React.FC = () => {
  const [sentence, setSentence] = useState('');
  const [error, setError] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState({
    charCount: 0,
    wordCount: 0,
    vowelCount: 0
  });
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const analyzeSentence = () => {
    // Validate input (must end with a period)
    if (!sentence.endsWith('.')) {
      setError('Please enter a sentence that ends with a period (.)');
      return;
    }

    setError('');
    setIsAnalyzing(true);
    
    // Simulate a brief loading state to make the analysis feel more sophisticated
    setTimeout(() => {
      // Initialize counters
      let charCount = 0;
      let wordCount = 0;
      let vowelCount = 0;

      // Define vowels (both lowercase and uppercase)
      const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

      // Flag to track if we're in a word (for the first word)
      let inWord = false;

      // Process each character
      for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Stop at the period
        if (char === '.') {
          break;
        }

        // Increment character count
        charCount++;

        // Count vowels
        if (vowels.includes(char)) {
          vowelCount++;
        }

        // Count words (words are separated by a single space)
        if (char === ' ') {
          if (inWord) {
            // If we were in a word, the space marks the end of it
            inWord = false;
          }
        } else {
          if (!inWord) {
            // If we weren't in a word, this character starts a new word
            wordCount++;
            inWord = true;
          }
        }
      }

      setResults({ charCount, wordCount, vowelCount });
      setShowResults(true);
      setIsAnalyzing(false);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      analyzeSentence();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:shadow-2xl">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Sentence Analyzer
          </h2>
          
          <div className="mb-6">
            <label htmlFor="sentence" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Enter a sentence ending with a period:
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                id="sentence"
                value={sentence}
                onChange={(e) => setSentence(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your sentence here..."
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {error && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                  <AlertCircle size={18} />
                </div>
              )}
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-500 flex items-center gap-1 animate-fadeIn">
                <AlertCircle size={14} /> {error}
              </p>
            )}
          </div>
          
          <button
            onClick={analyzeSentence}
            disabled={isAnalyzing || sentence.length === 0}
            className={`w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
              isAnalyzing || sentence.length === 0
                ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed text-gray-500 dark:text-gray-400'
                : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:-translate-y-1'
            }`}
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                Analyzing...
              </>
            ) : (
              <>
                <PlayCircle size={20} />
                Analyze
              </>
            )}
          </button>
          
          {showResults && (
            <div className="mt-8 space-y-4 animate-fadeIn">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Characters</h3>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{results.charCount}</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Words</h3>
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{results.wordCount}</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Vowels</h3>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{results.vowelCount}</p>
              </div>
              
              <div className="flex justify-center mt-6">
                <Smile size={24} className="text-green-500" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyzerCard;