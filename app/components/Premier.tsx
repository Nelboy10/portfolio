"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Premier = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 bg-[#121212]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full max-w-7xl gap-8">

        {/* Texte à gauche */}
        <div className="col-span-7 text-center lg:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold py-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>

            <TypeAnimation
              sequence={[
                "Nel",
                1000,
                "Web developer",
                1000,
                "Mobile developer",
                1000,
                "Data Scientist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-lg lg:text-xl px-4 lg:px-0 mb-6">
            Passionate about building modern, responsive, and user-friendly web
            and mobile applications.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
              Hire me
            </button>

            <button className="px-6 py-3 rounded-full border border-[#ADB7BE] text-[#ADB7BE] font-semibold hover:bg-[#ADB7BE] hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ADB7BE]">
              Download CV
            </button>
          </div>
        </div>

        {/* Image à droite */}
        <div className="col-span-5 flex justify-center items-center">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] overflow-hidden flex justify-center items-center shadow-2xl">
            <Image
              src="/nelpro.png"
              alt="Portrait de Nel, développeur web & mobile"
              width={200}
              height={200}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premier;
