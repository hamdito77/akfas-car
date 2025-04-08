
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Globe, Flag, FlagTriangleLeft } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: LanguageOption[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent flex items-center gap-1 h-8 px-2">
            <Globe className="w-4 h-4 mr-1" />
            <span>{languages.find(lang => lang.code === language)?.flag}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-40 p-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-md flex items-center gap-2 hover:bg-accent transition-colors ${
                    language === lang.code ? 'bg-accent' : ''
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default LanguageSwitcher;
