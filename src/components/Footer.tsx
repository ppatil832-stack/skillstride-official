import React from 'react';
import { Phone, MapPin, Mail, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.courses'), href: '#courses' },
    { label: t('nav.whyUs'), href: '#why-us' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const courses = [
    'MS-CIT (AI Powered)',
    'KLiC Tally Prime',
    'KLiC Advanced Excel',
    'KLiC Python',
    'KLiC Java',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shadow-gold">
                <span className="text-primary-foreground font-bold text-lg">SC</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Saurabh Computers</h3>
                <p className="text-xs text-secondary-foreground/70">{t('footer.mkcl')}</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-6">
              Empowering careers through quality computer education since 2014.
            </p>

            {/* Theme & Language Toggles */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="bg-secondary-foreground/10 border-secondary-foreground/20 hover:bg-secondary-foreground/20"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 mr-2" />
                ) : (
                  <Sun className="w-4 h-4 mr-2" />
                )}
                {theme === 'light' ? 'Dark' : 'Light'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
                className="bg-secondary-foreground/10 border-secondary-foreground/20 hover:bg-secondary-foreground/20"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'en' ? 'मराठी' : 'EN'}
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.courses')}</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course}>
                  <button
                    onClick={() => scrollToSection('#courses')}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {course}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm text-secondary-foreground/80">
                  B.O.T Complex, First Floor, Waki Road, Jamner
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:9823749002"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  98237 49002
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@saurabhcomputers.com"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  info@saurabhcomputers.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} Saurabh Computers. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded gold-gradient flex items-center justify-center">
                <span className="text-[8px] font-bold text-primary-foreground">MKCL</span>
              </div>
              <span className="text-sm text-secondary-foreground/70">
                Powered by Maharashtra Knowledge Corporation Ltd.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
