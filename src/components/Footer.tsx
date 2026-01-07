import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, useScrollAnimation } from '@/lib/animations';

const Footer: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { ref, controls } = useScrollAnimation();

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
      <motion.div
        ref={ref}
        className="section-container py-12 md:py-16"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shadow-gold"
                whileHover={{ rotate: 5 }}
              >
                <span className="text-primary-foreground font-bold text-lg">SC</span>
              </motion.div>
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
                  className="bg-secondary-foreground/10 border-secondary-foreground/20 hover:bg-secondary-foreground/20"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'मराठी' : 'EN'}
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold text-lg mb-4">{t('footer.courses')}</h4>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <motion.li
                  key={course}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    onClick={() => scrollToSection('#courses')}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {course}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold text-lg mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <motion.li
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm text-secondary-foreground/80">
                  B.O.T Complex, First Floor, Waki Road, Jamner
                </span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:9823749002"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  98237 49002
                </a>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@saurabhcomputers.com"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  info@saurabhcomputers.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} Saurabh Computers. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-6 h-6 rounded gold-gradient flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(245, 158, 11, 0.3)',
                    '0 0 20px rgba(245, 158, 11, 0.5)',
                    '0 0 10px rgba(245, 158, 11, 0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-[8px] font-bold text-primary-foreground">MKCL</span>
              </motion.div>
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
