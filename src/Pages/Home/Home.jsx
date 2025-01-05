import { useGetCoinListQuery } from "../../services/cryptoApi";
import millify from "millify";
import Table from "../../components/table/Table";

const Home = () => {
  const { data: coinList, isLoading } = useGetCoinListQuery("usd");

  const columns = [
    { accessorKey: "index", header: "#" },
    {
      accessorKey: "coin",
      header: "Coin",
      cell: (row) => {
        const coin = row.getValue();
        return (
          <div className="flex gap-3 items-center">
            <img src={coin.icon} alt="" width={25} height={25} />
            <p className="font-semibold text-xl">{coin.name}</p>
            <p>{coin.symbol}</p>
          </div>
        );
      },
    },
    { accessorKey: "total_volume", header: "Total Volume" },
    { accessorKey: "price", header: "Price" },
    { accessorKey: "market_cap", header: "Market Cap Changes" },
  ];

  const tableData =
    coinList?.map((coinData, index) => ({
      index: index + 1,
      coin: {
        icon: `${coinData.image}`,
        name: `${coinData.name}`,
        symbol: `${coinData.symbol}`,
      },
      price: `$${coinData.current_price}`,
      market_cap: millify(coinData.market_cap),
      total_volume: millify(coinData.total_volume),
    })) || [];

  if (isLoading) return "loading...";

  return (
    <div className="py-6">
      <Table data={tableData} columns={columns} />
    </div>
  );
};

export default Home;
