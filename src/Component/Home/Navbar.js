import React from "react";
import logo from "../Assets/logo.png";
import { FiSearch } from 'react-icons/fi';


const Navbar = () => {
  const menu = (
    <>
      <li className="lg:mr-[41px]">Home</li>
      <li className="lg:mr-[41px]">Featuers</li>
      <li className="lg:mr-[41px]">Pages</li>
      <li className="lg:mr-[41px]">Tours</li>
      <li className="lg:mr-[41px]">Cars</li>
      <li className="lg:mr-[41px]">Hotels</li>
      <li className="lg:mr-[41px]">Flights</li>
    </>
  );

  return (
    <div className="navbar bg-transparent lg:ml-[82px] lg:mr-[115px]">
      <div className="navbar-start lg:w-[220px] lg:h-[146px]">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
            {menu}
          </ul>
        </div>
        <a href="#!"><img style={{ width: "211px", height: "146px" }} src={logo} alt="" /></a>
      </div>

      <div className="navbar-start hidden lg:flex w-full lg:ml-[21px]">
        <ul className="menu menu-horizontal px-1 text-white text-xl font-semibold">{menu}</ul>
      </div>

      <div className="navbar-end">
          <FiSearch className="text-2xl text-white font-semibold hidden lg:block"/>
      </div>
    </div>
  );
};

export default Navbar;
