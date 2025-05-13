import { Link } from 'react-router-dom';
// Assuming the image is placed in the public folder as logo.png
import logo from '/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Updated Link to include the image */}
        <Link to="/" className="flex items-center text-xl font-bold"> {/* Added flex and items-center */}
          {/* Add the image tag here */}
          <img src={logo} alt="VerlangenTFT Meta Icon" className="h-6 w-6 mr-2" /> {/* Added image with size and margin */}
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