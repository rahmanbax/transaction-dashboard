import React from "react";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="sticky left-0 top-0 w-56 h-screen bg-white border-r border-r-gray-200">
      <ul className="mt-10">
        <Link to={"/"}><li className="p-5 hover:bg-gray-100 text-base flex gap-2 items-center"><MdDashboard/> Dashboard</li></Link>
      </ul>
    </nav>
  );
};

export default NavBar;
