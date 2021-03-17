import React, { useState, useRef, useEffect } from 'react';

import Weather from '../components/weather/Weather';
import Crypto from '../components/crypto/Crypto';

import './dashboard.css';
import Background from '../images/background.jpg';

const search = (event, searchTerm) => {
  event.preventDefault();
  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
    searchTerm
  )}`;
};

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <section className="top-section">
        <Weather />
        <Crypto />
      </section>
      <section className="bottom-section">
        <form>
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
            ref={inputRef}
          />
          <button
            type="submit"
            onClick={(event) => search(event, searchTerm)}
          ></button>
        </form>
      </section>
    </div>
  );
};

export default Dashboard;
