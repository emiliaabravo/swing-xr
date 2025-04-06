import React from 'react';
import { Download } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Header = ({ activeSection, setActiveSection }) => {
    const handleDownload = () => {
      alert("Coming soon: Dev Kit download for Swing XR");
    };
  
    return (
      <header className="bg-white py-6 px-10 shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <img src={logo} alt="Swing XR Logo" className="h-20 w-20 rounded-full" />
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight uppercase">SWING XR</h1>
          </div>
  
          <nav className="hidden md:flex items-center gap-x-16 absolute left-2/3 -translate-x-1/2">
            <a href="#overview" className="text-gray-700 hover:text-blue-500">Overview</a>
            <a href="#demo" className="text-gray-700 hover:text-blue-500">Project</a>
            <a href="#demo-video" className="text-gray-700 hover:text-blue-500">Demo</a>
          </nav>
        {/*
          <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center whitespace-nowrap "
          >
            <Download size={20} className="mr-2" /> Dev Kit
          </button>
        */}
        </div>
      </header>
    );
  };
  
  export default Header;