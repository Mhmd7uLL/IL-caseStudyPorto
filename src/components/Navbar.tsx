import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-15 bg-[#F5EFE3] shadow-sm">
      <div className="flex flex-row items-center h-full justify-between px-20 text-[#4F5B2A]">
        <Link to="/" className="font-bold">
          Muhammad <span className="text-[#B8892D]">Julian</span> Portfolio.
        </Link>

        <nav className="flex gap-3 font-medium">
          <NavLink to="/" className="px-3 py-1 rounded-md transition-colors duration-200 hover:bg-[#B8892D] hover:text-[#F5EFE3]">
            Home
          </NavLink>

          <NavLink to="/about" className="px-3 py-1 rounded-md transition-colors duration-200 hover:bg-[#B8892D] hover:text-[#F5EFE3]">
            About
          </NavLink>

          <NavLink to="/achievements" className="px-3 py-1 rounded-md transition-colors duration-200 hover:bg-[#B8892D] hover:text-[#F5EFE3]">
            Achievements
          </NavLink>

          <NavLink to="/projects" className="px-3 py-1 rounded-md transition-colors duration-200 hover:bg-[#B8892D] hover:text-[#F5EFE3]">
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}