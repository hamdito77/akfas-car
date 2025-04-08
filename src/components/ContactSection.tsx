
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Phone } from "lucide-react";

const ContactSection = () => {
  // Define both contact numbers
  const contactNumbers = ["+212661211237", "+212661298842"];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
  };

  return (
    <section id="contact" className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have questions about our services? Get in touch with our team for assistance with bookings or inquiries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input placeholder="Your Name" required />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" required />
              </div>
            </div>
            <div>
              <Input placeholder="Subject" required />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="min-h-32" required />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-6">
            <Card>
              <CardContent className="flex items-start gap-4 p-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-sm text-muted-foreground mt-1">123 Main Street, Dakhla, Morocco</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-start gap-4 p-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm text-muted-foreground mt-1">info@akfascar.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-start gap-4 p-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <div className="text-sm text-muted-foreground mt-1">
                    {contactNumbers.map((number, idx) => (
                      <div key={number}>
                        <a href={`tel:${number}`} className="text-primary hover:underline">
                          {number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-start gap-4 p-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="text-sm text-muted-foreground mt-1">Monday - Saturday: 8AM - 8PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
