"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Find Us</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-forest">Location</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.0!2d76.9!3d9.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDAnNDguMCJOIDc2wrA1NCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vaga Dreams Location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-playfair text-2xl text-forest mb-6">
              Getting Here
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">Address</p>
                <p className="text-charcoal/70">
                  Pullikkanam–Elappara Road, Vagamon,<br />
                  Kerala 685503, India
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">Nearest Airport</p>
                <p className="text-charcoal/70">Cochin International Airport — 110 km (3.5 hrs)</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">Nearest Railway</p>
                <p className="text-charcoal/70">Kottayam Railway Station — 64 km (2 hrs)</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">Contact</p>
                <p className="text-charcoal/70">
                  Phone: +91 XXXXX XXXXX<br />
                  Email: hello@vagadreams.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
