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
        <section id="location" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-4">Our Location</h2>
          <div className="container mx-auto px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.1234567890123!2d-15.9280865!3d23.702494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc224987da8d0d63%3A0x11628ee4e3e567f2!2sAKFAS%20rent%20a%20car!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Index;
