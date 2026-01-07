import React, { useState } from 'react';
import { Monitor, Calculator, BarChart3, Code, Laptop, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CourseCard from './CourseCard';
import { Button } from '@/components/ui/button';

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
    <section id="courses" className="py-20 md:py-28 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('courses.title')}
          </h2>
          <p className="text-lg text-muted-foreground">{t('courses.subtitle')}</p>
        </div>

        {/* Main Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={t(course.titleKey)}
              description={course.description}
              duration={course.duration}
              features={course.features}
              icon={course.icon}
              featured={course.featured}
              onClick={() => setSelectedCourse(course)}
            />
          ))}
        </div>

        {/* Other KLiC Courses */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            {t('courses.otherCourses')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {otherCourses.map((course, index) => (
              <div
                key={index}
                className="bg-muted/50 hover:bg-primary/10 rounded-xl p-4 text-center transition-colors cursor-pointer group"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {course}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            Duration: 30 / 60 / 90 / 120 hours • Beginner to Advanced • Self-paced + Guided Learning
          </p>
        </div>
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm">
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-elevated animate-fade-in">
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm p-6 border-b border-border flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center shadow-gold">
                  {selectedCourse.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {t(selectedCourse.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('courses.duration')}: {selectedCourse.duration} {t('courses.hours')}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedCourse(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6">
              <p className="text-muted-foreground mb-6">{selectedCourse.fullDescription}</p>

              <h4 className="font-semibold text-foreground mb-4">{t('courses.features')}:</h4>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {selectedCourse.curriculum.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-muted/50 rounded-lg p-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full gold-gradient text-primary-foreground font-semibold btn-glow"
                onClick={() => {
                  setSelectedCourse(null);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('common.enrollNow')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
