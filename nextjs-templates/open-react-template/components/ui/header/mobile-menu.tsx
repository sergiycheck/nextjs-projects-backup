"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useHideScrollbar } from "../../common/hooks/use-hide-scrollbar";
import { headerElements } from "./shared";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node))
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  // hide the scrollbar when the mobile menu is open
  useHideScrollbar({ isOpen: mobileNavOpen });

  // close the mobile menu when screen bigger than md
  useEffect(() => {
    const resizeHandler = (): void => {
      if (window.innerWidth > 768 && mobileNavOpen) {
        setMobileNavOpen(false);
        setRectY3(18);
      }
    };

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  });

  const [rectY3, setRectY3] = useState<number>(18);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    setRectY3(mobileNavOpen ? 18 : 11);
  };

  return (
    <div className="md:hidden z-10">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"} right-10 top-6 fixed`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={toggleMobileNav}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out relative"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y={rectY3} width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="fixed top-[80px] z-20 left-0 w-full 
          overflow-hidden transition-all duration-300 ease-in-out backdrop-blur-custom-1"
        style={mobileNavOpen ? { height: window.innerHeight, opacity: 1 } : { height: 0, opacity: 0.8 }}
      >
        <ul className="px-4 py-2 h-full flex flex-col items-center">
          {headerElements.map((el) => (
            <li key={el.name}>
              <Link
                href={el.href}
                onClick={toggleMobileNav}
                className="font-medium  px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
