import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import hamIcon from "../assets/icon-tech/hamburger-icon.svg";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-15 bg-[#F5EFE3] shadow-sm max-[600px]:w-94 font-mono">
      <div className="flex flex-row items-center h-full justify-between px-5 text-[#4F5B2A] lg:px-20">
        <Link to="/" className="font-bold">
          Muhammad <span className="text-[#B8892D]">Julian</span> Portfolio.
        </Link>

        <nav className="flex gap-3 font-medium max-[600px]:hidden">
          <NavLink
            to="/"
            className="px-3 py-1 rounded-md font-bold transition-colors duration-200 hover:bg-[#B8892D] hover:text-[#F5EFE3]"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="px-3 py-1 rounded-md font-bold transition-colors duration-200 hover:bg-[#B8892D] hover:text-[#F5EFE3]"
          >
            About
          </NavLink>

          <NavLink
            to="/achievements"
            className="px-3 py-1 rounded-md font-bold transition-colors duration-200 hover:bg-[#B8892D] hover:text-[#F5EFE3]"
          >
            Achievements
          </NavLink>

          <NavLink
            to="/projects"
            className="px-3 py-1 rounded-md font-bold transition-colors duration-200 hover:bg-[#B8892D] hover:text-[#F5EFE3]"
          >
            Projects
          </NavLink>
        </nav>

        <button onClick={() => setShowNav(!showNav)} className="lg:hidden">
          <img src={hamIcon} className="w-5 h-5" />
        </button>
      </div>
      {showNav && (
        <div className="absolute min-h-screen bg-[#B8892D] flex flex-col w-50 right-0 py-5">
          <NavLink
            to="/"
            className="px-3 py-1 text-2xl text-[#F5EFE3] rounded-md transition-colors duration-200 hover:bg-[#B8892D]"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="px-3 py-1 text-2xl text-[#F5EFE3] rounded-md transition-colors duration-200 hover:bg-[#B8892D]"
          >
            About
          </NavLink>

          <NavLink
            to="/achievements"
            className="px-3 py-1 text-2xl text-[#F5EFE3] rounded-md transition-colors duration-200 hover:bg-[#B8892D]"
          >
            Achievements
          </NavLink>

          <NavLink
            to="/projects"
            className="px-3 py-1 text-2xl text-[#F5EFE3] rounded-md transition-colors duration-200 hover:bg-[#B8892D]"
          >
            Projects
          </NavLink>
        </div>
      )}
    </header>
  );
}
