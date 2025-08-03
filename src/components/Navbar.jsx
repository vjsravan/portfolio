// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar({ darkMode, setDarkMode }) {
  const sections = ['about','skills','projects','experience','education','hobbies','contact'];
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-xl font-bold dark:text-white">Jay Sravan Vadlamudi</div>
        <div className="flex items-center space-x-4">
          {sections.map(sec => (
            <Link
              key={sec}
              to={sec}
              smooth={true}
              className="cursor-pointer hover:text-blue-600 dark:text-gray-200 capitalize"
            >
              {sec}
            </Link>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}
