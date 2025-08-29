import Link from 'next/link';
import React from 'react';

// Main App component
export default function App() {
  return (
    // Main container for the 404 page
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white text-gray-800 p-4 font-sans">
      
      {/* Container for the content */}
      <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center border border-white border-opacity-60 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        
        {/* Large 404 title */}
        <h1 
          className="text-8xl sm:text-9xl font-black text-blue-600 mb-2 sm:mb-4"
          style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)' }}
        >
          404
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-2">
          Page Not Found
        </h2>
        
        {/* Informative message */}
        <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-lg mx-auto">
          The page you are looking for doesn’t exist.
        </p>
        
        {/* Button to navigate back to the home page */}
        <Link
          href="/" 
          className="inline-block px-6 py-3 font-semibold text-base sm:text-lg text-white rounded-full bg-blue-600 shadow-md"
        >
          Go Back Home
        </Link>
      </div>
      
      {/* Subtle background animation */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-[-5%] left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-60 h-60 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}
