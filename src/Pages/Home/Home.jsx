import { useGetCoinListQuery } from "../../services/cryptoApi";
import millify from "millify";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: coinList, isLoading } = useGetCoinListQuery("usd");

  const tableData =
    coinList?.map((coinData, index) => ({
      index: index + 1,
      coin: {
        id: `${coinData.id}`,
        icon: `${coinData.image}`,
        name: `${coinData.name}`,
        symbol: `${coinData.symbol}`,
      },
      price: `$${coinData.current_price}`,
      market_cap: millify(coinData.market_cap),
      total_volume: millify(coinData.total_volume),
    })) || [];

  const columns = [
    { accessorKey: "index", header: "#" },
    {
      accessorKey: "coin",
      header: "Coin",
      cell: (row) => {
        const coin = row.getValue();
        return (
          <Link to={`/${coin.id}`} className="flex gap-3 items-center">
            <img src={coin.icon} alt="" width={25} height={25} />
            <p className="font-semibold lg:text-xl">{coin.name}</p>
            <p>{coin.symbol}</p>
          </Link>
        );
      },
    },
    { accessorKey: "total_volume", header: "Total Volume" },
    { accessorKey: "price", header: "Price" },
    { accessorKey: "market_cap", header: "Market Cap Changes" },
  ];

  if (isLoading) return "loading...";

  return (
    <div className="py-6">
      <Table data={tableData} columns={columns} />
    </div>
  );
};

export default Home;
