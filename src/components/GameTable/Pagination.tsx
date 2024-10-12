import { FC } from "react";

interface PaginationProps {
  gamesLength: number;
  gamesPerPage: number;
  handlePageChange: (num: number) => void;
  currentPage: number;
}

const Pagination: FC<PaginationProps> = ({
  gamesLength,
  gamesPerPage,
  handlePageChange,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(gamesLength / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <p
        key={number}
        onClick={() => handlePageChange(Number(number))}
        className={
          "w-8 h-8 rounded-full flex justify-center items-center text-white font-bold cursor-pointer" +
          ` ${currentPage === number ? "bg-violet-900" : "bg-violet-900/60"}`
        }
      >
        {number}
      </p>
    );
  });
  return (
    <div className={"flex gap-3 justify-center mt-1"}>{renderPageNumbers}</div>
  );
};
export default Pagination;
