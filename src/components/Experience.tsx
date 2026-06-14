"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Vagamon Pine Forest",
    description: "Walk through the serene pine forests, a signature Vagamon experience with cool mountain air and dappled sunlight.",
  },
  {
    title: "Kurisumala Ashram Trek",
    description: "A spiritual trek up the Cross Mountain with stunning panoramic views of the valley below.",
  },
  {
    title: "Tea Estate Tour",
    description: "Explore the lush green tea plantations and learn about tea processing from local experts.",
  },
  {
    title: "Paragliding Adventures",
    description: "Soar above the misty hills and experience Vagamon from a breathtaking aerial perspective.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dark luxury bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141210] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,149,108,0.06)_0%,_transparent_60%)]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Curated For You</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white">Experiences</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-lg p-8 group hover:border-gold/20 hover:bg-white/[0.05] transition-all duration-500"
            >
              <span className="text-gold font-playfair text-5xl font-bold opacity-20 absolute top-4 right-6">
                0{i + 1}
              </span>
              <h3 className="font-playfair text-2xl text-white mb-3">{exp.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{exp.description}</p>
              <div className="mt-6">
                <span className="text-gold text-xs tracking-[0.2em] uppercase group-hover:tracking-[0.35em] transition-all duration-300">
                  Learn More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
