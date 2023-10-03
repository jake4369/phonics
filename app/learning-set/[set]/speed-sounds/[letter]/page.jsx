"use client";

import { useParams } from "next/navigation";

import data from "./../../../../../data/data.json";

import Hero from "@components/SpeedSoundPage/Hero";
import Story from "@components/SpeedSoundPage/Story";
import Soundcard from "@components/SpeedSoundPage/Soundcard";
import TracingComponent from "@components/SpeedSoundPage/TracingComponent";
import SoundingSection from "@components/SpeedSoundPage/SoundingSection";
import FlashcardSection from "@components/Shared/FlashcardSection";
import WritingPracticeSection from "@components/SpeedSoundPage/WritingPracticeSection";
import SingAlongSection from "@components/SpeedSoundPage/SingAlongSection";

const page = () => {
  const { letter } = useParams();
  const letterData = data[0][letter];

  return (
    <div className="speed-sound__letter-page">
      <Hero
        letter={letter}
        pronunciation={letterData.pronunciation}
        color={letterData.color}
      />

      <Story img={letterData.storyImgUrl} story={letterData.story} />

      <Soundcard letter={letter} color={letterData.color} />

      <TracingComponent
        letter={letter}
        width={400}
        height={400}
        color={letterData.color}
      />

      <SoundingSection letter={letter} arr={letterData.soundingImages} />

      <FlashcardSection
        arr={letterData.flashcardWords}
        color={letterData.color}
      />

      <WritingPracticeSection
        arr={letterData.revisionLetters}
        color={letterData.color}
      />

      {letter !== "ss" && (
        <SingAlongSection
          img={letterData.songImg}
          song={letterData.song}
          arr={letterData.songLyrics}
          color={letterData.color}
        />
      )}
    </div>
  );
};

export default page;
