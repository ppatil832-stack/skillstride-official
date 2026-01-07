import React from 'react';
import { Award, Target, Wallet, HeartHandshake, Lightbulb, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

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

  return (
    <section id="why-us" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('why.title')}
          </h2>
          <p className="text-lg text-muted-foreground">{t('why.subtitle')}</p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card card-hover border border-border/50 relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5 shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-muted-foreground">{t(reason.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-card border border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl gold-gradient flex items-center justify-center shadow-gold">
                <span className="text-xl font-bold text-primary-foreground">MKCL</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">MKCL Authorized</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl gold-gradient flex items-center justify-center shadow-gold">
                <span className="text-xl font-bold text-primary-foreground">KLiC</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">KLiC Partner</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl gold-gradient flex items-center justify-center shadow-gold">
                <span className="text-xl font-bold text-primary-foreground">ISO</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">Quality Certified</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl gold-gradient flex items-center justify-center shadow-gold">
                <span className="text-xl font-bold text-primary-foreground">GOV</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">Govt. Recognized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
