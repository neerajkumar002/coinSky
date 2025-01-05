import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useGetCoinListQuery } from "../../services/cryptoApi";
import millify from "millify";

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

const Home = () => {
  const { data: coinList, isLoading } = useGetCoinListQuery("usd");

  const tableData =
    coinList &&
    coinList.map((coinData, index) => ({
      index: index + 1,
      coin: {
        icon: `${coinData.image}`,
        name: `${coinData.name}`,
        symbol: `${coinData.symbol}`,
      },
      price: coinData.current_price,
      market_cap: millify(coinData.market_cap),
      total_volume: millify(coinData.total_volume),
    }));

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return "loading...";

  return (
    <div className="py-6">
      <div className="filter-and-search flex justify-end">
        <div className="bg-[#383838]  w-[400px]  rounded">
          <input
            type="text"
            placeholder="Search Here.."
            className="bg-transparent  focus:outline-[#FFB9B3]  focus:outline  rounded px-3 py-2 w-full"
          />
        </div>
      </div>
      <div className="w-full px-5 py-5">
        <table className="table-auto w-full border border-[#383838] border-collapse rounded  ">
          <thead className="border border-[#383838]   ">
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th key={header.id} className="text-start  py-2 pl-4">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="">
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className="border-b border-[#383838] py-4 pl-4"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
