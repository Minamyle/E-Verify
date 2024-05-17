import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-10">
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
            to="/verify"
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
            <Button className="p-2 rounded-2xl bg-[#FB4F4F] text-white whitespace-nowrap">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
