"use client";

import { useState, useEffect } from "react";

import Title from "./Title";
import LetterLink from "./LetterLink";

const SetSection = ({ set, title, lettersArr }) => {
  const colors = ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    // Update the current color index for the next set of five buttons
    setCurrentColorIndex((prevIndex) => (prevIndex + 5) % colors.length);
  }, []); // Ensure this effect runs only once on initial render

  const letterLinksContainer = lettersArr.map((obj) => (
    <div className="letter-links__main-container" key={obj.group}>
      <h3 className="letter-links__group-title">{obj.group}</h3>
      <div className="letter-links__flex-container">
        {obj.letters.map((letter, index) => (
          <LetterLink
            key={letter}
            set={set}
            letter={letter}
            backgroundColor={
              colors[(currentColorIndex + index) % colors.length]
            }
          />
        ))}
      </div>
    </div>
  ));

  return (
    <section className="set-section">
      <Title>{title}</Title>

      {letterLinksContainer}
    </section>
  );
};

export default SetSection;
