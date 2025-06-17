import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './utils/ThemeContext';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import Button from './components/Button';
import { useTheme } from './utils/ThemeContext';

const Home = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        Welcome to Task Manager
      </h1>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
        A simple and efficient way to manage your tasks
      </p>
      <Button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Button>
            </div>
  );
};

const About = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">About</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        This Task Manager application was built using React.js and Tailwind CSS. It demonstrates
        various React concepts including:
      </p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Component Architecture</li>
        <li>State Management with Hooks</li>
        <li>Context API for Theme Management</li>
        <li>Local Storage Integration</li>
        <li>Responsive Design with Tailwind CSS</li>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App; 