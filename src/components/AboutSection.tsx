
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About AKFAS CAR</h2>
            <p className="mb-4 text-muted-foreground">
              At AKFAS CAR, we're dedicated to providing the best car rental experience in Dakhla, Morocco. With our extensive fleet of well-maintained vehicles, we ensure that your journey through this beautiful region is comfortable and hassle-free.
            </p>
            <p className="mb-6 text-muted-foreground">
              Established in 2015, we have been serving tourists and locals alike with reliable transportation solutions. Our team is committed to exceptional service, competitive pricing, and 24/7 customer support.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">500+</span>
                <span className="text-sm text-muted-foreground">Happy Customers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-sm text-muted-foreground">Quality Vehicles</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">24/7</span>
                <span className="text-sm text-muted-foreground">Customer Support</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-muted-foreground">Satisfaction Rate</span>
              </div>
            </div>
            <Button>Learn More About Us</Button>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151" 
                alt="Dakhla Landscape" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 aspect-square w-40 rounded-lg overflow-hidden border-4 border-white shadow-lg hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3" 
                alt="AKFAS CAR Service" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
