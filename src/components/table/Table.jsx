import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const Table = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,

    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className=" ">
      {/* <div className="filter-and-search lg:flex lg:justify-end">
        <div className="bg-[#383838]  lg:w-[400px]  rounded">
          <input
            type="text"
            placeholder="Search Here.." 
            className="bg-transparent  focus:outline-[#FFB9B3]  focus:outline  rounded px-3 py-2 w-full"
          />
        </div>
      </div> */}
      <div className="w-full    overflow-auto">
        <table className="table-auto w-full border border-[#383838] border-collapse rounded  ">
          <thead className="border border-[#383838]   ">
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        className="text-start text-sm  py-2 pl-4"
                      >
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
                        className="border-b text-sm border-[#383838] py-4 pl-4"
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
      <div className="py-3 flex justify-center gap-4">
        <button
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
          className={` bg-[#FFB9B3] text-[#1E1E1E] rounded-md px-5 font-semibold ${
            table.getCanPreviousPage() ? "" : "cursor-not-allowed opacity-50"
          }`}
        >
          <ChevronFirst />
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className={` bg-[#FFB9B3] text-[#1E1E1E] rounded-md px-5 font-semibold ${
            table.getCanPreviousPage() ? "" : "cursor-not-allowed opacity-50"
          }`}
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={` bg-[#FFB9B3] text-[#1E1E1E] rounded-md px-5 font-semibold ${
            table.getCanNextPage() ? "" : "cursor-not-allowed opacity-50"
          }`}
        >
          <ChevronRight />
        </button>
        <button
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
          className={` bg-[#FFB9B3] text-[#1E1E1E] rounded-md px-5 font-semibold ${
            table.getCanNextPage() ? "" : "cursor-not-allowed opacity-50"
          }`}
        >
          <ChevronLast />
        </button>
      </div>
    </div>
  );
};

export default Table;
