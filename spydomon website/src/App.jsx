import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BentoGrid from './components/BentoGrid';
import DropSimulator from './components/DropSimulator';
import Downloads from './components/Downloads';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070B] text-[#F0F4F8] flex flex-col font-sans selection:bg-[#E62429] selection:text-white">
      <Navbar />
      <main className="overflow-x-hidden w-full max-w-full flex-1">
        <Hero />
        <Marquee />
        <BentoGrid />
        <DropSimulator />
        <Downloads />
      </main>
      <Footer />
    </div>
  );
}
