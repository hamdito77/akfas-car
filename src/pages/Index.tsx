
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import FeaturedCars from "@/components/FeaturedCars";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingForm />
      <FeaturedCars />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
