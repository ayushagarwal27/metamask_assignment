import { useContext, useState } from "react";
import { WalletContext } from "../provider/WalletProvider.tsx";
import { useSDK } from "@metamask/sdk-react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // @ts-ignore
  const { wallet, setWallet } = useContext(WalletContext);
  const { sdk } = useSDK();
  return (
    <nav className="md:hidden fixed inset-x-0 top-0  shadow bg-black z-[100]">
      <div className="container px-6 py-2 mx-auto md:flex">
        <div className="flex items-center justify-between ">
          <button
            className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg text-gray-200 hover:bg-gray-800 md:mx-2"
            onClick={() => setIsOpen(false)}
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
          </button>
          <div className="flex lg:hidden">
            <button
              aria-label="toggle menu"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            "z-20 w-full absolute inset-0 top-[60px] min-h-svh px-6 py-4 transition-all duration-300 ease-in-out bg-black md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between" +
            ` ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`
          }
        >
          {wallet && (
            <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
              <div className={"h-[2px] bg-gray-600 my-2 mx-auto w-[96%]"} />
              <button
                className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg text-gray-200 hover:bg-gray-800 md:mx-2"
                onClick={() => setIsOpen(false)}
              >
                <p className={"text-white"}>
                  Address: {wallet.address.substring(0, 10)}...
                </p>
              </button>
              <div
                className={"h-[2px] w-full bg-gray-600 my-2 mx-auto w-[96%]"}
              />
              <button
                className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg text-gray-200 hover:bg-gray-800 md:mx-2"
                onClick={() => setIsOpen(false)}
              >
                <p className={"text-white"}>
                  Balance: {Number(wallet.balance)} ETH
                </p>
              </button>
              <button
                className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg text-gray-200 hover:bg-gray-800 md:mx-2"
                onClick={() => {
                  sdk?.disconnect();
                  setWallet(null);
                  setIsOpen(false);
                }}
              >
                <div
                  className={
                    "bg-purple-800 text-white font-semibold px-2 py-1 rounded-lg hover:bg-purple-800/70"
                  }
                >
                  Disconnect
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
