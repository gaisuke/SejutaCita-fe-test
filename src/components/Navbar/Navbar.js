import React from "react";
// import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header
      className={`container py-6 px-4 h-20 fixed top-0 z-50 shadow-lg bg-white rounded-b-md`}
    >
      <nav className='flex gap-4 items-center'>
        <Link className='font-bold' to='/'>
          BooBook 
        </Link>
        {/* <SearchBar /> */}
        <Link
          className='hidden md:block px-2 font-bold hover:bg-blue-400 rounded-xl transition-all'
          to='/'
        >
          Login
        </Link>
        <Link
          className='hidden md:block px-2 font-bold hover:bg-blue-400 rounded-xl transition-all'
          to='/'
        >
          Register
        </Link>
        {/* <Link to='/bookmarks'>
          {" "}
          <FaBook className='text-xl hover:text-blue-600' />
        </Link> */}
      </nav>
    </header>
  );
};

export default Navbar;
