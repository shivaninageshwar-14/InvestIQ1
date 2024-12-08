import React, { useState } from 'react';
import SignUp from './SignUp';
import HomePage1 from './HomePage1';
import stockImage1 from '../assets/StockSlide1.png';
import stockImage2 from '../assets/StockSlide2.png';
import tradeImage from '../images/trade.png'; // Import the trade image
import tradeImage11 from '../images/trade11.png'; // Import the new trade image

// New path to the video placed in the public folder
const videoSource = '/images/videooooo.webm'; // Updated video path

const Auth = () => {
  const [view, setView] = useState(''); // 'signup', or '' (none)

  const closeModal = () => setView(''); // Function to close the modal

  return (
    <div
      className="auth-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#fff',
      }}
    >
      {/* Starting Image with Titles */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Background Image */}
        <img
          src={tradeImage}
          alt="Trade"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
        {/* Overlay Titles */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              margin: '0',
              color: '#000', // Set to black
              fontFamily: "'Dancing Script', cursive", // Use cursive font
              animation: 'fadeIn 3s ease-in-out', // Add animation
            }}
          >
            InvestIQ
          </h1>
          <button
            onClick={() => setView('signup')}
            style={{
              marginTop: '20px',
              padding: '15px 30px',
              fontSize: '18px',
              fontWeight: 'bold',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* HomePage1 */}
      <HomePage1 />

      {/* Trade Image Section with "Love in Every Trade" Text */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'auto',
          marginBottom: '0px', // Ensure no extra space below
        }}
      >
        {/* tradeImage11 Below tradeImage */}
        <img
          src={tradeImage11}
          alt="Trade 11"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
        {/* Overlay Text: "Love in Every Trade" */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              margin: '0',
              color: '#000', // Set to black
              fontFamily: "'Dancing Script', cursive", // Use cursive font
              animation: 'fadeIn 3s ease-in-out', // Add animation
            }}
          >
            Love in Every Trade
          </h2>
        </div>
      </div>

      {/* First Image: stockImage1 */}
      <img
        src={stockImage1}
        alt="Stock Image 1"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          margin: '0',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      />

      {/* Carousel with New Video */}
      <div
        className="carousel-container"
        style={{ margin: '20px 0', padding: '0', width: '100%', height: 'auto' }}
      >
        {/* New Video */}
        <video
          src={videoSource}
          controls
          style={{
            width: '80%',
            height: 'auto',
            margin: '20px 0',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        />

        {/* Second Image: stockImage2 */}
        <img
          src={stockImage2}
          alt="Stock Image 2"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            margin: '0',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>

      {/* Sign Up Modal */}
      {view === 'signup' && (
        <div className="modal show">
          <div className="modal-content">
            <span
              className="close-btn"
              onClick={closeModal}
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                position: 'absolute',
                top: '10px',
                right: '20px',
                cursor: 'pointer',
              }}
            >
              &times;
            </span>
            <SignUp />
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
