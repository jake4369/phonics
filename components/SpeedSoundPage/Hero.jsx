import React from "react";

const Hero = ({ letter, pronunciation, color }) => {
  return (
    <section className="speed-sound__letter-page__hero">
      <h1 style={{ color }}>{letter}</h1>

      <p>{pronunciation}</p>
    </section>
  );
};

export default Hero;
