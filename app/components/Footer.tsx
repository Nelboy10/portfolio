import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-semibold">Nel</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Tous droits réservés.</p>
        </div>

        <div className="flex space-x-6">
          <Link href="#premier" className="text-sm hover:text-gray-300">About</Link>
          <Link href="#competence" className="text-sm hover:text-gray-300">Projects</Link>
          <Link href="#contact" className="text-sm hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
