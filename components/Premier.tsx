"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


    

const Premier = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-[#0F0F0F]">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full max-w-7xl gap-8">

        {/* Texte à gauche */}
        <div className="col-span-7 text-center lg:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold py-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello,
               I'm {" "} </span>
               
               <TypeAnimation
                 sequence={[
      
                     'Nel',
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                     'Web developper ',
                      1000,
                    'Mobile developper',
                      1000,
                    'UI/UX designer',
                     1000
                 ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
               />
  
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl px-4 lg:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, voluptatibus.
          </p>
          <div>
          <button className=" mr-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transition duration-300 shadow-lg">
                Hire me
           </button>

           <button className="px-6 py-3 rounded-full border border-[#ADB7BE] text-[#ADB7BE] font-semibold hover:bg-[#ADB7BE] hover:text-black transition duration-300">
             Download CV
              </button>
        </div>
        </div>
    

        {/* Image à droite */}
        <div className="col-span-5 flex justify-center items-center">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] overflow-hidden flex justify-center items-center">
            <Image
              src="/nel.webp"
              alt="Image de Nel"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Premier;
