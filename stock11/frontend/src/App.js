import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Components/Auth';
import Dashboard from './Dashboard';
import Portfolio from './Portfolio';
import BuyStocks from './Buystocks';
import StockPrediction from './StockPrediction';
import Scroll from './scroll'; // Import the Scroll component (ensure the path is correct)

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Define application routes */}
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/buy-stocks" element={<BuyStocks />} />
          <Route path="/stock-prediction" element={<StockPrediction />} />
          <Route path="/scroll" element={<Scroll />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
