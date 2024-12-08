import React, { useState, useEffect } from "react";
import stockImage1 from "../assets/StockSlide1.png"; // Example: Stock chart or market news
import stockImage2 from "../assets/StockSlide2.png"; // Example: Latest stock price updates

const images = [stockImage1, stockImage2];  // Only two images now

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), 500);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), 500);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 20000); // Automatically change slide every 20 seconds
    return () => clearInterval(interval);
  }, []);

  // Log the current slide index to the console
  console.log("Current Slide Index: ", current);

  return (
    <div
      className="slider-container"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",  // Set to full width
        maxWidth: "100%",  // Set to full width of parent container
        height: "auto",  // Let the height adjust based on content
        margin: "0 auto",  // Center the carousel
      }}
    >
      {/* Image Slider */}
      <div
        className="slider-images"
        style={{
          display: "flex",
          transform: `translateX(-${current * 100}%)`, // Slide transition effect
          transition: "transform 0.5s ease-in-out", // Smoother transition effect
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Stock Slide ${index + 1}`}
            style={{
              width: "100%",  // Ensure image takes up full width
              height: "auto",  // Maintain aspect ratio
              flexShrink: 0,
              objectFit: "cover", // Cover ensures full fill
            }}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "40px",
          height: "40px",
          backgroundColor: "transparent",  // Remove background color
          border: "2px solid black",  // Keep the border if you want it
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ width: "20px", height: "20px", color: "black" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "40px",
          height: "40px",
          backgroundColor: "transparent",  // Remove background color
          border: "2px solid black",  // Keep the border if you want it
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ width: "20px", height: "20px", color: "black" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Carousel;
