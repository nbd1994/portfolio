import React from 'react'
import Header from './components/Header';
import LinksLogo from './components/LinksLogo';
import RecentWork from './components/RecentWork';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './Contact';
import { ParallaxProvider } from 'react-scroll-parallax';


import { useState, useEffect } from "react";

const App = () => {
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  const { x, y } = mousePosition;
  const radius = '400px';
  return (
    <main>
      <div
        className="w-full h-max"
        style={{
          background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255, 0.08), rgba(51, 51, 51, 0.8) ${radius})`,
          transition: "background 0.1s ease",
        }}
      >
        <div className="main-container ml-5 md:ml-[100px] lg:ml-[200px]">
          <Header />
          <LinksLogo />
          <ParallaxProvider>
            <RecentWork />
          </ParallaxProvider>
          <Experience />
          <Education />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App
