import { FC, useState } from "react";
import GameCard from "./GameCard.tsx";
import { Game } from "../types/game.ts";
import Pagination from "./Pagination.tsx";

interface GameContainerProps {
  games: Game[];
}

const GameContainer: FC<GameContainerProps> = ({ games }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 10;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  function handlePageChange(number: number) {
    setCurrentPage(number);
  }

  return (
    <>
      <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"}>
        {currentGames.map((game) => (
          <GameCard key={game.game_name} game={game} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        gamesLength={games.length}
        handlePageChange={handlePageChange}
        gamesPerPage={gamesPerPage}
      />
    </>
  );
};
export default GameContainer;
