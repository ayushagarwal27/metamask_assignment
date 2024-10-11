import { FC } from "react";
import { Game } from "../types/game.ts";

interface GameCardProps {
  game: Game;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  const { game_name, description, ranking, total_players } = game;
  return (
    <div
      key={game_name}
      className={
        "flex flex-col gap-2 max-w-96 bg-black text-white rounded-xl p-4 hover:-translate-y-1 transition-all duration-300"
      }
    >
      <h3
        className={
          "capitalize font-bold bg-purple-800 py-2 px-1 rounded-lg text-center"
        }
      >
        {game_name}
      </h3>
      <p className={"text-sm"}>{description}</p>
      <div className={"mt-auto"}>
        <p className={"flex flex-row justify-between"}>
          <span>Ranking:</span>{" "}
          <span className={"text-purple-300  font-bold"}>{ranking}</span>
        </p>
        <p className={"flex flex-row justify-between mt-1"}>
          <span>Players:</span>{" "}
          <span className={"text-purple-300  font-bold"}>{total_players}</span>
        </p>
      </div>
    </div>
  );
};
export default GameCard;
