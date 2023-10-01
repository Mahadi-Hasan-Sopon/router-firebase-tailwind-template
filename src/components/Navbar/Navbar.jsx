// import React from 'react'

import { NavLink } from "react-router-dom";

const navLinks = (
  <>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "text-amber-500 font-bold"
            : isActive
            ? " text-blue-600 text-lg font-bold border-b-2 border-blue-500"
            : "font-medium text-slate-800"
        }
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/demo"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-amber-500 font-bold"
            : isActive
            ? " text-blue-600 text-lg font-bold border-b-2 border-blue-500"
            : "font-medium text-slate-800"
        }
      >
        Demo
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-amber-500 font-bold"
            : isActive
            ? " text-blue-600 text-lg font-bold border-b-2 border-blue-500"
            : "font-medium text-slate-800"
        }
      >
        Register
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-amber-500 font-bold"
            : isActive
            ? " text-blue-600 text-lg font-bold border-b-2 border-blue-500"
            : "font-medium text-slate-800"
        }
      >
        Login
      </NavLink>
    </li>
  </>
);

function Navbar() {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="logo">
        <h1 className="text-2xl font-bold">Navbar</h1>
      </div>
      <div className="links flex items-center gap-3 md:gap-6 list-none">
        {navLinks}
      </div>
    </div>
  );
}

export default Navbar;
