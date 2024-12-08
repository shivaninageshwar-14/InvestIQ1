import React from 'react';
import Carousel from './Carousel'; 
export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center", padding: "20px 0" }}>Welcome to the Stock Market</h1>
      <Carousel /> {/* Your carousel displaying the images */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2>Explore Stock Trends and News</h2>
        <p>Scroll down to explore more details about stock market trends, updates, and advice.</p>
      </div>
      {/* Other sections like stock news, market policies, or query forms can be added here */}
    </div>
  );
}

