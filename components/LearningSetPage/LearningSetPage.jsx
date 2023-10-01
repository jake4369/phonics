import SetSection from "@components/SetSection/SetSection";

import { setOneLetters, setTwoLetters, setThreeLetters } from "@constants";

const LearningSetPage = ({ set }) => {
  const setData = [
    {
      1: {
        title: "Set 1 Speed Sounds",
        lettersArr: setOneLetters,
      },
      2: {
        title: "Set 2 Speed Sounds",
        lettersArr: setTwoLetters,
      },
      3: {
        title: "Set 3 Speed Sounds",
        lettersArr: setThreeLetters,
      },
    },
  ];

  return (
    <div>
      <SetSection
        set={set}
        title={setData[0][set].title}
        lettersArr={setData[0][set].lettersArr}
      />
    </div>
  );
};

export default LearningSetPage;
