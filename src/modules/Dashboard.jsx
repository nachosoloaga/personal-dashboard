import Weather from '../components/weather/Weather';
import Quotes from '../components/quotes/Quotes';
import Crypto from '../components/crypto/Crypto';
import Datetime from '../components/datetime/Datetime';
import css from './dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <section className="top-section">
        <div className="top-left">
          <Weather />
        </div>
        <div className="top-right">
          <Quotes />
        </div>
      </section>
      <section className="bottom-section">
        <div className="bottom-left">
          <Crypto />
        </div>
        <div className="bottom-right">
          <Datetime />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
