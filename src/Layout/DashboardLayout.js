import React, { useContext } from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../contexts/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-slate-100">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="flex flex-col p-4 w-80">
            {/* <!-- Sidebar content here --> */}
            {/* User menu */}
            <>
              <li className="my-2">
                <NavLink
                  to={"/dashboard/my_appointments"}
                  className="border-b-4 font-medium border-transparent p-1 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer"
                >
                  My appointments
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to={"/dashboard/my_reviews"}
                  className="border-b-4 font-medium border-transparent p-1 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer"
                >
                  My reviews
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to={"/dashboard/my_history"}
                  className="border-b-4 font-medium border-transparent p-1 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer"
                >
                  My history
                </NavLink>
              </li>
            </>
            {/* User menu */}
            {/* Admin menu */}
            {isAdmin && (
              <>
                <li className="my-2">
                  <NavLink
                    to={"/dashboard/all_users"}
                    className="border-b-4 font-medium border-transparent p-1 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer"
                  >
                    All users
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink
                    to={"/dashboard/add_doctor"}
                    className="border-b-4 font-medium border-transparent p-1 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer"
                  >
                    Add a Doctor
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink
                    to={"/dashboard/manage_doctors"}
                    className="border-b-4 font-medium border-transparent p-1 hover:text-gray-900 hover:border-secondary mx-1.5 sm:mx-6 duration-150 ease-in-out px-1 cursor-pointer"
                  >
                    Manage Doctors
                  </NavLink>
                </li>
              </>
            )}
            {/* Admin menu */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
