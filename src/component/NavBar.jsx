import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/coffees'>Coffees</Link></li>
        <li><Link to='/dashBoard'>Dash Board</Link></li>

    </>
    return (
       <div className=' w-full backdrop-blur-md bg-white/45 sticky top-0 z-20'>
         <div className="navbar w-[90%] mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="text-2xl">Coffee_Book</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
</div>
       </div>
    );
};

export default NavBar;