"use client";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLinkIcon } from "lucide-react";

const project = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with Next.js and Tailwind CSS.",
    image: "/portfolio.webp",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Manager App",
    description: "A Trello-like task management app using React, Django and PostgreSQL.",
    image: "/taskapp.webp",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Mobile E-commerce",
    description: "A full-featured e-commerce mobile app built with React Native.",
    image: "/ecommerce.webp",
    demoLink: "#",
    githubLink: "#",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-[#181818] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {project.map((project, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[#ADB7BE] mb-4">{project.description}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-indigo-600 transition duration-300"
                  >
                    <ExternalLinkIcon size={18} /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#ADB7BE] text-[#ADB7BE] rounded-full hover:bg-[#ADB7BE] hover:text-black transition duration-300"
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
