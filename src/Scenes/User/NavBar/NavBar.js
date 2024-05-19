import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 65) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="w-screen flex flex-col">
      <main
        className={
          scrolled
            ? "scrolled w-screen bg-white text-black fixed pt-1 h-[60px] justify-center z-50 items-center flex flex-col"
            : "sticky bg-darkBlue text-white top-0 left-0 pt-1 h-[60px] flex flex-col justify-center items-center"
        }
      >
        <div className="w-screen flex justify-between items-center px-5 md:px-20">
          <a href="/" className="text-xl">
            Market<span className="font-bold">Trend</span>
          </a>
          <nav className="hidden justify-between item-center gap-8 md:flex">
            <h4>Send Money</h4>
            <h4>Converter</h4>
            <h4>Currency API</h4>
            <h4>Tools</h4>
          </nav>
          <div className="hamburger md:hidden">
            <HiMenu />
          </div>
          <div className="hidden md:flex gap-4">
            <button className="w-28 h-8 rounded-lg bg-lightBlue uppercase text-white font-semibold">
              sign in
            </button>
            <button className="w-28 h-8 rounded-lg bg-lightBlue uppercase text-white font-semibold">
              register
            </button>
          </div>
        </div>

        <div className="mobilesideBar"></div>
      </main>
    </div>
  );
};

export default NavBar;
