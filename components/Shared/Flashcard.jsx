"use client";

import Image from "next/image";

import { useState } from "react";

const Flashcard = ({ arr, color }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    if (currentCardIndex < arr.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  return (
    <div
      className="flashcard-container card"
      style={{
        borderColor: color,
      }}
    >
      {arr.length > 0 && (
        <div className="flashcard">
          <div className="flashcard-content">
            <p className="flashcard-text" style={{ color }}>
              {arr[currentCardIndex]}
            </p>
          </div>
          <div className="flashcard-btns">
            <button
              onClick={handlePrevious}
              disabled={currentCardIndex === 0}
              className="flashcard-btn action-btn"
              style={{
                backgroundColor: currentCardIndex === 0 ? "gray" : color,
                marginRight: "8px",
              }}
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentCardIndex === arr.length - 1}
              className="flashcard-btn action-btn"
              style={{
                backgroundColor:
                  currentCardIndex === arr.length - 1 ? "gray" : color,
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
