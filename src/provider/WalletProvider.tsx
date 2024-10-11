import { createContext, ReactNode, useState } from "react";

export const WalletContext = createContext("");
import { MetaMaskProvider } from "@metamask/sdk-react";

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [wallet, setWallet] = useState("");
  return (
    // @ts-ignore
    <WalletContext.Provider value={{ wallet, setWallet }}>
      <MetaMaskProvider
        debug={false}
        sdkOptions={{
          dappMetadata: {
            name: "Example React Dapp",
            url: window.location.href,
          },
          infuraAPIKey: "https://eth.llamarpc.com",
          // Other options.
        }}
      >
        {children}
      </MetaMaskProvider>
    </WalletContext.Provider>
  );
};
