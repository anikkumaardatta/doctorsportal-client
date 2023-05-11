import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointments from "../../Pages/Dashboard/MyAppointments/MyAppointments";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyHistory from "../../Pages/Dashboard/MyHistory/MyHistory";
import MyReviews from "../../Pages/Dashboard/MyReviews/MyReviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/my_appointments",
        element: <MyAppointments />,
      },
      {
        path: "/dashboard/my_reviews",
        element: <MyReviews />,
      },
      {
        path: "/dashboard/my_history",
        element: <MyHistory />,
      },
      {
        path: "/dashboard/all_users",
        element: <AllUsers/>,
      },
    ],
  },
]);
export default router;
