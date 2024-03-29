import { FaBitcoin } from "react-icons/fa6";
import { useState, useEffect } from "react";
import {
    RiMoneyEuroCircleFill,
    RiMoneyPoundCircleFill,
    RiMoneyDollarCircleFill
} from "react-icons/ri";


export default function Prices() {
    const [cryptoData, setCryptoData] = useState(null);
    const URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const icon = [
      {
        currency: "USD",
        svg: <RiMoneyDollarCircleFill size={36} />,
      },
      {
        currency: "GBP",
        svg: <RiMoneyPoundCircleFill size={36} />,
      },
      {
        currency: "EUR",
        svg: <RiMoneyEuroCircleFill size={36}/>,
      },
    ];

    async function getCurrentPrice() {
        try {
          const response = await fetch(URL);
          const data = await response.json();
          setCryptoData(data);
        } catch (error) {
          console.error("Error fetching Bitcoin data:", error);
        }
    }
    useEffect (() => {
        getCurrentPrice();
    },[]);
    return (
      <div className="mt-10 flex flex-col w-80 md:w-[36rem]">
        <h2>Task 3</h2>
        <div className="bg-zinc-700 flex flex-col items-center justify-center rounded-lg mt-10 aspect-square">
          <p className="mb-4">Bitcoin Rates</p>
          <FaBitcoin className="size-36" />
        </div>
        {cryptoData ? (
          <div className="grid gap-4 mt-8">
            {Object.keys(cryptoData.bpi).map((currency) => {
              const currencyIcon = icon.find(
                (item) => item.currency === currency
              );
              return (
                <div
                  key={currency}
                  className="flex flex-col items-start justify-between p-2 bg-zinc-700 rounded-md"
                  title={cryptoData.bpi[currency].description}
                >
                  <div className="flex flex-row justify-between w-full mb-2">
                    <h3 className="font-bold text-green-500">{currency}</h3>
                    {currencyIcon && currencyIcon.svg}
                  </div>
                  <div>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: cryptoData.bpi[currency].symbol,
                      }}
                    />
                    {cryptoData.bpi[currency].rate}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}
