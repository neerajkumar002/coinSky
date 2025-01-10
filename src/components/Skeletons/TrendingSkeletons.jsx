const TrendingSkeletons = () => {
  return (
    <div className="bg-[#303030] flex items-center gap-8  lg:w-[500px] h-[140px] rounded-md px-4 animate-pulse ">
      <div className="w-[60px] h-[60px] bg-[#1E1E1E] rounded-full"></div>
      <div className="flex flex-col gap-1">
        <div className="bg-[#1E1E1E] rounded-full w-40 h-[15px]"></div>
        <div className="bg-[#1E1E1E] rounded-full w-64 h-[15px]"></div>
        <div className="bg-[#1E1E1E] rounded-full w-48 h-[15px]"></div>
        <div className="bg-[#1E1E1E] rounded-full w-24 h-[15px]"></div>
      </div>
    </div>
  );
};

export default TrendingSkeletons;
