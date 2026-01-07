import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Shield, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, useScrollAnimation } from '@/lib/animations';
import studentSuccess from '@/assets/student-success.jpg';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  const features = [
    { icon: Shield, text: 'Government Recognized Certification' },
    { icon: GraduationCap, text: 'Expert Faculty Members' },
    { icon: CheckCircle, text: 'Industry-Aligned Curriculum' },
    { icon: Award, text: 'Career Development Support' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="section-container">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {/* Left - Content */}
          <motion.div variants={fadeInLeft}>
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{t('about.mkcl')}</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              {t('about.title')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-primary font-medium mb-6"
            >
              {t('about.subtitle')}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              {t('about.description')}
            </motion.p>

            {/* Features List */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'hsl(var(--muted))',
                  }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 transition-colors cursor-default"
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div variants={fadeInRight} className="relative">
            <motion.div
              className="relative z-10 bg-card rounded-3xl overflow-hidden shadow-elevated border border-border/50"
              whileHover={{
                y: -8,
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.2)',
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={studentSuccess}
                  alt="Successful student with certificate"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Info Cards */}
              <div className="p-6 space-y-4">
                <motion.div
                  className="glass-card rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold text-foreground mb-1">Maharashtra Knowledge Corporation Limited</h4>
                  <p className="text-sm text-muted-foreground">
                    A Government of Maharashtra Initiative for Digital Literacy
                  </p>
                </motion.div>
                <motion.div
                  className="glass-card rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold text-foreground mb-1">KLiC - Knowledge Literacy in Computing</h4>
                  <p className="text-sm text-muted-foreground">
                    Industry-aligned certification programs for career success
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/15 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
