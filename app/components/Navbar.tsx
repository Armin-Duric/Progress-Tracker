import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.gif";
import LogoText from "../../public/logo-text.png";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center">
      <Link href="/">
        <div className="flex flex-cols items-end p-2 mx-4 cursor-pointer w-fit">
          <Image src={Logo} alt="Logo" className="mx-2" />
          <Image src={LogoText} alt="DevPT" className="w-[90px] h-[30px]" />
        </div>
      </Link>
      <div className="p-2 mx-4">
        <ol className="flex flex-cols gap-4">
          <li>About</li>
          <li>Login</li>
          <li>Register</li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
