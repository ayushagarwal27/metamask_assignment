import { useContext } from "react";
import { WalletContext } from "../provider/WalletProvider.tsx";
import { useSDK } from "@metamask/sdk-react";

const Navbar = () => {
  const { wallet, setWallet } = useContext(WalletContext);
  const { sdk } = useSDK();
  return (
    <nav
      className={
        "h-[80px] bg-purple-800/30 backdrop-blur fixed top-0 z-[2] w-screen py-4"
      }
    >
      <div
        className={
          "max-w-[1100px] mx-auto flex flex-row items-center justify-between"
        }
      >
        <span className={"text-purple-800 font-bold "}>ETH Games</span>
        {wallet && (
          <div className={"flex gap-4 items-center"}>
            <p
              className={"bg-purple-200 text-purple-600 rounded-lg px-1 py-0.5"}
            >
              {wallet.substring(0, 10)}...
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
