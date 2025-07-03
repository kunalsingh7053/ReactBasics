import React, { useEffect, useRef } from 'react';
import ScrambledText from '../../scramble/ScrambledText/ScrambledText';
import gsap from 'gsap';

const About = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const contentRef = useRef();
  const listItemRefs = useRef([]);
  const signatureRef = useRef();
  const glow1Ref = useRef();
  const glow2Ref = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // 🔄 Animate glow background layers
    gsap.to(glow1Ref.current, {
      scale: 1.1,
      rotate: 360,
      duration: 50,
      repeat: -1,
      ease: 'linear',
    });

    gsap.to(glow2Ref.current, {
      scale: 1.2,
      rotate: -360,
      duration: 60,
      repeat: -1,
      ease: 'linear',
    });

    // 👇 Content Animations
    tl.from(headingRef.current, { opacity: 0, y: 60, duration: 1 })
      .from(contentRef.current, { opacity: 0, y: 60, duration: 1 }, '-=0.5')
      .from(listItemRefs.current, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.2,
      }, '-=0.6')
      .from(signatureRef.current, { opacity: 0, y: 30, duration: 0.6 }, '-=0.5');
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative px-4 py-10 flex justify-center items-center w-full bg-[#0F172B] min-h-screen overflow-hidden"
    >
      {/* 🌌 Layered Animated Backgrounds */}
      <div
        ref={glow1Ref}
        className="absolute w-[200vw] h-[200vw] bg-gradient-radial from-[#00ffff11] via-[#00ffff33] to-transparent rounded-full blur-3xl"
        style={{ top: '-80vw', left: '-100vw', zIndex: 0 }}
      ></div>

      <div
        ref={glow2Ref}
        className="absolute w-[150vw] h-[150vw] bg-gradient-radial from-[#00ffff22] via-[#00ffff44] to-transparent rounded-full blur-[180px]"
        style={{ top: '-60vw', right: '-80vw', zIndex: 0 }}
      ></div>

      {/* 🔤 Main Content */}
      <div className="bg-[#0F172B] px-4 max-w-4xl w-full rounded relative z-10">
        <h1
          ref={headingRef}
          className="font-thin text-center text-3xl sm:text-4xl mb-6 text-cyan-400 drop-shadow-md"
        >
          About This Website
        </h1>

        <ScrambledText>
          <p
            ref={contentRef}
            className="font-bold text-justify text-xl sm:text-2xl text-white"
          >
            Hello! <span className="text-blue-500">I'm Kunal Singh Patel</span>, a passionate web developer and food lover. This recipe website is a personal project I built using HTML, Tailwind CSS, React, and JavaScript.
            <br /><br />
            My goal is simple — to bring together a collection of delicious recipes that are easy to follow, beautifully presented, and accessible to everyone. Whether you're looking to try something new or cook your favorite comfort food, this site is designed to help you cook with confidence.
            <br /><br />
            🧑‍🍳 <strong>What Makes This Site Special:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-white">
              {[
                'Clean, fast, and responsive UI built with React and Tailwind',
                'Recipes with step-by-step instructions',
                'Modern design with smooth user experience',
                'Created with love for both coding and cooking',
              ].map((item, i) => (
                <li
                  key={i}
                  ref={(el) => (listItemRefs.current[i] = el)}
                  className="text-lg sm:text-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
            <br />
            Thank you for visiting ! I hope you find a recipe you ’ ll love and enjoy the experience as much as I enjoyed building it.
          </p>

          <small
            ref={signatureRef}
            className="block mt-6 text-red-400 font-bold text-xl sm:text-2xl text-right"
          >
            – Kunal Singh Patel
          </small>
        </ScrambledText>
      </div>
    </div>
  );
};

export default About;
