import React, { createContext, useContext, useState, ReactNode } from 'react';

// Available languages
export type Language = 'en' | 'fr' | 'es' | 'ar';

// Translation interface
export interface Translations {
  [key: string]: {
    en: string;
    fr: string;
    es: string;
    ar: string;
  };
}

// Context props
interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create context
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Translations data
const translations: Translations = {
  "home": {
    en: "Home",
    fr: "Accueil",
    es: "Inicio",
    ar: "الرئيسية"
  },
  "cars": {
    en: "Cars",
    fr: "Voitures",
    es: "Coches",
    ar: "سيارات"
  },
  "dakhla": {
    en: "Dakhla",
    fr: "Dakhla",
    es: "Dakhla",
    ar: "الداخلة"
  },
  "about": {
    en: "About",
    fr: "À propos",
    es: "Acerca de",
    ar: "من نحن"
  },
  "contact": {
    en: "Contact",
    fr: "Contact",
    es: "Contacto",
    ar: "اتصل بنا"
  },
  "book_now": {
    en: "Book Now",
    fr: "Réserver",
    es: "Reservar",
    ar: "احجز الآن"
  },
  "discover_dakhla": {
    en: "Discover Dakhla",
    fr: "Découvrez Dakhla",
    es: "Descubre Dakhla",
    ar: "اكتشف الداخلة"
  },
  "explore_beauty": {
    en: "Explore the beauty of Dakhla with our premium car rental service",
    fr: "Explorez la beauté de Dakhla avec notre service de location de voitures premium",
    es: "Explora la belleza de Dakhla con nuestro servicio premium de alquiler de coches",
    ar: "اكتشف جمال الداخلة مع خدمة تأجير السيارات الفاخرة لدينا"
  },
  "book_car_now": {
    en: "Book a Car Now",
    fr: "Réserver une voiture",
    es: "Reservar un coche",
    ar: "احجز سيارة الآن"
  },
  "explore_fleet": {
    en: "Explore Our Fleet",
    fr: "Découvrez notre flotte",
    es: "Explora nuestra flota",
    ar: "اكتشف أسطولنا"
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
