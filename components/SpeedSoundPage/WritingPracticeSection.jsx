const WritingPracticeSection = ({ arr, color }) => {
  const letters = arr.map((letter) => (
    <span
      key={letter}
      className="practice-writing-section__letter"
      style={{
        backgroundColor: color,
      }}
    >
      {letter}
    </span>
  ));
  return (
    <section className="practice-writing-section">
      <h2>Let's Practice Writing</h2>
      <p>
        Grab a pen or pencil and let's practice writing our letter. Call out the
        sound below, and ask your children to write them down:{" "}
      </p>
      <div className="practice-writing-section__letters">{letters}</div>
    </section>
  );
};

export default WritingPracticeSection;
