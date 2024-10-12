import { useContext } from "react";
import gamesData from "./games.json";
import { WalletContext } from "./provider/WalletProvider.tsx";
import Navbar from "./components/Navbar.tsx";
import WalletConnect from "./components/WalletConnect.tsx";
import GameTable from "./components/GameTable/GameTable.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileNavbar from "./components/MobileNavbar.tsx";

const App = () => {
  //@ts-ignore
  const { wallet } = useContext(WalletContext);

  return (
    <>
      <Navbar />
      <MobileNavbar />
      <div className={"min-h-svh flex justify-center bg-purple-300"}>
        {wallet ? (
          <div className={"flex flex-col mt-[60px] py-10 gap-4"}>
            <h3 className={"text-3xl text-center font-bold  text-purple-900 "}>
              Web3 Games
            </h3>
            <GameTable games={gamesData} />
          </div>
        ) : (
          <WalletConnect />
        )}
      </div>
      <ToastContainer />
    </>
  );
};
export default App;
