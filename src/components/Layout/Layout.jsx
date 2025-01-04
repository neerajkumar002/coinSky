import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="bg-[#1E1E1E] text-[#E0E0E0] w-full min-h-screen flex">
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
