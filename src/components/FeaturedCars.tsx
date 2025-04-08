import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturedCars = () => {
  const cars = [
    {
      id: 1,
      name: "Dacia Duster Automatique",
      image: "https://i.postimg.cc/1zQ2spkx/1.jpg",
      category: "SUV",
      features: ["4x4", "5 Seats", "Petrol", "Automatic"]
    },
    {
      id: 2,
      name: "Renault Clio",
      image: "https://i.postimg.cc/j2LkZv7f/6.jpg",
      category: "Economy",
      features: ["5 Seats", "Petrol", "Air Conditioning", "Manual"]
    },
    {
      id: 3,
      name: "Dacia Stepway Automatique",
      image: "https://i.postimg.cc/LX504RVf/stepway.jpg",
      category: "SUV",
      features: ["5 Seats", "Gasoil", "Air Conditioning", "Automatique"]
    },
    {
      id: 4,
      name: "Dacia Duster Automatique",
      image: "https://i.postimg.cc/4d40hX4B/2.jpg",
      category: "SUV",
      features: ["5 Seats", "Gasoil", "Air Conditioning", "2/4"]
    },
    {
      id: 5,
      name: "Dacia Logan",
      image: "https://i.postimg.cc/fbwrFYt8/logan.jpg",
      category: "Economy",
      features: ["5 Seats", "Petrol", "Air Conditioning", "Manual"]
    },
    {
      id: 6,
      name: "Skoda Fabia",
      image: "https://i.postimg.cc/4NpZRbyG/skoda.jpg",
      category: "Economy",
      features: ["5 Seats", "Petrol", "Air Conditioning", "Manual"]
    }
  ];

  return (
    <section id="cars" className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Featured Vehicles</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose from our selection of premium vehicles perfect for exploring the beautiful landscapes of Dakhla.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <Card key={car.id} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <Badge variant="outline" className="mt-1 bg-secondary/10 text-secondary-foreground">
                    {car.category}
                  </Badge>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11.4 6L7.6 9.8L4.6 6.8C4.4 6.6 4.4 6.2 4.6 6C4.8 5.8 5.2 5.8 5.4 6L7.6 8.2L10.6 5.2C10.8 5 11.2 5 11.4 5.2C11.6 5.4 11.6 5.8 11.4 6Z" fill="currentColor" className="text-primary"/>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Reserve Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          View All Vehicles
        </Button>
      </div>
    </section>
  );
};

export default FeaturedCars;
