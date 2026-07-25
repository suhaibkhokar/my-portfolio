"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Project";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import SplashScreen from "./components/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if user has seen splash screen before
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Save to localStorage so splash doesn't show again
    localStorage.setItem("hasSeenSplash", "true");
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <main style={{ 
        opacity: showSplash ? 0 : 1,
        transition: 'opacity 0.5s ease'
      }}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}