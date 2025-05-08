import { AlignJustify, HandCoins, Home, TrendingUp } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setIsOpen] = useState(false);

  console.log(open);
  return (
    <div
      className={`${
        open ? "w-[222px]" : "w-[50px]"
      } h-screen  py-3  `}
    >
      <div className="flex">
        <h2
          className={`${
            open ? "" : "hidden"
          } text-[#FFB9B3] font-bold text-3xl px-3   flex  items-center gap-3`}
        >
          <HandCoins />
          CoinSky
        </h2>
        <button onClick={() => setIsOpen(!open)} className="ml-3 ">
          <AlignJustify className="w-8 h-8 text-[#ffa7a7]" />
        </button>
      </div>
      <div className="w-full flex flex-col gap-3 font-bold py-10  ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex ${open ? "px-2 gap-3  items-center" : "justify-center"} ${
              isActive ? " bg-[#FFB9B3] text-[#1E1E1E]   " : "     "
            }`
          }
        >
          <Home className="w-7 h-7" />
          <span className={`${open ? "" : "hidden"} text-xl`}>Home</span>
        </NavLink>
        <NavLink
          to="/trending"
          className={({ isActive }) =>
            `flex ${open ? "px-2 gap-3  items-center" : "justify-center"} ${
              isActive ? " bg-[#FFB9B3] text-[#1E1E1E]   " : "     "
            }`
          }
        >
          <TrendingUp className="w-7 h-7" />
          <span className={`${open ? "" : "hidden"}`}> Trending</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
