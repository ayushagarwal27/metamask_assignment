import { useContext } from "react";
import gamesData from "./games.json";
// import GameContainer from "./components/GameContainer.tsx";
import { WalletContext } from "./provider/WalletProvider.tsx";
import Navbar from "./components/Navbar.tsx";
import WalletConnect from "./components/WalletConnect.tsx";
// import { useSDK } from "@metamask/sdk-react";
import GameTable from "./components/GameTable.tsx";

const App = () => {
  const { wallet } = useContext(WalletContext);

  return (
    <>
      <Navbar />
      <div className={"min-h-svh flex justify-center bg-purple-300"}>
        {wallet ? (
          <div className={"flex flex-col mt-[60px] py-10 gap-4"}>
            <h3
              className={
                "text-3xl text-center font-bold  text-purple-900 font-serif"
              }
            >
              Web3 Games
            </h3>
            {/*<GameContainer games={gamesData} />*/}
            <GameTable games={gamesData} />
          </div>
        ) : (
          <WalletConnect />
        )}
      </div>
    </>
  );
};
export default App;
