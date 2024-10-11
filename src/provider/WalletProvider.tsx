import { createContext, ReactNode, useState } from "react";

export const WalletContext = createContext("");

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [wallet, setWallet] = useState("");
  return (
    // @ts-ignore
    <WalletContext.Provider value={{ wallet, setWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
