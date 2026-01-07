import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { fadeInUp } from '@/lib/animations';

interface CourseCardProps {
  title: string;
  description: string;
  duration: number;
  features: string[];
  icon: React.ReactNode;
  featured?: boolean;
  onClick?: () => void;
  index?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  features,
  icon,
  featured = false,
  onClick,
  index = 0,
}) => {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        y: -12,
        boxShadow: '0 25px 60px -15px rgba(0,0,0,0.2)',
      }}
      transition={{ duration: 0.3 }}
      className={`relative glass-card rounded-2xl p-6 border ${
        featured ? 'border-primary/30 ring-2 ring-primary/10' : 'border-border/50'
      } cursor-pointer group`}
      onClick={onClick}
    >
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-gold"
        >
          Most Popular
        </motion.div>
      )}

      {/* Icon */}
      <motion.div
        className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5 shadow-gold"
        whileHover={{ rotate: 5, scale: 1.05 }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.2,
          },
        }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

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
        {features.slice(0, 4).map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          variant="outline"
          className="w-full group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          {t('courses.viewDetails')}
          <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default CourseCard;
