import { useState, useEffect } from "react";

function CoinApp() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  // TODO - 챌린지 : input으로 달러 받고 몇 개의 코인을 살 수 있을지?

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map(({ id, name, symbol, quotes }) => (
            <option key={id}>
              {name} ({symbol}): ${quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default CoinApp;
