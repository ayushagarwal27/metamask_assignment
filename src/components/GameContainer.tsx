import { FC, useState } from "react";
import GameCard from "./GameCard.tsx";
import { Game } from "../types/game.ts";

interface GameContainerProps {
  games: Game[];
}

const GameContainer: FC<GameContainerProps> = ({ games }) => {
  const [page, setPage] = useState(1);
  const hasNextGames = page * games.length > 10;

  return (
    <>
      <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"}>
        {games.map((game) => (
          <GameCard key={game.game_name} game={game} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Previous
        </button>

        <button className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
        </button>
      </div>
    </>
  );
};
export default GameContainer;
