import React from "react";
import { FiPhoneCall, FiClock } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { GiComputerFan } from "react-icons/gi";
const NavbarBanner = () => {
  return (
    <div>
      <div className="">
        <div style={{ backgroundColor: "#efeee8" }} className="bg-base-100  ">
          <div className="lg:flex sm:hidden justify-between p-2">
            <div >
              <a className="normal-case text-lg">Welcome to UniseQ </a>
            </div>

            <div className="">
              <ul className="flex justify-between  px-4">
                <li className="lg:px-6 px-2 md:px-4">
                  <a>Support</a>
                </li>

                <li className="lg:px-6 px-2 md:px-4">
                  <a>Location </a>
                </li>
                <li className=" lg:px-6 px-2 md:px-4">
                  <a>Carreer </a>
                </li>
                <li className=" lg:px-6 px-2 md:px-4">
                  <p className="mt-2">
                    {" "}
                    <FaSearch />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="">
                <div className="flex justify-center">
                  <div style={{ fontSize: "4vw" }}>
                    <FiClock />
                  </div>
                  <div className="">
                    <h3>Store Time </h3>
                    <h4>8AM - 6PM</h4>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex justify-center">
                  <div style={{ fontSize: "4vw" }}>
                    <FiPhoneCall />
                  </div>
                  <div className="">
                    <h3>Need Help</h3>
                    <h4>+8801758971667</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <a href='/' className="normal-case text-xl flex justify-center items-center">
            <div style={{ color: "#c45d3c" }} className="lg:text-4xl md:text-3xl text-2xl">
              <GiComputerFan />
            </div>
            <img
              src="https://i.ibb.co/55pVMFp/Gold-Beige-Monogram-Initials-Personal-Brand-Typography-Logo-2.png"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <div className="flex justify-center">
                <div style={{ fontSize: "4vw" }}>
                  <FiClock />
                </div>
                <div className="">
                  <h3>Store Time </h3>
                  <h4>8AM - 6PM</h4>
                </div>
              </div>
            </li>

            <li>
              <div className="flex justify-center lg:ml-10">
                <div style={{ fontSize: "4vw" }}>
                  <FiPhoneCall />
                </div>
                <div className="">
                  <h3>Need Help </h3>
                  <h4>+8801758971667</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:mr-16 lg:my-4">
          <a
            style={{ backgroundColor: " #c45d3c" }}
            href="/home"
            className="btn"
          >
            Make An Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarBanner;
