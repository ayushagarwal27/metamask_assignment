import React, { useContext } from "react";
import { WalletContext } from "../provider/WalletProvider.tsx";

const WalletConnect = () => {
  const { setWallet } = useContext(WalletContext);
  function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          const metamaskAccount = accounts[0];
          setWallet(metamaskAccount);
        });
    } else {
      window.open("https://metamask.io/download/", "_blank");
    }
  }
  return (
    <button
      className={
        "bg-black/80 px-3 py-2 rounded-lg text-white h-[60px] mt-[100px]"
      }
      onClick={connectWallet}
    >
      Connect Wallet
    </button>
  );
};
export default WalletConnect;
