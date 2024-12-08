import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick'; // Import react-slick for the slideshow
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const companies = [
    { name: 'Apple', logo: '/apple-logo.png', url: 'https://www.apple.com/investor/' },
    { name: 'Google', logo: '/google-icon.png', url: 'https://www.google.com/finance/' },
    { name: 'Amazon', logo: '/amazon-logo.png', url: 'https://www.amazon.com/invest/' },
    // Add more companies here
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleLogout = () => {
    // Perform any logout-related operations
    navigate('/'); // Redirect to the login page
  };

  const handlePortfolio = () => {
    navigate('/portfolio'); // Redirect to Portfolio page
  };

  const handleInvest = (companyUrl) => {
    window.open(companyUrl, '_blank'); // Open the company's stock-buying page
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            StockMarketPro
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/stock-prediction">
                  Market Updates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mt-4">
        <h1>Welcome to the Dashboard</h1>
        <p>Track your portfolio, get live market updates, and more!</p>

        {/* Slideshow */}
        <h3 className="mt-5">Company Stocks</h3>
        <Slider {...sliderSettings}>
          {companies.map((company) => (
            <div
              key={company.name}
              className="text-center p-3"
              onClick={() => handleInvest(company.url)}
            >
              <div className="card" style={{ cursor: 'pointer' }}>
                <img
                  src={company.logo}
                  className="card-img-top"
                  alt={`${company.name} logo`}
                  style={{ height: '150px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{company.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Dashboard;
