import { useCallback, useEffect, useState } from "react";
import { useLazyGetCoinHistoryDataQuery } from "../../services/cryptoApi";
import Chart from "./Chart"; 

const ChartComponent = ({ id }) => {
  const [type, setType] = useState("prices");
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);

  const [trigger, { data, isFetching }] = useLazyGetCoinHistoryDataQuery();

  const fetchCoinHistory = useCallback(() => {
    if (days && id) {
      trigger({ coinId: id, vs_currency: "usd", days });
    }
  }, [id, days, trigger]);

  useEffect(() => {
    fetchCoinHistory();
  }, [fetchCoinHistory]);

  useEffect(() => {
    if (data) {
      setCryptoData(data);
    }
  }, [data]);

  useEffect(() => {
    if (cryptoData && type) {
      const convertedData = cryptoData[type]?.map((item) => ({
        date: new Date(item[0]).toLocaleDateString(),
        [type]: item[1],
      }));
      setChartData(convertedData || []);
    }
  }, [type, cryptoData]);

  if (isFetching)
    return (
      <div className=" w-full h-[600px]  flex justify-center items-center  ">
        <div className="w-12 h-12 border-4 border-t-transparent border-t-red-400 rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className=" px-3">
      <div className="bg-[#2f2f2f] mb-4  flex justify-between   gap-1 px-1  py-2 rounded-md lg:w-[500px]">
        <button
          onClick={() => setType("prices")}
          className={`${
            type === "prices" ? "bg-[#FFB9B3] text-black " : ""
          } font-semibold lg:font-bold px-2 rounded text-sm`}
        >
          Price
        </button>
        <button
          onClick={() => setType("market_caps")}
          className={`${
            type === "market_caps" ? "bg-[#FFB9B3] text-black " : ""
          } font-semibold lg:font-bold px-2 rounded text-sm`}
        >
          Market Cap
        </button>
        <button
          onClick={() => setType("total_volumes")}
          className={`${
            type === "total_volumes" ? "bg-[#FFB9B3] text-black " : ""
          } font-semibold lg:font-bold px-2 rounded text-sm`}
        >
          Total Volume
        </button>
        <button
          onClick={() => setDays(7)}
          className={`${
            days === 7 ? "bg-[#FFB9B3] text-black " : ""
          } font-semibold lg:font-bold px-2 rounded text-sm`}
        >
          7D
        </button>
        <button
          onClick={() => setDays(14)}
          className={`${
            days === 14 ? "bg-[#FFB9B3] text-black " : ""
          } font-semibold lg:font-bold px-2 rounded text-sm`}
        >
          14D
        </button>
        <button
          onClick={() => setDays(30)}
          className={`${
            days === 30 ? "bg-[#FFB9B3] text-black " : ""
          } font-semibold lg:font-bold px-2 rounded text-sm`}
        >
          30D
        </button>
      </div>
      <div className="lg:w-full">
        <Chart data={chartData} type={type} />
      </div>
    </div>
  );
};

export default ChartComponent;
