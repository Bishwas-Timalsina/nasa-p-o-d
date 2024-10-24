import { Outlet } from "react-router-dom";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const Applayout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-600 h-[100%]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Applayout;
