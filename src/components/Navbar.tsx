"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (navContainerRef.current) {
      const isScrollingDown = currentScrollY > lastScrollY;
      const isScrollingUp = currentScrollY < lastScrollY;

      if (currentScrollY === 0) {
        setIsNavVisible(true);
        navContainerRef.current.classList.remove("floating-nav");
      } else if (isScrollingDown) {
        setIsNavVisible(false);
        navContainerRef.current.classList.add("floating-nav");
      } else if (isScrollingUp) {
        setIsNavVisible(true);
        navContainerRef.current.classList.add("floating-nav");
      }
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.3,
      });
    }
  }, [isNavVisible]);

  return (
    <nav
      ref={navContainerRef}
      className="fixed inset-x-0 top-0 h-16 px-6 md:px-20 bg-gradient-to-b from-black to-transparent z-50  transition-all duration-700 sm:inset-x-6"
    >
      <div className="flex items-center justify-between pt-4">
        <Link href="/" aria-label="Home">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-sm md:text-base items-center justify-center">
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition-colors duration-300"
              aria-label="Learn about Air"
            >
              Air
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition-colors duration-300"
              aria-label="Learn about Gravity"
            >
              Gravity
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition-colors duration-300"
              aria-label="Experience our features"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition-colors duration-300"
              aria-label="Visit our shop"
            >
              Shop
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-white text-base bg-black bg-opacity-90 p-6 rounded-lg">
          <li>
            <Link
              href="/"
              className="block hover:text-gray-300 transition-colors duration-300"
              aria-label="Learn about Air"
            >
              Air
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block hover:text-gray-300 transition-colors duration-300"
              aria-label="Learn about Gravity"
            >
              Gravity
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block hover:text-gray-300 transition-colors duration-300"
              aria-label="Experience our features"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block hover:text-gray-300 transition-colors duration-300"
              aria-label="Visit our shop"
            >
              Shop
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
