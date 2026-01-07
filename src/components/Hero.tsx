import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Award, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, useCountUp } from '@/lib/animations';
import heroImage from '@/assets/hero-classroom.jpg';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Users, value: 5000, suffix: '+', label: t('about.stats.students') },
    { icon: BookOpen, value: 20, suffix: '+', label: t('about.stats.courses') },
    { icon: Award, value: 10, suffix: '+', label: t('about.stats.years') },
    { icon: Award, value: 95, suffix: '%', label: t('about.stats.placement') },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Computer training classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative section-container pt-28 md:pt-36 pb-16">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 mb-8 shadow-soft"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Award className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-foreground">{t('hero.badge')}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground mb-10"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="gold-gradient text-primary-foreground font-semibold px-8 py-6 text-lg btn-glow w-full sm:w-auto"
              >
                {t('hero.cta.enquire')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                asChild
                className="px-8 py-6 text-lg border-2 border-foreground/20 bg-card/50 backdrop-blur-sm hover:bg-secondary hover:text-secondary-foreground w-full sm:w-auto"
              >
                <a href="tel:9823749002">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('hero.cta.call')}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

// Separate stat card component with count animation
const StatCard: React.FC<{
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  index: number;
}> = ({ icon: Icon, value, suffix, label, index }) => {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 50px -12px rgba(0,0,0,0.18)',
      }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-2xl p-4 md:p-6 border border-border/50"
    >
      <motion.div
        className="w-10 h-10 md:w-12 md:h-12 rounded-xl gold-gradient flex items-center justify-center mb-3 md:mb-4 shadow-gold"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.2,
        }}
      >
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
      </motion.div>
      <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

export default Hero;
