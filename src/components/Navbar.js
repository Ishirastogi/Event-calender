import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Grey Scientific Labs
        </Link>
        <Link to="/add-event" className="text-gray-300 hover:text-white">
          Add Event
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;