import React, { useContext } from "react";
import { WalletContext } from "../provider/WalletProvider.tsx";
import { useSDK } from "@metamask/sdk-react";

const WalletConnect = () => {
  const { setWallet } = useContext(WalletContext);
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setWallet(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  return (
    <button
      className={
        "bg-black/80 px-3 py-2 rounded-lg text-white h-[60px] mt-[100px]"
      }
      onClick={connect}
    >
      Connect Wallet
    </button>
  );
};
export default WalletConnect;
