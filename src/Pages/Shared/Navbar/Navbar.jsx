import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FiLogOut, FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <>
      <li className="border-b-4 font-medium border-transparent my-2 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="border-b-4 font-medium border-transparent my-2 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer">
        <Link to={"/about"}>About</Link>
      </li>
      <li className="border-b-4 font-medium border-transparent my-2 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer">
        <Link to={"/appointment"}>Appointment</Link>
      </li>
      <li className="border-b-4 font-medium border-transparent my-2 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer">
        <Link to={"/reviews"}>Reviews</Link>
      </li>
      <li className="border-b-4 font-medium border-transparent my-2 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer">
        <Link to={"/contact"}>Contact Us</Link>
      </li>
      {user?.uid && (
        <>
          <li className="border-b-4 font-medium border-transparent my-2 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer">
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <button onClick={handleLogOut} className="btn">
            Sign out
          </button>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a className="text-xl font-bold text-secondary ms-8">
            Doctors
            <span className="bg-primary text-white ms-1 px-1">Portal</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end text-gray-600 capitalize">
          <div className="font-medium hover:text-accent my-0 mx-1.5 sm:mx-6 duration-150 ease-in-out px-1">
            {user?.uid ? (
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="m-1">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 cursor-pointer">
                      <img
                        src={
                          user?.photoURL
                            ? user?.photoURL
                            : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                        }
                        alt={user?.uid}
                      />
                    </div>
                  </div>
                </label>
                {/* <!-- component --> */}
                <div
                  tabIndex={0}
                  class="dropdown-content bg-white shadow-xl rounded-lg pt-3 border max-w-xs min-w-max"
                >
                  <div class="photo-wrapper flex justify-center p-2">
                    <div className="avatar online">
                      <div className="w-24 rounded-full">
                        <img
                          class="w-20 h-20 rounded-full mx-auto border-2 border-secondary p-1"
                          src={
                            user?.photoURL
                              ? user?.photoURL
                              : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                          }
                          alt="John Doe"
                        />
                      </div>
                    </div>
                    {/* <img
                            class="w-20 h-20 rounded-full mx-auto border-2 border-secondary p-1"
                            src=""
                          /> */}
                  </div>
                  <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                      {user?.displayName ? user.displayName : user.email}
                    </h3>
                    <div class="text-center text-gray-400 text-xs font-semibold">
                      <p>Web Developer</p>
                    </div>
                    <table class="text-xs my-3">
                      <tbody>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">
                            Address
                          </td>
                          <td class="px-2 py-2">
                            Chatakpur-3, Dhangadhi Kailali
                          </td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">
                            Phone
                          </td>
                          <td class="px-2 py-2">+977 9955221114</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">
                            Email
                          </td>
                          <td class="px-2 py-2 lowercase">{user.email}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="text-center my-3">
                      <button
                        onClick={handleLogOut}
                        class="btn btn-error btn-block btn-sm rounded-sm gap-2 text-white font-medium"
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
              <Link
                className="btn btn-outline gap-2 btn-sm rounded-sm"
                to={"/login"}
              >
                Login
                <FiLogIn className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
