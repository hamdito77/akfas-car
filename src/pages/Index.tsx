import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import FeaturedCars from "@/components/FeaturedCars";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add any initialization code here
    console.log('Index component mounted');
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BookingForm />
      <FeaturedCars />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
