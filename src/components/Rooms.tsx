"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const rooms = [
  {
    id: 1,
    name: "Misty Deluxe Room",
    description:
      "Cozy room with panoramic views of the Western Ghats, perfect for couples seeking a romantic getaway.",
    price: 3499,
    features: ["Mountain View", "King Bed", "Free Wi-Fi", "Hot Water"],
    size: "320 sq ft",
  },
  {
    id: 2,
    name: "Valley View Suite",
    description:
      "Spacious suite with private balcony overlooking the lush tea estates and misty valleys.",
    price: 5999,
    features: ["Private Balcony", "Living Area", "Mini Bar", "Room Service"],
    size: "520 sq ft",
  },
  {
    id: 3,
    name: "Premium Hillside Villa",
    description:
      "Exclusive villa with garden access, fireplace, and curated luxury amenities for a memorable stay.",
    price: 8999,
    features: ["Garden Access", "Fireplace", "Jacuzzi", "Butler Service"],
    size: "780 sq ft",
  },
];

export default function Rooms() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="rooms" className="py-24 lg:py-32 bg-bg">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Accommodations
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-forest">
            Rooms & Suites
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              onMouseEnter={() => setHoveredId(room.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] bg-forest/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-forest/20 text-sm tracking-widest uppercase">
                  Room Image
                </div>
                <motion.div
                  className="absolute inset-0 bg-forest/5"
                  animate={{ scale: hoveredId === room.id ? 1.1 : 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-playfair text-xl text-forest">
                    {room.name}
                  </h3>
                  <p className="text-xs text-charcoal/40">{room.size}</p>
                </div>
                <p className="text-sm text-charcoal/60 leading-relaxed mb-4">
                  {room.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((f) => (
                    <span
                      key={f}
                      className="text-[11px] tracking-wider uppercase bg-cream px-3 py-1 rounded-full text-forest/70"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-charcoal/5">
                  <div>
                    <span className="font-playfair text-2xl text-forest font-bold">
                      ₹{room.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-charcoal/40 ml-1">
                      / night
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-gold to-gold-light text-[#0a0a0a] px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-medium hover:opacity-90 transition-opacity"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
