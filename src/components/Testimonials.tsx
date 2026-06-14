"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Ananya Sharma",
    location: "Bangalore",
    text: "Absolutely magical! The misty mornings and the warm hospitality made our anniversary unforgettable. The room views were breathtaking.",
    rating: 5,
  },
  {
    name: "Rahul Menon",
    location: "Kochi",
    text: "Best hillside stay in Vagamon. The staff went above and beyond, and the campfire evening was a highlight. Will definitely return!",
    rating: 5,
  },
  {
    name: "Priya & Vikram",
    location: "Chennai",
    text: "A hidden gem in Vagamon. Clean, cozy rooms with stunning valley views. The guided nature walk was an incredible experience.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Guest Stories</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-forest">What Our Guests Say</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-white p-8 rounded-lg relative"
            >
              <span className="text-6xl text-forest/10 font-playfair absolute top-4 left-6">&ldquo;</span>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-gold">★</span>
                ))}
              </div>
              <p className="text-charcoal/60 leading-relaxed text-sm mb-6 relative z-10">
                {t.text}
              </p>
              <div className="border-t border-charcoal/5 pt-4">
                <p className="font-playfair text-forest font-semibold">{t.name}</p>
                <p className="text-xs text-charcoal/40">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
