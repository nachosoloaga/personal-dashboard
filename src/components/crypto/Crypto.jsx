import React, { useEffect, useState } from 'react';
import './crypto.css';

const initialCryptoData = {
  bids: [['']],
};

const Crypto = () => {
  const [btcData, setBtcData] = useState(initialCryptoData);
  const [ethData, setEthData] = useState(initialCryptoData);
  const [daiData, setDaiData] = useState(initialCryptoData);

  useEffect(() => {
    fetch(`https://api.gdax.com/products/BTC-USD/book`)
      .then((res) => res.json())
      .then((data) => {
        setBtcData(data);
      })
      .catch();
  }, []);

  useEffect(() => {
    fetch(`https://api.gdax.com/products/ETH-USD/book`)
      .then((res) => res.json())
      .then((data) => {
        setEthData(data);
      })
      .catch();
  }, []);

  useEffect(() => {
    fetch(`https://api.gdax.com/products/DAI-USD/book`)
      .then((res) => res.json())
      .then((data) => {
        setDaiData(data);
      })
      .catch();
  }, []);

  return (
    <div className="crypto-container">
      <h1 className="crypto-text crypto-title">Crypto</h1>
      <h3 className="crypto-text">{`BTC: $${btcData.bids[0][0]}`}</h3>
      <h3 className="crypto-text">{`ETH: $${ethData.bids[0][0]}`}</h3>
      <h3 className="crypto-text">{`DAI: $${daiData.bids[0][0]}`}</h3>
    </div>
  );
};

export default Crypto;
