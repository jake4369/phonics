import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section">
      <Image
        src="/assets/images/homepage/banner.png"
        alt="Phonics"
        width={300}
        height={200}
        className="hero-section__img"
        priority
      />

      <h1>Welcome to My Phonics</h1>
    </section>
  );
};

export default Hero;
