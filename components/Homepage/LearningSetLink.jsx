import Image from "next/image";
import Link from "next/link";

const LearningSetLink = ({ set, img, backgroundColor }) => {
  return (
    <Link
      href={`/learning-set/${set}`}
      className="learning-set-link"
      style={{
        backgroundColor,
      }}
    >
      <span>Set {set}</span>

      <Image src={img} alt="" width={100} height={100} />
    </Link>
  );
};

export default LearningSetLink;
