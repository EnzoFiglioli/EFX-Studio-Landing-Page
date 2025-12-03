"use client";

import { Hero } from './components/Hero';
// import About from './components/About'
// import Process from './components/Process'
import CTA from "./components/CTA";
import Footer from './components/Footer'
import Services from './components/Services'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Header />
      <Hero />
      <Services />
      {/* <Process /> */}
      {/* <About /> */}
      <CTA />
      <Footer />
    </div>
  );
}
