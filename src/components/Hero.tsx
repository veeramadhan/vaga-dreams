"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current.children,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: "power4.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - dark luxury gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1510] to-[#0d0d0d]" />

      {/* Subtle golden radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,149,108,0.08)_0%,_transparent_70%)]" />

      {/* Animated grain/mist overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative thin gold lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold/30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent to-gold/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gold/90 tracking-[0.5em] uppercase text-xs md:text-sm mb-8 font-light"
        >
          Welcome to
        </motion.p>

        <h1
          ref={headingRef}
          className="font-playfair text-5xl md:text-7xl lg:text-[7rem] font-light leading-[0.9] overflow-hidden tracking-tight"
        >
          <span className="block bg-gradient-to-r from-white via-cream to-gold/80 bg-clip-text text-transparent">Vaga</span>
          <span className="block bg-gradient-to-r from-gold/80 via-cream to-white bg-clip-text text-transparent">Dreams</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed font-light tracking-wide"
        >
          A serene hill-station retreat nestled in the misty meadows of abcd city,
          Kerala — where luxury meets nature.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#rooms"
            className="bg-gradient-to-r from-gold to-gold-light text-[#0a0a0a] px-12 py-4 text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition-opacity duration-300"
          >
            Book Your Stay
          </a>
          <a
            href="#about"
            className="border border-gold/30 text-gold/80 px-12 py-4 text-xs tracking-[0.25em] uppercase hover:bg-gold/5 transition-colors duration-300"
          >
            Explore
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border border-gold/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
