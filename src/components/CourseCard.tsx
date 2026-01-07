import React from 'react';
import { Clock, ChevronRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  description: string;
  duration: number;
  features: string[];
  icon: React.ReactNode;
  featured?: boolean;
  onClick?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  features,
  icon,
  featured = false,
  onClick,
}) => {
  const { t } = useLanguage();

  return (
    <div
      className={`relative bg-card rounded-2xl p-6 shadow-card card-hover border ${
        featured ? 'border-primary/30 ring-2 ring-primary/10' : 'border-border/50'
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-gold">
          Most Popular
        </div>
      )}

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5 shadow-gold">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

      {/* Duration */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Clock className="w-4 h-4 text-primary" />
        <span>
          {t('courses.duration')}: {duration} {t('courses.hours')}
        </span>
      </div>

      {/* Features */}
      <div className="space-y-2 mb-6">
        {features.slice(0, 4).map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button
        onClick={onClick}
        variant="outline"
        className="w-full group border-primary/30 hover:bg-primary hover:text-primary-foreground"
      >
        {t('courses.viewDetails')}
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default CourseCard;
