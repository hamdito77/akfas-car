
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-primary/90 to-primary flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg">
            Discover Dakhla With Our Premium Car Rental Service
          </h1>
          <p className="text-white/90 text-xl mb-8 max-w-xl text-shadow">
            Explore the beauty of Morocco's hidden gem with the best vehicles for your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Book a Car Now
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              Explore Our Fleet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
