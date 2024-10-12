import { Game } from "../../types/game.ts";
import { FC, useState } from "react";
import Pagination from "./Pagination.tsx";
import SearchBar from "./SearchBar.tsx";

interface GameTableProps {
  games: Game[];
}

const GameTable: FC<GameTableProps> = ({ games }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredGames, setFilteredGames] = useState(games);
  const tableHeaders = ["Name", "Description", "Ranking", "Players"];
  const gamesPerPage = 10;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;

  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  function handlePageChange(number: number) {
    setCurrentPage(number);
  }

  function handleSort(num: number) {
    const nextGames = games.sort((a, b) => {
      if (num === 2) {
        return a.ranking - b.ranking;
      } else {
        return a.total_players - b.total_players;
      }
    });
    setFilteredGames([...nextGames]);
  }

  function handleSearch(val: string) {
    if (val === "") {
      setFilteredGames(games);
      return;
    }
    const nextGames = [...games].filter(
      (game) =>
        game.game_name.includes(val.toLowerCase()) ||
        game.description.includes(val.toLowerCase()),
    );
    setFilteredGames([...nextGames]);
  }

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <div className="relative max-w-[420px] md:max-w-[650px] lg:max-w-[1160px] xl:max-w-[1500px] overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-purple-500 dark:text-purple-400">
          <thead className="text-xs text-purple-700 uppercase bg-purple-50 dark:bg-purple-700 dark:text-purple-400">
            <tr>
              {tableHeaders.map((header, idx) => {
                return (
                  <th
                    scope="col"
                    className="px-6 py-3 text-purple-50 "
                    key={header}
                  >
                    <div className={"flex items-center"}>
                      <span>{header}</span>
                      {(header === "Ranking" || header === "Players") && (
                        <button onClick={() => handleSort(idx)}>
                          <svg
                            className="w-3 h-3 ms-1.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {currentGames.map((game) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-purple-800 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-600"
                  key={game.game_name}
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-purple-900 whitespace-nowrap dark:text-white"
                  >
                    {game.game_name}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium min-w-[450px] text-purple-900  dark:text-white"
                  >
                    {game.description}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-purple-900 whitespace-nowrap dark:text-white"
                  >
                    {game.ranking}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-purple-900 whitespace-nowrap dark:text-white"
                  >
                    {game.total_players}
                  </td>
                </tr>
              );
            })}
            {currentGames.length === 0 && (
              <p
                className={
                  "text-purple-900 text-center text-xl rounded-lg whitespace-nowrap p-2 bg-red-50 my-4"
                }
              >
                No Result found :(
              </p>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        gamesLength={games.length}
        gamesPerPage={gamesPerPage}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};
export default GameTable;
