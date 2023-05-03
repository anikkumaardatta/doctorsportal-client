import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import ScrollToTop from "react-scroll-to-top";
import MySVG from "./Components/Buttons/MySVG/MySVG";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <ScrollToTop
      smooth
      component={<MySVG />} 
      />
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
