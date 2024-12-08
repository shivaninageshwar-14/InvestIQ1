import React, { useEffect, useRef } from "react";
import "./scroll.css"; // Optional: Add styles for this page

const Scroll = () => {
  const containerRef = useRef(null);

  const scrollContainer = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: direction === "down" ? 100 : -100,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        scrollContainer("down");
      } else if (event.key === "ArrowUp") {
        scrollContainer("up");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="scroll-page">
      <header className="scroll-header">
        <h1>Scrollable Page</h1>
        <p>Use Arrow Up and Down keys to scroll.</p>
      </header>
      <div className="scroll-container" ref={containerRef}>
        <div className="content-section">Section 1</div>
        <div className="content-section">Section 2</div>
        <div className="content-section">Section 3</div>
        <div className="content-section">Section 4</div>
      </div>
    </div>
  );
};

export default Scroll;
