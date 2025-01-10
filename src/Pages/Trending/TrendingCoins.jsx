import { RefreshCcw } from "lucide-react";
import Card from "../../components/Trending";
import { useGetTrendingCoinsQuery } from "../../services/trendingCoinApi";
import TrendingSkeletons from "../../components/Skeletons/TrendingSkeletons";

const TrendingCoins = () => {
  const {
    data: coinsList,
    isLoading,
    refetch,
    isFetching,
  } = useGetTrendingCoinsQuery();

  if (isFetching)
    return (
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 lg:place-items-center">
        {new Array(15).fill(null).map((_, index) => (
          <TrendingSkeletons key={index} />
        ))}
        ;
      </div>
    );

  if (isLoading)
    return (
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 lg:place-items-center">
        {new Array(15).fill(null).map((_, index) => (
          <TrendingSkeletons key={index} />
        ))}
        ;
      </div>
    );

  return (
    <div className="px-5 py-5 w-full flex gap-3 flex-col">
      <div className="flex justify-between lg:px-5 py-1 font-semibold text-3xl">
        <h1 className="text-[#FFB9B3] text-xl">Trending</h1>
        <button onClick={() => refetch()} className="text-[#FFB9B3]">
          <RefreshCcw />
        </button>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 lg:place-items-center">
        {coinsList?.coins &&
          coinsList?.coins.map((coin) => (
            <Card
              key={coin?.item?.id}
              id={coin?.item?.id}
              name={coin?.item?.name}
              price={coin?.item?.price_btc}
              marketCap={coin?.item?.market_cap_rank}
              image={coin?.item?.large}
              score={coin?.item?.score}
            />
          ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
