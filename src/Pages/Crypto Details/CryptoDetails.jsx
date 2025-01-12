import { useParams } from "react-router-dom";
import { useGetCoinByIdQuery } from "../../services/cryptoApi";
import millify from "millify";
import Chart from "../../components/Chart/Chart";
import ChartComponent from "../../components/Chart/ChartComponent";
import HighLowIndicator from "../../components/Indicator/HighLowIndicator";

const usDollor = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const CryptoDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCoinByIdQuery(id);

  if (isLoading) return "loading...";

  return (
    <div className="w-full py-5   ">
      {/* line chart */}
      <div>
        <ChartComponent id={id} />
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <img
            src={data?.image?.large}
            alt={data?.name}
            width={30}
            height={30}
          />
          <h4 className="font-bold text-2xl">{data?.name}</h4>
          <p className="text-xl">{data?.symbol}</p>
          <span> #{data?.market_data?.market_cap_rank}</span>
        </div>
        <div>
          <p>Price</p>
          <p className="text-4xl font-bold">
            {usDollor.format(data?.market_data?.current_price?.usd)}
          </p>
        </div>

        {/* market data */}

        <div className="   lg:w-[700px]  flex flex-col gap-2">
          <div className=" ">
            {/* line */}
            <HighLowIndicator
              currentPrice={data?.market_data?.current_price?.usd}
              high={data?.market_data?.high_24h?.usd}
              low={data?.market_data?.low_24h?.usd}
            />
            <div className="flex justify-evenly py-1  ">
              <span className="w-[400px] ">
                {usDollor.format(data?.market_data?.low_24h?.usd)}
              </span>
              <span className="w-[100px]">Low 24H</span>
              <span className="w-[400px] text-right ">
                {usDollor.format(data?.market_data?.high_24h?.usd)}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 ">
            <div className="flex justify-between border-b-[0.5px] border-gray-500/60 py-1 ">
              <span>Market Cap</span>
              <span className="text-white font-semibold  ">
                {usDollor.format(data?.market_data?.market_cap?.usd)}
              </span>
            </div>
            <div className="flex justify-between border-b-[0.5px] border-gray-500/60 py-1 ">
              <span>Fully Diluted Valuation</span>
              <span className="text-white font-semibold  ">
                {usDollor.format(
                  data?.market_data?.fully_diluted_valuation?.usd
                )}
              </span>
            </div>
            <div className="flex justify-between border-b-[0.5px] border-gray-500/60 py-1 ">
              <span>Total Volume</span>
              <span className="text-white font-semibold  ">
                {usDollor.format(data?.market_data?.total_volume?.usd)}
              </span>
            </div>
            <div className="flex justify-between border-b-[0.5px] border-gray-500/60 py-1 ">
              <span>Max Supply</span>
              <span className="text-white font-semibold  ">
                {usDollor.format(data?.market_data?.max_supply)}
              </span>
            </div>

            <div className="flex justify-between border-b-[0.5px] border-gray-500/60 py-1 ">
              <span>Circulatig Supply</span>
              <span className="text-white font-semibold  ">
                {usDollor.format(data?.market_data?.circulating_supply)}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
