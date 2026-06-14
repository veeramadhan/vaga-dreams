"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex flex-col">
          <span className="font-playfair text-2xl font-bold text-white tracking-wide">
            Vaga Dreams
          </span>
          <span className="text-[10px] tracking-[0.3em] text-gold/70 uppercase">
            by Z Square Hospitality
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-white/70" : "text-white/70"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#rooms"
              className="bg-gold text-[#0a0a0a] px-6 py-2.5 text-sm tracking-wider hover:opacity-90 transition-opacity duration-300"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              mobileOpen
                ? "rotate-45 translate-y-2 bg-charcoal"
                : scrolled
                ? "bg-white"
                : "bg-white"
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              mobileOpen
                ? "opacity-0"
                : scrolled
                ? "bg-white"
                : "bg-white"
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              mobileOpen
                ? "-rotate-45 -translate-y-2 bg-charcoal"
                : scrolled
                ? "bg-white"
                : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] shadow-lg"
          >
            <ul className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/70 text-lg tracking-wide hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#rooms"
                  onClick={() => setMobileOpen(false)}
                  className="bg-gold text-[#0a0a0a] px-8 py-3 tracking-wider hover:opacity-90 transition-opacity"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
