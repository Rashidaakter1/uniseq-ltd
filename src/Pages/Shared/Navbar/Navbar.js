import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div
      style={{ backgroundColor: "#446a73", color: "#adc5cb" }}
      className="navbar sticky-top"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-50  rounded-box w-52"
          >
            <Link  to="/home">Home</Link>
            <li>{user && <Link to="/dashboard">Dashboard</Link>}</li>

            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-start hidden lg:flex">
        <Link className="btn btn-ghost" to="/home">Home</Link>
        <ul className="menu menu-horizontal p-0">
          <li>{user && <Link className="btn btn-ghost" to="/dashboard">Dashboard</Link>}</li>

          <li>
            <Link className="btn btn-ghost" to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link className="btn btn-ghost" to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <p className="uppercase">{user.displayName}</p>
            <button onClick={logout} className="btn btn-ghost normal-case">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" alt="" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
