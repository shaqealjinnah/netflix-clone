import { BellIcon, ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AccountMenu from "./AccountMenu";
import BasicMenu from "./BasicMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"} transition`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default">Home</li>
          <li className="headerLink cursor-not-allowed">TV Shows</li>
          <li className="headerLink cursor-not-allowed">Movies</li>
          <li className="headerLink cursor-not-allowed">New & Popular</li>
          <li className="headerLink cursor-not-allowed">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-6 w-6 cursor-not-allowed" />
        <p className="hidden lg:inline cursor-not-allowed">Kids</p>
        <BellIcon className="hidden sm:inline h-6 w-6 cursor-not-allowed" />

        <div
          onClick={() => {
            setShowAccountMenu(!showAccountMenu);
          }}
          className="flex cursor-pointer space-x-1/2"
        >
            <AccountMenu/>
        </div>
      </div>
    </header>
  );
}

export default Header;
