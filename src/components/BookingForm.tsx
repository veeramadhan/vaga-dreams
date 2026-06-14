"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const roomOptions = [
  { value: "misty-deluxe", label: "Misty Deluxe Room — ₹3,499/night" },
  { value: "valley-suite", label: "Valley View Suite — ₹5,999/night" },
  { value: "hillside-villa", label: "Premium Hillside Villa — ₹8,999/night" },
];

export default function BookingForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(false);

  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      room: formData.get("room"),
      checkin: formData.get("checkin"),
      checkout: formData.get("checkout"),
      guests: formData.get("guests"),
    };

    try {
      // Create Razorpay order
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const order = await res.json();

      // Open Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Vaga Dreams",
        description: `Booking - ${data.room}`,
        order_id: order.id,
        handler: async function (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) {
          // Verify payment
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const result = await verifyRes.json();
          if (result.success) {
            alert("Booking confirmed! Check your email for details.");
          }
        },
        prefill: {
          name: data.name,
          email: data.email,
          contact: data.phone,
        },
        theme: { color: "#2D5016" },
      };

      const razorpay = new (window as unknown as { Razorpay: new (opts: typeof options) => { open: () => void } }).Razorpay(options);
      razorpay.open();
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream">
      {/* Razorpay script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />

      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Reserve Now</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-forest">Book Your Stay</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleBooking}
          className="bg-white rounded-lg p-8 md:p-12 shadow-sm space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs tracking-[0.15em] uppercase text-charcoal/50 block mb-2">
                Full Name
              </label>
              <input
                name="name"
                required
                className="w-full border border-charcoal/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs tracking-[0.15em] uppercase text-charcoal/50 block mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-charcoal/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs tracking-[0.15em] uppercase text-charcoal/50 block mb-2">
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                required
                className="w-full border border-charcoal/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="text-xs tracking-[0.15em] uppercase text-charcoal/50 block mb-2">
                Room Type
              </label>
              <select
                name="room"
                required
                className="w-full border border-charcoal/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors bg-white"
              >
                <option value="">Select a room</option>
                {roomOptions.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="text-xs tracking-[0.15em] uppercase text-charcoal/50 block mb-2">
                Check-in
              </label>
              <input
                name="checkin"
                type="date"
                required
                className="w-full border border-charcoal/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors"
              />
            </div>
            <div>
              <label className="text-xs tracking-[0.15em] uppercase text-charcoal/50 block mb-2">
                Check-out
              </label>
              <input
                name="checkout"
                type="date"
                required
                className="w-full border border-charcoal/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors"
              />
            </div>
            <div>
              <label className="text-xs tracking-[0.15em] uppercase text-charcoal/50 block mb-2">
                Guests
              </label>
              <input
                name="guests"
                type="number"
                min={1}
                max={6}
                defaultValue={2}
                required
                className="w-full border border-charcoal/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-gold to-gold-light text-[#0a0a0a] py-4 text-sm tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-opacity duration-300 rounded disabled:opacity-50"
          >
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>

          <p className="text-center text-xs text-charcoal/30">
            Secure payment powered by Razorpay. Your data is encrypted and safe.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
