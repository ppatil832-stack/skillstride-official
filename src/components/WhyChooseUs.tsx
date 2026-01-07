import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Wallet, HeartHandshake, Lightbulb, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeInUp, staggerContainer, useScrollAnimation } from '@/lib/animations';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  const reasons = [
    {
      icon: Award,
      titleKey: 'why.authorized',
      descKey: 'why.authorized.desc',
    },
    {
      icon: Target,
      titleKey: 'why.career',
      descKey: 'why.career.desc',
    },
    {
      icon: Wallet,
      titleKey: 'why.affordable',
      descKey: 'why.affordable.desc',
    },
    {
      icon: HeartHandshake,
      titleKey: 'why.support',
      descKey: 'why.support.desc',
    },
    {
      icon: Lightbulb,
      titleKey: 'why.practical',
      descKey: 'why.practical.desc',
    },
    {
      icon: Briefcase,
      titleKey: 'why.placement',
      descKey: 'why.placement.desc',
    },
  ];

  const trustBadges = [
    { label: 'MKCL', subLabel: 'MKCL Authorized' },
    { label: 'KLiC', subLabel: 'KLiC Partner' },
    { label: 'ISO', subLabel: 'Quality Certified' },
    { label: 'GOV', subLabel: 'Govt. Recognized' },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            {t('why.title')}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
            {t('why.subtitle')}
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -12,
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.2)',
              }}
              className="group glass-card rounded-2xl p-6 border border-border/50 relative overflow-hidden cursor-default"
            >
              {/* Hover Gradient */}
              <motion.div
                className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500"
              />

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5 shadow-gold"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.15,
                    },
                  }}
                >
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-muted-foreground">{t(reason.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 glass-card rounded-2xl p-8 border border-border/50"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center cursor-default"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-3 rounded-xl gold-gradient flex items-center justify-center shadow-gold"
                  animate={{
                    boxShadow: [
                      '0 8px 25px -5px rgba(245, 158, 11, 0.35)',
                      '0 12px 35px -5px rgba(245, 158, 11, 0.5)',
                      '0 8px 25px -5px rgba(245, 158, 11, 0.35)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                >
                  <span className="text-xl font-bold text-primary-foreground">{badge.label}</span>
                </motion.div>
                <p className="text-sm font-medium text-muted-foreground">{badge.subLabel}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
