import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.courses', href: '#courses' },
    { key: 'nav.whyUs', href: '#why-us' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-card shadow-soft'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg gold-gradient flex items-center justify-center shadow-gold"
              whileHover={{ rotate: 5 }}
            >
              <span className="text-primary-foreground font-bold text-lg md:text-xl">SC</span>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg md:text-xl text-foreground">Saurabh Computers</h1>
              <p className="text-xs text-muted-foreground">MKCL Authorized</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-muted"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {t(item.key)}
              </motion.button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
                className="hidden sm:flex items-center gap-1.5 text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'मराठी' : 'English'}</span>
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-9 h-9"
              >
                <AnimatePresence mode="wait">
                  {theme === 'light' ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-9 h-9"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.nav
                className="flex flex-col gap-1 glass-card rounded-xl p-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    onClick={() => scrollToSection(item.href)}
                    className="px-4 py-3 text-left text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {t(item.key)}
                  </motion.button>
                ))}
                <div className="border-t border-border mt-2 pt-2">
                  <motion.button
                    onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors w-full"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                  >
                    <Globe className="w-4 h-4" />
                    <span>{language === 'en' ? 'मराठी' : 'English'}</span>
                  </motion.button>
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
