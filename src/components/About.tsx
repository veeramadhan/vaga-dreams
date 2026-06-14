"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/5] bg-forest/10 rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center text-forest/30">
            <p className="text-sm tracking-widest uppercase">Cloudinary Image Placeholder</p>
          </div>
          {/* Replace with CldImage from next-cloudinary */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cream to-transparent" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Our Story</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-forest leading-tight mb-6">
            A Retreat into <br />Nature&apos;s Embrace
          </h2>
          <div className="w-16 h-0.5 bg-gold mb-8" />
          <p className="text-charcoal/70 leading-relaxed mb-6">
            Vaga Dreams by Z Square Hospitality is a boutique stay property
            located along Pullikkanam–Elappara Road in Vagamon, Kerala. It
            offers guests a serene hill-station retreat featuring modern
            amenities paired with personalized service.
          </p>
          <p className="text-charcoal/70 leading-relaxed mb-8">
            Our setting amid misty meadows and tea-clad slopes makes it an
            ideal destination for leisure travelers seeking tranquility and
            scenic charm. The design blends contemporary architecture with
            local materials, reflecting Vagamon&apos;s rustic character.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-charcoal/10">
            {[
              { num: "12+", label: "Luxury Rooms" },
              { num: "500+", label: "Happy Guests" },
              { num: "4.8", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-playfair text-3xl text-forest font-bold">{stat.num}</p>
                <p className="text-xs tracking-wider text-charcoal/50 uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
