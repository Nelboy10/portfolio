"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navlinks = [
  { title: "About", path: "#premier" },
  { title: "Projects", path: "#competence" }, 
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <Link
          href="/"
          className="text-2xl md:text-4xl text-white font-semibold"
        >
          Nel
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-expanded={navbarOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menu mobile */}
      {navbarOpen && (
        <div id="mobile-menu" className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Navlink
                  href={link.path}
                  title={link.title}
                  
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
