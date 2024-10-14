import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Video, PenTool, User, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-purple-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Home className="mr-2" /> NaijaStreets
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/upload-video" className="flex items-center hover:text-purple-200">
              <Video className="mr-1" size={18} /> Upload Video
            </Link>
          </li>
          <li>
            <Link to="/create-blog" className="flex items-center hover:text-purple-200">
              <PenTool className="mr-1" size={18} /> Write Blog
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center hover:text-purple-200">
              <User className="mr-1" size={18} /> Profile
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center hover:text-purple-200">
              <LogIn className="mr-1" size={18} /> Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;