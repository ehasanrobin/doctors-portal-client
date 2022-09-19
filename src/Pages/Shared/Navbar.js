import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../FIrebase/Firebase.init";
const Navbar = () => {
  const [user] = useAuthState(auth);

  const menuItems = (
    <>
      <li>
        <NavLink as={Link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink as={Link} to="/about">
          About
        </NavLink>
      </li>

      <li>
        <NavLink as={Link} to="/appointment">
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink as={Link} to="/reviews">
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink as={Link} to="/contactUs">
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink as={Link} to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        {user ? (
          <NavLink
            as={Link}
            onClick={() => {
              signOut(auth);
              localStorage.removeItem("accessToken");
            }}
          >
            logout
          </NavLink>
        ) : (
          <NavLink as={Link} to="/login">
            login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 justify-center">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <label
            tabIndex="1"
            htmlFor="dashboard-sidebar"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
