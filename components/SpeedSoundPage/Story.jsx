import Image from "next/image";

const Story = ({ img, story }) => {
  return (
    <section className="speed-sound__letter-page__story">
      <Image src={img} alt="" width={100} height={100} priority />

      <p>{story}</p>
    </section>
  );
};

export default Story;
