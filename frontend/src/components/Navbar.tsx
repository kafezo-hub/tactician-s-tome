import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white shadow-md"> {/* Added shadow */}
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          {/* Updated title */}
          VerlangenTFT Meta
        </Link>
        <div>
          <Link to="/" className="mr-4 hover:text-gray-300">
            Meta Overview
          </Link>
          {/* Removed other links */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Added export default