import React, { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleLogOut = () => {
    
    navigate(`/`);
    logOut()
      .then(() => {
        console.log("Logged out", user );
      })
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <>
      <NavLink
        to={"/"}
        className="border-b-4 font-medium border-transparent my-2 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer"
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className="border-b-4 font-medium border-transparent my-2 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer"
      >
        About
      </NavLink>
      <NavLink
        to={"/appointment"}
        className="border-b-4 font-medium border-transparent my-2 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer"
      >
        Appointment
      </NavLink>
      <NavLink
        to={"/reviews"}
        className="border-b-4 font-medium border-transparent my-2 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer"
      >
        Reviews
      </NavLink>
      <NavLink
        to={"/contact"}
        className="border-b-4 font-medium border-transparent my-2 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer"
      >
        Contact Us
      </NavLink>
      {user?.uid && (
        <>
          <NavLink
            to={"/dashboard/my_appointments"}
            className="border-b-4 font-medium border-transparent my-2 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer"
          >
            Dashboard
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-white py-0">
        <div className="navbar-start">
          <div className="">
            <label
              htmlFor="dashboard-drawer"
              tabIndex={0}
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
          <a className="text-lg lg:text-xl font-bold text-secondary m-0 lg:ms-8">
            Doctors
            <span className="bg-primary text-white ms-1 px-1">Portal</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="container flex items-center justify-center mx-auto text-gray-600 capitalize">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end text-gray-600 capitalize">
          <div className="div">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="lg:hidden">
                <BsThreeDotsVertical className="btn btn-ghost text-4xl mx-2 border-2 rounded-full p-2" />
              </label>
              <ul
                tabIndex={0}
                className="menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-lg w-52"
              >
                {menuItems}
              </ul>
            </div>
          </div>
          <div className="font-medium hover:text-accent my-0 mx-1.5 sm:mx-6 duration-150 ease-in-out px-1">
            {user?.uid ? (
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="m-1">
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 cursor-pointer">
                      <img
                        src={
                          user?.photoURL
                            ? user?.photoURL
                            : "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
                        }
                        alt={user?.uid}
                      />
                    </div>
                  </div>
                </label>
                {/* <!-- component --> */}
                <div
                  tabIndex={0}
                  className="dropdown-content bg-white shadow-xl rounded-lg pt-3 border max-w-xs min-w-max"
                >
                  <div className="photo-wrapper flex justify-center p-2">
                    <div className="avatar online">
                      <div className="w-24 rounded-full">
                        <img
                          className="w-20 h-20 rounded-full mx-auto border-2 border-secondary p-1"
                          src={
                            user?.photoURL
                              ? user?.photoURL
                              : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                          }
                          alt="John Doe"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                      {user?.displayName ? user.displayName : user.email}
                    </h3>
                    <div className="text-center text-gray-400 text-xs font-semibold">
                      <p>Web Developer</p>
                    </div>
                    <table className="text-xs my-3">
                      <tbody>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">
                            Address
                          </td>
                          <td className="px-2 py-2">
                            Chatakpur-3, Dhangadhi Kailali
                          </td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">
                            Phone
                          </td>
                          <td className="px-2 py-2">+977 9955221114</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">
                            Email
                          </td>
                          <td className="px-2 py-2 lowercase">{user.email}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="text-center my-3">
                      <button
                        onClick={handleLogOut}
                        className="btn btn-error btn-block btn-sm rounded-sm gap-2 text-white font-medium"
                        href="#"
                      >
                        Log Out
                        <FiLogOut className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                className="btn btn-outline gap-2 btn-sm rounded-sm"
                to={"/login"}
              >
                Login
                <FiLogIn className="w-4 h-4" />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
