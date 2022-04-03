import React from "react";
import { FaBook, FaChevronLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NavbarAlt = () => {
  const location = useLocation();

  const MatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <header className='container py-6 px-4 bg-white h-20 fixed top-0 z-10'>
      <nav className='flex gap-4 justify-between items-center'>
        <div className='flex gap-4 items-center'>
          <Link className='font-bold' to='/'>
            <FaChevronLeft />
          </Link>
          <h1 className='font-bold'>
            {MatchRoute("/category/11") && "Career & Business"}
            {MatchRoute("/category/1") && "Happiness & Mindfulness"}
            {MatchRoute("/category/12") && "Productivity & Time Management"}
            {MatchRoute("/category/19") && "Society & Politics"}
            {MatchRoute("/category/21") && "Investment & Finance"}
            {MatchRoute("/bookmarks") && "Your Bookmarks"}
          </h1>
        </div>

        <Link to='/bookmarks'>
          <FaBook className='text-xl' />
        </Link>
      </nav>
    </header>
  );
};

export default NavbarAlt;
