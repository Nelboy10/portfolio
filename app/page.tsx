"use client";

import Premier from './components/Premier';
import Navbar from './components/Navbar';
import Project from './components/project';
import Contact from './components/contact';
import Competence from './components/competence';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-[#121212]">
      {/* Ton component ici */}
      <Navbar></Navbar>
      <div className="container mt-24 mx-auto ">
      <Premier />
      </div>
      <div className="container mt-24 mx-auto "> 
        <Competence></Competence>
      </div>
      <div className="container mt-24 mx-auto "> 
        <Project></Project>
      </div>
      <div className="container mt-24 mx-auto "> 
        <Contact></Contact>
      </div>
      <div className="container mt-24 mx-auto "> 
        <Footer/>
      </div>
      
    </main>
  );
}
