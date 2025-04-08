
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
    ar: "حول"
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
    en: "Discover Dakhla With Our Premium Car Rental Service",
    fr: "Découvrez Dakhla avec notre service de location de voitures premium",
    es: "Descubra Dakhla con nuestro servicio premium de alquiler de coches",
    ar: "اكتشف الداخلة مع خدمة تأجير السيارات الممتازة"
  },
  "explore_beauty": {
    en: "Explore the beauty of Morocco's hidden gem with the best vehicles for your journey.",
    fr: "Explorez la beauté du joyau caché du Maroc avec les meilleurs véhicules pour votre voyage.",
    es: "Explore la belleza de la joya escondida de Marruecos con los mejores vehículos para su viaje.",
    ar: "استكشف جمال جوهرة المغرب الخفية مع أفضل المركبات لرحلتك."
  },
  "book_car_now": {
    en: "Book a Car Now",
    fr: "Réserver une voiture",
    es: "Reservar un coche ahora",
    ar: "احجز سيارة الآن"
  },
  "explore_fleet": {
    en: "Explore Our Fleet",
    fr: "Explorer notre flotte",
    es: "Explore nuestra flota",
    ar: "استكشف أسطولنا"
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let translation = translations;
    
    // Handle nested keys
    for (let i = 0; i < keys.length - 1; i++) {
      if (translation[keys[i]]) {
        translation = translation[keys[i]] as unknown as Translations;
      } else {
        return key; // Return key if translation not found
      }
    }
    
    const lastKey = keys[keys.length - 1];
    if (translation[lastKey] && translation[lastKey][language]) {
      return translation[lastKey][language];
    }
    
    return key; // Return key if translation not found
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
