
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToBooking = () => {
    // Scroll to booking form
    const bookingForm = document.querySelector('form');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // WhatsApp contact information
  const whatsappNumber = "+212661211237";
  const whatsappMessage = encodeURIComponent("Hello AKFAS CAR, I'm interested in renting a car in Dakhla.");

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-primary/90 to-primary flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
      
      {/* WhatsApp floating button */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg">
            {t('discover_dakhla')}
          </h1>
          <p className="text-white/90 text-xl mb-8 max-w-xl text-shadow">
            {t('explore_beauty')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={scrollToBooking}>
              {t('book_car_now')}
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              {t('explore_fleet')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
