import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
  // Define both contact numbers
  const contactNumbers = ["+212661211237", "+212661298842"];
  const email = "Akfasrentacar@gmail.com";
  
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
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Phone Numbers</p>
                  {contactNumbers.map((number, index) => (
                    <a 
                      key={index}
                      href={`tel:${number}`}
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {number}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href={`mailto:${email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
