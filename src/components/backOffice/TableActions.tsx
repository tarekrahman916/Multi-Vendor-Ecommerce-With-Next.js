import React from "react";
import { Download, Search, Trash2 } from "lucide-react";

export default function TableActions() {
  return (
    <div className="flex justify-between items-center  gap-8 py-6 px-12 bg-slate-700 rounded-lg">
      <button className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-lime-600 to-lime-700 group-hover:from-lime-600 group-hover:to-lime-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800">
        <div className="flex space-x-3 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <Download />
          <span>Export</span>
        </div>
      </button>
      {/* Search */}
      <div className="flex-grow ">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 w-full"
            placeholder="Search for items"
          />
        </div>
      </div>

      {/* Delete */}

      <button className="text-white bg-red-600 hover:bg-red-600/90 py-3 focus:ring-1 focus:outline-none focus:ring-red-600/50 font-medium rounded-lg text-base px-4  text-center inline-flex items-center dark:focus:ring-red-600/55  space-x-3">
        <Trash2 />
        <span>Bulk Delete</span>
      </button>
    </div>
  );
}
