"use client";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLinkIcon } from "lucide-react";

const project = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with Next.js and Tailwind CSS.",
    image: "/portfolio.PNG",
    demoLink: "https://nelgbaguidi.vercel.app/",
    githubLink: "https://github.com/Nelboy10/portfolio.git",
  },
  {
    title: "travel website",
    description: "Time Tracking Software Used By Millions. ",
    image: "/travel.PNG",
    demoLink: "https://travel-ashy-pi.vercel.app/",
    githubLink: "https://github.com/Nelboy10/travel.git",
  },
  {
    title: " ABDIAS",
    description: "Abdias est une application mobile visant a aider les agriculteurs",
    image: "/mobile.PNG",
    demoLink: "#",
    githubLink: "https://github.com/Nelboy10/bdias.git",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-16"> My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {project.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]/60 border border-[#333] backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 hover:shadow-[0_12px_40px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-52 object-cover rounded-2xl"
                />
                {project.demoLink === "#" && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 text-sm rounded-full font-semibold shadow">
                    Coming Soon
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
                      project.demoLink === "#"
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-br from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg"
                    }`}
                  >
                    <ExternalLinkIcon size={18} /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border border-gray-500 text-gray-300 hover:bg-gray-300 hover:text-black transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
