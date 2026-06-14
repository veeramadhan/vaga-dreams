import Link from "next/link";

const footerLinks = {
  explore: [
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Experience", href: "#experience" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cancellation Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-2">Vaga Dreams</h3>
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
              by Z Square Hospitality
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              A boutique hill-station retreat in Vagamon, Kerala —
              where misty meadows meet warm hospitality and sustainable luxury.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Explore</p>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Legal</p>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Vaga Dreams by Z Square Hospitality. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Facebook", "WhatsApp"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/30 text-xs hover:text-gold transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
