import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import effectSound from "../assets/effect1.mp3"; // ✅ Your sound file

const Loader = ({ onFinish }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef();
  const textRef = useRef();
  const glowRef = useRef();
  const audioRef = useRef();

  // Start animation + sound after user click
  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Audio play failed:", err);
      });
    }

    setHasStarted(true); // Trigger animation
  };

  useEffect(() => {
    if (!hasStarted) return;

    const tl = gsap.timeline({
      onComplete: onFinish,
    });

    tl.fromTo(
      textRef.current,
      { scale: 0.5, opacity: 0, rotate: -20 },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "power4.out",
      }
    )
      .to(
        glowRef.current,
        {
          opacity: 0.7,
          duration: 0.4,
          repeat: 3,
          yoyo: true,
          ease: "power2.inOut",
        },
        "-=0.8"
      )
      .to(textRef.current, {
        scale: 1.1,
        opacity: 0.9,
        duration: 0.2,
        ease: "sine.inOut",
      })
      .to(textRef.current, {
        scale: 0.95,
        duration: 0.2,
        ease: "sine.inOut",
      })
      .to(textRef.current, {
        y: -80,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(containerRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
      });
  }, [hasStarted, onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center z-[9999] overflow-hidden"
    >
      {/* 🔈 Hidden audio */}
      <audio ref={audioRef} src={effectSound} preload="auto" />

      {/* 🌌 Glowing background */}
      <div
        ref={glowRef}
        className="absolute w-[300vw] h-[300vw] bg-gradient-radial from-[#00ffff22] via-[#00ffff44] to-transparent rounded-full blur-3xl animate-spin-slow"
      ></div>

      {/* ✨ Animated text */}
      <h1
        ref={textRef}
        className="text-white text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-widest z-10 drop-shadow-[0_0_20px_#00FFFF]"
      >
        ⚡ Cooking Up Magic...
      </h1>

      {/* 🟢 Start Button Overlay */}
      {!hasStarted && (
        <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[10000]">
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-700 text-white text-xl rounded-lg shadow-lg transition-all duration-300"
          >
            🚀 Start Cooking
          </button>
        </div>
      )}
    </div>
  );
};

export default Loader;
