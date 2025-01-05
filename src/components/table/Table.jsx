import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

const Table = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
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
        <div className="py-3 flex justify-center gap-4">
          <button
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
            className={` bg-[#FFB9B3] text-[#1E1E1E] rounded-md px-5 font-semibold ${
              table.getCanPreviousPage() ? "" : "cursor-not-allowed opacity-50"
            }`}
          >
            First Page
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={` bg-[#FFB9B3] text-[#1E1E1E] rounded-md px-5 font-semibold ${
              table.getCanPreviousPage() ? "" : "cursor-not-allowed opacity-50"
            }`}
          >
            Previous Page
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={` bg-[#FFB9B3] text-[#1E1E1E] rounded-md px-5 font-semibold ${
              table.getCanNextPage() ? "" : "cursor-not-allowed opacity-50"
            }`}
          >
            Next Page
          </button>
          <button
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
            className={` bg-[#FFB9B3] text-[#1E1E1E] rounded-md px-5 font-semibold ${
              table.getCanNextPage() ? "" : "cursor-not-allowed opacity-50"
            }`}
          >
            Last Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;
