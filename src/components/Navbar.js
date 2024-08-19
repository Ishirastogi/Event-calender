import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className={`text-white text-xl ${styles.link}`}>
          Grey Scientific Labs
        </Link>
        <div className="flex space-x-4">
          <Link to="/events" className="text-gray-300 hover:text-white">
            All Events
          </Link>
          <Link to="/add-event" className="text-gray-300 hover:text-white">
            Add Event
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
