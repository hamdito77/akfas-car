import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { MessageSquare, Send } from "lucide-react";

const BookingForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [carType, setCarType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  
  // Define both contact numbers
  const contactNumbers = ["+212661211237", "+212661298842"];
  // Use the first one as default
  const primaryWhatsappNumber = contactNumbers[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!pickupLocation || !dropoffLocation || !pickupDate || !returnDate || !carType || !name || !phone) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Prepare WhatsApp message
    const message = `
Hello AKFAS CAR,

I would like to make a reservation with the following details:
- Name: ${name}
- Phone: ${phone}
- Pickup Location: ${pickupLocation}
- Dropoff Location: ${dropoffLocation}
- Pickup Date: ${pickupDate}
- Return Date: ${returnDate}
- Car Type: ${carType}

Thank you!
    `.trim();
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${primaryWhatsappNumber}?text=${encodedMessage}`, '_blank');
    
    toast.success("Redirecting to WhatsApp to complete your booking!");
  };

  return (
    <section id="booking" className="py-16 -mt-20 relative z-20 container mx-auto px-4">
      <Card className="shadow-lg border-0">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Book Your Ride</h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="car-type">Car Type</Label>
              <Select value={carType} onValueChange={setCarType}>
                <SelectTrigger id="car-type" className="w-full">
                  <SelectValue placeholder="Select car" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dacia-duster-automatique">Dacia Duster Automatique</SelectItem>
                  <SelectItem value="renault-clio">Renault Clio</SelectItem>
                  <SelectItem value="dacia-stepway">Dacia Stepway</SelectItem>
                  <SelectItem value="dacia-sandero-automatique">Dacia Sandero Automatique</SelectItem>
                  <SelectItem value="dacia-logan">Dacia Logan</SelectItem>
                  <SelectItem value="skoda-fabia">Skoda Fabia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="pickup">Pickup Location</Label>
              <Select value={pickupLocation} onValueChange={setPickupLocation}>
                <SelectTrigger id="pickup" className="w-full">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dakhla-airport">Dakhla Airport</SelectItem>
                  <SelectItem value="dakhla-city">Dakhla City Center</SelectItem>
                  <SelectItem value="dakhla-beach">Dakhla Beach</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="dropoff">Drop-off Location</Label>
              <Select value={dropoffLocation} onValueChange={setDropoffLocation}>
                <SelectTrigger id="dropoff" className="w-full">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dakhla-airport">Dakhla Airport</SelectItem>
                  <SelectItem value="dakhla-city">Dakhla City Center</SelectItem>
                  <SelectItem value="dakhla-beach">Dakhla Beach</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="pickup-date">Pickup Date</Label>
              <Input
                type="date"
                id="pickup-date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div>
              <Label htmlFor="return-date">Return Date</Label>
              <Input
                type="date"
                id="return-date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                min={pickupDate || new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="md:col-span-2 lg:col-span-3 mt-4">
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
                size="lg"
              >
                <MessageSquare className="w-5 h-5" />
                Book via WhatsApp
              </Button>
              
              <div className="text-center text-sm text-muted-foreground mt-4">
                You can also contact us directly at: 
                {contactNumbers.map((number, idx) => (
                  <a 
                    key={number}
                    href={`tel:${number}`} 
                    className="text-primary hover:underline ml-1"
                  >
                    {number}{idx < contactNumbers.length - 1 ? " or" : ""}
                  </a>
                ))}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default BookingForm;
