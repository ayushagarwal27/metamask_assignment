import { FC } from "react";

interface SearchBarProps {
  handleSearch: (val: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ handleSearch }) => {
  return (
    <>
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-purple-500 dark:text-purple-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          onChange={(e) => handleSearch(e.target.value)}
          className="block p-2 ps-10 text-sm text-purple-900 border border-purple-300 rounded-lg w-80 bg-purple-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-purple-700 dark:border-purple-600 dark:placeholder-purple-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by Name or Description"
        />
      </div>
    </>
  );
};
export default SearchBar;
