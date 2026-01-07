import React from 'react';
import { Award, CheckCircle, Shield, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, text: 'Government Recognized Certification' },
    { icon: GraduationCap, text: 'Expert Faculty Members' },
    { icon: CheckCircle, text: 'Industry-Aligned Curriculum' },
    { icon: Award, text: 'Career Development Support' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{t('about.mkcl')}</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-primary font-medium mb-6">
              {t('about.subtitle')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-card rounded-3xl p-8 shadow-elevated border border-border/50">
              {/* MKCL Logo Placeholder */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-32 h-32 rounded-2xl gold-gradient flex items-center justify-center shadow-gold">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-foreground">MKCL</div>
                    <div className="text-xs text-primary-foreground/80 mt-1">Authorized</div>
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-1">Maharashtra Knowledge Corporation Limited</h4>
                  <p className="text-sm text-muted-foreground">
                    A Government of Maharashtra Initiative for Digital Literacy
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-1">KLiC - Knowledge Literacy in Computing</h4>
                  <p className="text-sm text-muted-foreground">
                    Industry-aligned certification programs for career success
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
