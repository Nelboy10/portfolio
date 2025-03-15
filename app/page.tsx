import Image from 'next/image';
import Premier from '@/components/Premier'; // Nom de component en majuscule
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-[#121212]">
      {/* Ton component ici */}
      <Navbar></Navbar>
      <div className="">
      <Premier />
      </div>

      
      
    </main>
  );
}
