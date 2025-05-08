import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
 

const Layout = () => {
  return (
    <div className="bg-[#1E1E1E] text-[#E0E0E0] w-full  flex  gap-4   ">
      <div className=" ">
        <Sidebar />
      </div>
      <div className="w-full   ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
