import { createContext, FC, PropsWithChildren, useState } from "react";

export const WalletContext = createContext("");
import { MetaMaskProvider } from "@metamask/sdk-react";

export const WalletProvider = ({ children }: PropsWithChildren) => {
  const [wallet, setWallet] = useState<null | { address: ""; balance: number }>(
    null,
  );
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
