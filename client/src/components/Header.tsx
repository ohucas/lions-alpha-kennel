import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.dogs"), href: "#dogs" },
    { name: t("nav.available"), href: "#kennel" },
    { name: t("nav.blog"), href: "#blog" },
    { name: t("nav.contact"), href: "#contact" },
    { name: t("nav.partners"), href: "#partners" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={APP_LOGO} alt="Lions Alpha Kennel" className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                  Lions Alpha
                </span>
                <span className="text-xs text-muted-foreground tracking-wider">KENNEL</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
            >
              <Languages className="h-4 w-4" />
              {i18n.language === "pt" ? "EN" : "PT"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
      </nav>
    </header>
  );
}
