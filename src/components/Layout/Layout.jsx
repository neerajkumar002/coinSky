import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { AlignJustify, HandCoins, X } from "lucide-react";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="bg-[#1E1E1E] text-[#E0E0E0] w-full min-h-screen lg:flex">
      <div className=" px-3 py-2 lg:hidden  ">
        <div className="flex justify-between">
          <h2 className="text-[#FFB9B3] font-bold text-2xl    flex  items-center gap-3">
            <HandCoins />
            CoinSky
          </h2>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <AlignJustify size={30} />}
          </button>
        </div>
        <div
          className={`min-h-screen absolute top-0 left-0 backdrop-blur-sm bg-black/30 ${
            isOpen ? "" : "hidden"
          } `}
        >
          <Sidebar />
        </div>
      </div>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className=" w-full  px-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
