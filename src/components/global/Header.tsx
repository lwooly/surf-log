import Link from "next/link";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <header className="p-8 flex w-full bg-green-300 text-slate-800">
      <Link href="/"><h1 className="text-xl">Surf Log </h1></Link>
      <div className="ml-auto">
        <DesktopNav />
      </div>
    </header>
  );
};

export default Header;
