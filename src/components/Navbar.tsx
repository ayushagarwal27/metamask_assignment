import { useContext } from "react";
import { WalletContext } from "../provider/WalletProvider.tsx";
import { useSDK } from "@metamask/sdk-react";

const Navbar = () => {
  //@ts-ignore
  const { wallet, setWallet } = useContext(WalletContext);
  const { sdk } = useSDK();
  return (
    <nav
      className={
        "hidden md:block h-[80px] bg-black/80 backdrop-blur fixed  top-0 z-[2] w-screen py-4 md:px-10 xl:px-0"
      }
      style={{
        borderBottom: "5px solid",
        borderImage: "linear-gradient(to right, purple, cyan) 1",
      }}
    >
      <div
        className={
          "max-w-[1100px] mx-auto flex flex-row items-center justify-between"
        }
      >
        <p className={"text-white font-bold text-xl"}>
          <span
            className={
              "py-4 pl-1 text-center font-bold from-indigo-200 via-yellow-100 to-yellow-100 bg-gradient-to-r bg-clip-text text-transparent"
            }
          >
            Web3
          </span>{" "}
          Games
        </p>
        {wallet && (
          <div className={"flex gap-4 items-center"}>
            <p
              className={"bg-purple-200 text-purple-600 rounded-lg px-1 py-0.5"}
            >
              {wallet.address.substring(0, 10)}...
            </p>
            <p
              className={"bg-purple-200 text-purple-600 rounded-lg px-1 py-0.5"}
            >
              {Number(wallet.balance)} ETH
            </p>
            <button
              className={
                "bg-purple-800 text-white font-semibold px-2 py-1 rounded-lg hover:bg-purple-800/70"
              }
              onClick={() => {
                sdk?.disconnect();
                setWallet(null);
              }}
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
