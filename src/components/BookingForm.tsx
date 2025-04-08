
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const BookingForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [carType, setCarType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request sent! We'll contact you shortly.");
  };

  return (
    <section className="py-16 -mt-20 relative z-20 container mx-auto px-4">
      <Card className="shadow-lg border-0">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Book Your Ride</h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
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
            
            <div>
              <Label htmlFor="car-type">Car Type</Label>
              <Select value={carType} onValueChange={setCarType}>
                <SelectTrigger id="car-type" className="w-full">
                  <SelectValue placeholder="Select car" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="4x4">4x4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button type="submit" className="md:col-span-2 lg:col-span-5 mt-2">
              Search Available Cars
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default BookingForm;
