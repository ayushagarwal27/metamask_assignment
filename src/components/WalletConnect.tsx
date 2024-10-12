import { useContext } from "react";
import { WalletContext } from "../provider/WalletProvider.tsx";
import { useSDK } from "@metamask/sdk-react";
import { toast } from "react-toastify";

const WalletConnect = () => {
  // @ts-ignore
  const { setWallet } = useContext(WalletContext);
  const { sdk, provider } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      const balance = await provider?.request({
        method: "eth_getBalance",
        params: [accounts?.[0], "latest"],
      });
      setWallet({ address: accounts?.[0], balance });
    } catch (err: { message: string }) {
      toast.error(
        err?.message || "Something went wrong, please try again later!",
      );
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
