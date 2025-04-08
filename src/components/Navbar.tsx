import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: t("home"), path: "/", action: () => {} },
    { name: t("cars"), path: "/", action: () => scrollToSection('cars') },
    { name: t("dakhla"), path: "/dakhla", action: () => {} },
    { name: t("about"), path: "/", action: () => scrollToSection('about') },
    { name: t("contact"), path: "/", action: () => scrollToSection('contact') }
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (location.pathname === link.path) {
      link.action();
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="https://i.postimg.cc/dVqGF35H/f760973e-a8df-45fa-88df-4bbbec69fbd0.jpg" 
            alt="AKFAS CAR Logo" 
            className="h-12 w-auto"
          />
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-lg font-medium hover:text-primary transition-colors py-2"
                      onClick={() => handleNavClick(link)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button className="w-full mt-4" onClick={() => scrollToSection('booking')}>
                    {t("book_now")}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium hover:text-primary transition-colors"
                onClick={() => handleNavClick(link)}
              >
                {link.name}
              </Link>
            ))}
            <Button onClick={() => scrollToSection('booking')}>
              {t("book_now")}
            </Button>
            <LanguageSwitcher />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
