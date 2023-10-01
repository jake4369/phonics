import Link from "next/link";

const LetterLink = ({ set, letter, backgroundColor }) => {
  return (
    <Link
      href={`/learning-set/${set}/speed-sounds/${letter}`}
      className="letter-link"
      style={{
        backgroundColor,
      }}
    >
      {letter}
    </Link>
  );
};

export default LetterLink;
