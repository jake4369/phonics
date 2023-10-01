import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky-header">
      <Image
        src="/assets/logo.png"
        alt="logo"
        width={60}
        height={60}
        className="header__logo"
        priority
      />

      <Link href="/" className="header__btn">
        Home
      </Link>
    </header>
  );
};

export default Header;
