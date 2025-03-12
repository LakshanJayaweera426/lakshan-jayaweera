import { useEffect, useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import Lakshan_Jayaweera from "../assets/Lakshan_Jayaweera.png";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
      });

      tl.from(".hero-title", {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 1.5,
        stagger: 0.15,
      })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 1.5,
          },
          "-=0.4"
        )
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 30,
            duration: 1.5,
          },
          "-=0.4"
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            scale: 0.9,
            duration: 1.5,
          },
          "-=0.3"
        )
        .from(
          ".hero-img",
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center lg:gap-6"
      ref={heroRef}
    >
      <div className="mt-8 lg:mt-20 relative">
        {" "}
        <h1
          className="hero-title text-3xl font-bold uppercase sm:text-4xl lg:text-7xl z-10" /*Increased z-index */
          style={{ position: "relative" }}
        >
          {PROFILE.name}
        </h1>
        <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-xl font-medium tracking-tighter text-transparent sm:text-2xl z-10">
          {PROFILE.role}
        </h2>
      </div>
      <p className="hero-text max-w-xl px-2 text-lg tracking-tight sm:text-xl lg:text-2xl">
        {PROFILE.subheading}
      </p>
      <a
        href="/Lakshan_Jayaweera-Intern_Front_End_Developer-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="hero-btn mb-6 flex items-center gap-2 rounded-full border border-pink-200/50 px-4 py-2 text-sm font-medium tracking-tight sm:text-base"
      >
        <span>Download Resume</span>
        <RiArrowRightUpLine />
      </a>
      <img
        src={Lakshan_Jayaweera}
        alt={PROFILE.name}
        width={300}
        height={300}
        className="hero-img rounded-3xl border border-purple-300/20 p-1 sm:w-[400px] sm:h-[400px] relative z-0" //Reduced z-index
      />
    </section>
  );
};

export default Hero;
