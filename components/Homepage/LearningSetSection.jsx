import LearningSetLink from "./LearningSetLink";

const LearningSetSection = () => {
  const sets = [
    {
      set: 1,
      img: "/assets/shared/girl-reading.png",
      backgroundColor: "#CDB4DB",
    },
    {
      set: 2,
      img: "/assets/shared/boy-reading.png",
      backgroundColor: "#FFC8DD",
    },
    {
      set: 3,
      img: "/assets/shared/children-reading.png",
      backgroundColor: "#FFAFCC",
    },
  ];
  return (
    <section className="learning-set-section">
      <h2>Select A Learning Set:</h2>
      {sets.map((obj) => (
        <LearningSetLink
          key={obj.set}
          set={obj.set}
          img={obj.img}
          backgroundColor={obj.backgroundColor}
        />
      ))}
    </section>
  );
};

export default LearningSetSection;
