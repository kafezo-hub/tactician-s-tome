import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Tactician's Tome
        </Link>
        <div className="flex space-x-4">
          {/* Placeholder links */}
          <Link to="/champion-tiers" className="hover:text-gray-300">
            Champion Tiers
          </Link>
          <Link to="/items" className="hover:text-gray-300">
            Items
          </Link>
          <Link to="/team-comps" className="hover:text-gray-300">
            Team Comps
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;