import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Experience />
        <Testimonials />
        <Location />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
