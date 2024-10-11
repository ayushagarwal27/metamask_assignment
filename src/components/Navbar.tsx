import { useContext } from "react";
import { WalletContext } from "../provider/WalletProvider.tsx";

const Navbar = () => {
  const { wallet } = useContext(WalletContext);
  return (
    <nav
      className={
        "h-[60px] bg-purple-800/30 backdrop-blur fixed top-0 z-[2] w-screen py-3"
      }
    >
      <div className={"max-w-[1100px] mx-auto flex flex-row justify-between"}>
        <span className={"text-purple-800 font-bold "}>ETH Games</span>
        {wallet && <span>{wallet}</span>}
      </div>
    </nav>
  );
};
export default Navbar;
