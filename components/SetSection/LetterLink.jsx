import Link from "next/link";

const LetterLink = ({ set, letter, backgroundColor }) => {
  return (
    <Link
      href={
        letter === "ff"
          ? `/learning-set/${set}/speed-sounds/ff`
          : letter === "ll"
          ? `/learning-set/${set}/speed-sounds/ll`
          : `/learning-set/${set}/speed-sounds/${letter}`
      }
      className="letter-link"
      style={{
        backgroundColor,
      }}
    >
      {letter === "ff" ? "f, ff" : letter === "ll" ? "l, ll" : letter}
    </Link>
  );
};

export default LetterLink;
