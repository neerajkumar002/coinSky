import { HandCoins, Home, TrendingUp } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="  w-[250px]">
      <h2 className="text-[#FFB9B3] font-bold text-3xl px-3 py-6 flex  items-center gap-3">
        <HandCoins />
        CoinSky
      </h2>
      <div className="w-full flex flex-col gap-3 font-bold py-10 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " bg-[#FFB9B3] text-[#1E1E1E] w-[200px] px-5 py-2 flex gap-2 items-center "
              : "w-[200px] px-5 py-2 flex gap-2 items-center "
          }
        >
          <Home size={20} />
          Home
        </NavLink>
        <NavLink
          to="/trending"
          className={({ isActive }) =>
            isActive
              ? " bg-[#FFB9B3] text-[#1E1E1E] w-[200px] px-5 py-2 flex gap-2 items-center "
              : "w-[200px] px-5 py-2 flex gap-2 items-center "
          }
        >
          <TrendingUp size={20} />
          Trending
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
