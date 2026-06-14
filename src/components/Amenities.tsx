"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const amenities = [
  { icon: "🍽️", title: "Restaurant", desc: "Regional & continental cuisine with fresh local ingredients" },
  { icon: "🔥", title: "Campfire Area", desc: "Evening bonfires under the stars with music and snacks" },
  { icon: "🥾", title: "Nature Walks", desc: "Guided treks through tea estates and pine forests" },
  { icon: "🚐", title: "Transport", desc: "On-request transport to Vagamon Pine Forest & Kurisumala" },
  { icon: "🌿", title: "Landscaped Gardens", desc: "Beautifully maintained gardens for peaceful strolls" },
  { icon: "☕", title: "Tea Lounge", desc: "Freshly brewed local tea with panoramic mountain views" },
  { icon: "📶", title: "Free Wi-Fi", desc: "Stay connected with complimentary high-speed internet" },
  { icon: "🧹", title: "Housekeeping", desc: "Daily housekeeping with eco-conscious cleaning practices" },
];

export default function Amenities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="py-24 lg:py-32 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">What We Offer</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-forest">Amenities & Services</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 rounded-lg text-center group hover:shadow-lg transition-shadow duration-500"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.icon}
              </span>
              <h3 className="font-playfair text-lg text-forest mb-2">{item.title}</h3>
              <p className="text-sm text-charcoal/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
