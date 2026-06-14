"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const images = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  alt: `Vaga Dreams Gallery ${i + 1}`,
  span: i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : "",
}));

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-bg">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Visual Journey</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-forest">Gallery</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[180px]">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => setSelectedId(img.id)}
              className={`relative bg-forest/10 rounded-lg overflow-hidden cursor-pointer group ${img.span}`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-forest/20 text-xs tracking-widest uppercase">
                Image {img.id}
              </div>
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs tracking-wider">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedId(null)}
          >
            <div className="relative max-w-4xl w-full aspect-video bg-forest/20 rounded-lg flex items-center justify-center">
              <p className="text-white/40 tracking-widest uppercase text-sm">
                Gallery Image {selectedId}
              </p>
            </div>
            <button
              className="absolute top-6 right-6 text-white text-3xl hover:text-gold transition-colors"
              onClick={() => setSelectedId(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
