import { useContext } from "react";
import gamesData from "./games.json";
import GameContainer from "./components/GameContainer.tsx";
import { WalletContext } from "./provider/WalletProvider.tsx";
import Navbar from "./components/Navbar.tsx";
import WalletConnect from "./components/WalletConnect.tsx";
import { useSDK } from "@metamask/sdk-react";

const App = () => {
  const { wallet } = useContext(WalletContext);
  const { sdk, connected, connecting, provider, chainId } = useSDK();
  console.log({ sdk, connected, connecting, provider, chainId });
  return (
    <>
      <Navbar />
      <div className={"min-h-svh flex justify-center bg-purple-300"}>
        {wallet ? (
          <div
            className={
              "flex flex-col mt-[60px] max-w-[1200px] mx-10 py-10 gap-4"
            }
          >
            <h3 className={"text-2xl text-center font-bold"}>Games</h3>
            <GameContainer games={gamesData} />
          </div>
        ) : (
          <WalletConnect />
        )}
      </div>
    </>
  );
};
export default App;
