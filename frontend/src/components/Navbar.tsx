import { Link } from 'react-router-dom';
// Remove the import statement for the logo
// import logo from '/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Updated Link to include the image */}
        <Link to="/" className="flex items-center text-xl font-bold"> {/* Added flex and items-center */}
          {/* Update the src attribute to directly reference the public path */}
          <img src="/logo.png" alt="VerlangenTFT Meta Icon" className="h-6 w-6 mr-2" /> {/* Added image with size and margin */}
          VerlangenTFT Meta
        </Link>
        <div>
          <Link to="/" className="mr-4 hover:text-gray-300">
            Meta Overview
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;