import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image
        src="/assets/logo.png"
        alt="logo"
        width={60}
        height={60}
        className="header__logo"
      />

      <button className="header__btn">Home</button>
    </header>
  );
};

export default Header;
