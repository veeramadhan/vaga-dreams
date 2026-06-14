import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaga Dreams | Boutique Hill Station Resort in Vagamon, Kerala",
  description:
    "Experience serene luxury at Vaga Dreams by Z Square Hospitality. Nestled in the misty hills of Vagamon, Kerala — boutique rooms, scenic views, and curated experiences await.",
  keywords: [
    "Vagamon resort",
    "Kerala hill station",
    "boutique hotel Vagamon",
    "Vaga Dreams",
    "Z Square Hospitality",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-cream text-charcoal">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
