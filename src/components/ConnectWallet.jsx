import Web3 from "web3";
import { useState } from "react";

export default function ConnectWallet() {
  const [connectedAccount, setConnectedAccount] = useState(null);

  async function connectToWallet() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);

      await window.ethereum.request({ method: "eth_requestAccounts" });

      const accounts = await web3.eth.getAccounts();
      setConnectedAccount(accounts[0]);
      console.log(connectedAccount);
    } else {
      alert("Please download metamask");
    }
  }
  return (
    <div>
      <button
        onClick={() => connectToWallet()}
        className="p-2 absolute top-4 right-4 hover:opacity-80 bg-green-500 rounded-lg text-base font-semibold"
      >
        Connect Wallet
      </button>
    </div>
  );
}
