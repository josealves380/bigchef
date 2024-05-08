import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Image src="/logo.png" alt="FSW Foods" height={30} width={100} />
    </div>
  );
};

export default Header;
