import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Dakhla = () => {
  const attractions = [
    {
      title: "Dragon Point",
      description: "A stunning peninsula that extends into the Atlantic Ocean, offering breathtaking views and perfect conditions for kitesurfing.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3"
    },
    {
      title: "White Dune",
      description: "An impressive white sand dune that rises from the edge of a blue lagoon, creating a surreal and beautiful landscape.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
    },
    {
      title: "Imlili Desert",
      description: "A unique natural phenomenon where small pools of salty water exist in the middle of the desert, home to tiny fish.",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] bg-gradient-to-br from-primary/90 to-primary flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
          <div className="container mx-auto px-4 py-16 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg">
              Discover the Magic of Dakhla
            </h1>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto text-shadow">
              A pearl in the Atlantic, where desert meets ocean in perfect harmony
            </p>
          </div>
        </section>

        {/* About Dakhla */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Dakhla</h2>
              <p className="mb-4 text-muted-foreground">
                Dakhla is a city located on a narrow peninsula of the Atlantic coast in southern Morocco. It is known for its stunning landscapes where the desert meets the sea, creating breathtaking natural scenery.
              </p>
              <p className="mb-4 text-muted-foreground">
                This hidden gem is becoming increasingly popular among tourists seeking both relaxation and adventure. With its year-round sunshine, beautiful beaches, and optimal wind conditions, Dakhla is a paradise for kitesurfing and water sports enthusiasts.
              </p>
              <p className="mb-6 text-muted-foreground">
                Beyond its natural beauty, Dakhla offers a unique cultural experience, blending Moroccan traditions with the laid-back atmosphere of a coastal town. Visitors can explore local markets, savor fresh seafood, and immerse themselves in the friendly local culture.
              </p>
              <Button>Explore with Our Cars</Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3" 
                  alt="Dakhla Peninsula" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Visit Dakhla */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Visit Dakhla?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M14 6L9.78 11.63L11.03 13.3L14 9.33L19 16H10.54L6.53 10.63L1 18H23L14 6ZM5 16L6.52 13.97L8.04 16H5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Natural Beauty</h3>
                  <p className="text-muted-foreground">
                    Experience the mesmerizing landscape where the desert meets the ocean, creating breathtaking views and unique natural phenomena.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M21 17C21 17.5523 20.5523 18 20 18H15V21.5858C15 22.4767 13.9229 22.9229 13.2929 22.2929L9.70711 18.7071C9.25329 18.2533 9.25329 17.5067 9.70711 17.0529L13.2929 13.4671C13.9229 12.8371 15 13.2833 15 14.1742V17H20C20.5523 17 21 17.4477 21 18Z" fill="currentColor"/>
                      <path d="M7 15C7 14.4477 7.44772 14 8 14H13V10.4142C13 9.52331 14.0771 9.07714 14.7071 9.70711L18.2929 13.2929C18.7467 13.7467 18.7467 14.4933 18.2929 14.9471L14.7071 18.5329C14.0771 19.1629 13 18.7167 13 17.8258V15H8C7.44772 15 7 14.5523 7 14Z" fill="currentColor"/>
                      <path d="M3 7C3 6.44772 3.44772 6 4 6H9V2.41421C9 1.52331 10.0771 1.07714 10.7071 1.70711L14.2929 5.29289C14.7467 5.74671 14.7467 6.49329 14.2929 6.94711L10.7071 10.5329C10.0771 11.1629 9 10.7167 9 9.82579V7H4C3.44772 7 3 6.55228 3 6Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Adventure Sports</h3>
                  <p className="text-muted-foreground">
                    Dakhla is a world-class destination for kitesurfing, windsurfing, and other water sports thanks to its consistent winds and perfect conditions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.78 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cultural Experience</h3>
                  <p className="text-muted-foreground">
                    Immerse yourself in a unique blend of Moroccan and Sahrawi culture, sample local cuisine, and interact with the friendly locals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Top Attractions in Dakhla</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title} 
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
                  <p className="text-muted-foreground">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Get Around */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Explore Dakhla with AKFAS CAR</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              The best way to discover all that Dakhla has to offer is with your own vehicle. AKFAS CAR provides reliable, comfortable transportation to make your journey memorable.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Book Your Car Now
            </Button>
          </div>
        </section>

        {/* New Section: Dakhla City Tourism */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Dakhla City Tourism</h2>
          <p className="mb-4 text-muted-foreground text-center">
            Dakhla is a vibrant city that offers a unique blend of natural beauty and cultural richness. From its stunning beaches to its lively markets, Dakhla is a destination that promises unforgettable experiences for every traveler.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="aspect-w-16 aspect-h-9">
              <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" alt="Dakhla Beach" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" alt="Dakhla Market" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" alt="Dakhla Culture" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Dakhla;
