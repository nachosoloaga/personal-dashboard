import React from 'react';

import Weather from '../components/weather/Weather';
import Quotes from '../components/quotes/Quotes';
import Crypto from '../components/crypto/Crypto';
import Datetime from '../components/datetime/Datetime';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <section className="top-section">
        <Weather />
        <Quotes />
      </section>
      <section className="bottom-section">
        <Crypto />
        <Datetime />
      </section>
    </div>
  );
};

export default Dashboard;
