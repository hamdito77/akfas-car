import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookingForm from "../components/BookingForm";
import FeaturedCars from "../components/FeaturedCars";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Add any initialization code here
    console.log('Index component mounted');
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        <Hero />
        <section id="booking">
          <BookingForm />
        </section>
        <section id="cars">
          <FeaturedCars />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Index;
