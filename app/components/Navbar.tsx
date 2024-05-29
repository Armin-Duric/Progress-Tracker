import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.gif";
import LogoText from "../../public/logo-text.png";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center">
      <Link href="/">
        <div className="flex flex-cols items-end mx-4 cursor-pointer w-fit">
          <Image
            src={Logo}
            alt="Logo"
            className=" md:w-[45px] md:h-[45px] w-[30px] h-[30ox]"
          />
          <Image
            src={LogoText}
            alt="DevPT"
            className="md:w-[90px] md:h-[30px] w-[60px] h-[10ox]"
          />
        </div>
      </Link>
      <div className="mx-6 pr-16">
        <ol className="flex flex-cols gap-4">
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/sign-in">
            <li>Login</li>
          </Link>
          <Link href="/sign-up">
            <li>Register</li>
          </Link>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
