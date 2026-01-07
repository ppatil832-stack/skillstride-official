import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Calculator, BarChart3, Code, Laptop, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeInUp, staggerContainer, useScrollAnimation, scaleIn } from '@/lib/animations';
import CourseCard from './CourseCard';
import { Button } from '@/components/ui/button';
import computerLab from '@/assets/computer-lab.jpg';

interface CourseDetails {
  id: string;
  titleKey: string;
  description: string;
  duration: number;
  features: string[];
  fullDescription: string;
  curriculum: string[];
  icon: React.ReactNode;
  featured?: boolean;
}

const Courses: React.FC = () => {
  const { t } = useLanguage();
  const { ref, controls } = useScrollAnimation();
  const [selectedCourse, setSelectedCourse] = useState<CourseDetails | null>(null);

  const courses: CourseDetails[] = [
    {
      id: 'mscit',
      titleKey: 'course.mscit',
      description: 'Comprehensive computer literacy with AI skills for the modern workplace',
      duration: 120,
      features: [
        'Computer & Smartphone Basics',
        'Windows 10 & MS Office 2019',
        '100+ AI Skills & 200+ Digital Skills',
        'Google Workspace & Internet',
      ],
      fullDescription:
        'MS-CIT (Maharashtra State Certificate in Information Technology) is the flagship program by MKCL, designed to make you digitally literate and AI-ready for modern careers.',
      curriculum: [
        'Computer & Smartphone Basics',
        'Windows 10 Operating System',
        'MS Office 2019 (Word, Excel, PowerPoint)',
        'Internet & Chrome Browser',
        'Google Workspace (Docs, Sheets, Slides)',
        'Introduction to Coding',
        '100+ AI Skills',
        '200+ Digital Skills',
        'Social Media Marketing',
        'MKCL Learner App Access',
      ],
      icon: <Monitor className="w-7 h-7 text-primary-foreground" />,
      featured: true,
    },
    {
      id: 'tally',
      titleKey: 'course.tally',
      description: 'Master accounting with Tally Prime and GST compliance',
      duration: 90,
      features: [
        'Tally Prime Interface',
        'GST Configuration & Reports',
        'Inventory Management',
        'Business Accounting',
      ],
      fullDescription:
        'KLiC Tally Prime with GST is a comprehensive accounting course that prepares you for real-world financial management roles.',
      curriculum: [
        'Tally Prime Interface & Navigation',
        'Creating Company & Masters',
        'GST Configuration & Setup',
        'Invoicing & GST Reports',
        'Inventory Management',
        'Purchase & Sales Orders',
        'Cash & Bank Management',
        'Book Keeping Records',
        'Business Reports & Analysis',
        'Practical Projects',
      ],
      icon: <Calculator className="w-7 h-7 text-primary-foreground" />,
    },
    {
      id: 'excel',
      titleKey: 'course.excel',
      description: 'Advanced Excel skills for data analysis and automation',
      duration: 60,
      features: [
        'Advanced Formulas & Functions',
        'Pivot Tables & Charts',
        'VBA & Macros',
        'Data Analysis & Modeling',
      ],
      fullDescription:
        'KLiC Advanced Excel transforms you into a data-savvy professional with automation and analysis skills.',
      curriculum: [
        'Advanced Formulas & Functions',
        'Pivot Tables & Pivot Charts',
        'VBA Programming',
        'Macro Development',
        'Data Management & Validation',
        'Statistical Modeling',
        'External Data Linking',
        'Dashboard Creation',
        'Reporting Automation',
        'Real-world Projects',
      ],
      icon: <BarChart3 className="w-7 h-7 text-primary-foreground" />,
    },
    {
      id: 'python',
      titleKey: 'course.python',
      description: 'Learn Python programming for data science and web development',
      duration: 90,
      features: [
        'Python Fundamentals',
        'MySQL Integration',
        'Data Handling',
        'Project Development',
      ],
      fullDescription:
        'KLiC Python Programming equips you with in-demand programming skills for software development and data science careers.',
      curriculum: [
        'Python Programming Basics',
        'Variables & Data Types',
        'Control Structures',
        'Functions & Modules',
        'Object-Oriented Programming',
        'MySQL Database Integration',
        'Data Handling & Processing',
        'File Operations',
        'Error Handling',
        'Capstone Projects',
      ],
      icon: <Code className="w-7 h-7 text-primary-foreground" />,
    },
    {
      id: 'java',
      titleKey: 'course.java',
      description: 'Master Java programming for enterprise applications',
      duration: 90,
      features: [
        'Java Fundamentals',
        'OOP Concepts',
        'Arrays & Methods',
        'Java Servlet Development',
      ],
      fullDescription:
        'KLiC Java Programming prepares you for enterprise software development with comprehensive Java training.',
      curriculum: [
        'Java Programming Basics',
        'Object-Oriented Programming',
        'Classes & Objects',
        'Inheritance & Polymorphism',
        'Arrays & Collections',
        'Methods & Constructors',
        'Exception Handling',
        'Java Servlet Basics',
        'Database Connectivity',
        'Enterprise Projects',
      ],
      icon: <Laptop className="w-7 h-7 text-primary-foreground" />,
    },
  ];

  const otherCourses = [
    'Financial Accounting',
    'Digital Freelancing',
    'Data Science',
    'Digital Creative Arts',
    'Software Development',
    'IT Hardware & Networking',
    'Digital Designing',
    'Front Office Management',
    'Back Office Management',
    'New Collar Jobs',
    'Services Management',
  ];

  return (
    <section id="courses" className="py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="section-container">
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
            {t('courses.title')}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
            {t('courses.subtitle')}
          </motion.p>
        </motion.div>

        {/* Main Courses Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              title={t(course.titleKey)}
              description={course.description}
              duration={course.duration}
              features={course.features}
              icon={course.icon}
              featured={course.featured}
              onClick={() => setSelectedCourse(course)}
              index={index}
            />
          ))}
        </motion.div>

        {/* Other KLiC Courses */}
        <motion.div
          className="glass-card rounded-2xl p-8 border border-border/50 relative overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          {/* Background Image */}
          <div className="absolute inset-0 opacity-5">
            <img
              src={computerLab}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              {t('courses.otherCourses')}
            </h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
              variants={staggerContainer}
              initial="hidden"
              animate={controls}
            >
              {otherCourses.map((course, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'hsl(var(--primary) / 0.15)',
                  }}
                  className="bg-muted/50 backdrop-blur-sm rounded-xl p-4 text-center transition-colors cursor-pointer group"
                >
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {course}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-center text-muted-foreground text-sm mt-6">
              Duration: 30 / 60 / 90 / 120 hours • Beginner to Advanced • Self-paced + Guided Learning
            </p>
          </div>
        </motion.div>
      </div>

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border/50"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 glass-card p-6 border-b border-border flex items-start justify-between z-10">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center shadow-gold"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {selectedCourse.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {t(selectedCourse.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t('courses.duration')}: {selectedCourse.duration} {t('courses.hours')}
                    </p>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedCourse(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-6">{selectedCourse.fullDescription}</p>

                <h4 className="font-semibold text-foreground mb-4">{t('courses.features')}:</h4>
                <motion.div
                  className="grid sm:grid-cols-2 gap-3 mb-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {selectedCourse.curriculum.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-2 bg-muted/50 rounded-lg p-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className="w-full gold-gradient text-primary-foreground font-semibold btn-glow"
                    onClick={() => {
                      setSelectedCourse(null);
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('common.enrollNow')}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Courses;
