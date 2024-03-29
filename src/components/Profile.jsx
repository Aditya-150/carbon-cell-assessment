import { useState, useEffect } from "react";
import Web3 from "web3";

export default function Profile() {
  const [accounts, setAccounts] = useState([]);

  async function fetchAccounts() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);

      try {
        const retrievedAccounts = await web3.eth.getAccounts();
        setAccounts(retrievedAccounts);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    } else {
      console.error("Please install a browser extension like MetaMask.");
    }
  }

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className="text-xl my-40 h-full p-4">
      <p>
        Connected account: {accounts.length > 0 ? accounts[0] : "Not connected"}
      </p>
    </div>
  );
}
