import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/register/company");
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-white font-mono py-4 z-50">
      <div className="">
        <div className="flex space-x-5 justify-around">
          <div className="text-xl font-bold">
            <Link to="/" className="no-underline text-black">
              Logo
            </Link>
          </div>

          <Link to="/" className="no-underline text-black hover:text-gray-700">
            Home
          </Link>

          <Link
            to="/verification"
            className="no-underline text-black hover:text-gray-700"
          >
            Verify
          </Link>
          <Link
            to="/about-us"
            className="no-underline text-black hover:text-gray-700"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="no-underline text-black hover:text-gray-700"
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="no-underline text-black hover:text-gray-700"
          >
            FAQ
          </Link>
          <div>
            <Button
              className="p-2 px-8 rounded-2xl bg-[#FB4F4F] text-white whitespace-nowrap"
              onClick={handleSubmit}
            >
              sign in
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
