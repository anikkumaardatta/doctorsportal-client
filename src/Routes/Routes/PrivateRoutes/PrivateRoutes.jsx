import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <div
          aria-label="Loading..."
          role="status"
          class="flex items-center space-x-2 mx-auto"
        >
          <svg
            class="h-6 w-6 animate-spin stroke-gray-500"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
          </svg>
          <span class="text-xs font-medium text-gray-500">Loading...</span>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoutes;
