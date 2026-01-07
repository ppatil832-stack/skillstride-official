import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.courses': 'Courses',
    'nav.whyUs': 'Why Choose Us',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Build Your Career with MKCL & KLiC Certified Courses',
    'hero.subtitle': 'Government-recognized | Job-oriented | Skill-based',
    'hero.cta.enquire': 'Enquire Now',
    'hero.cta.call': 'Call Now',
    'hero.badge': 'MKCL Authorized Center',
    
    // About
    'about.title': 'About Saurabh Computers',
    'about.subtitle': 'Your Trusted Partner in Digital Education',
    'about.description': 'Saurabh Computers is an MKCL (Maharashtra Knowledge Corporation Limited) authorized training center dedicated to empowering students and professionals with industry-relevant computer skills. Located in the heart of Jamner, we provide world-class training with a focus on practical learning and career development.',
    'about.mkcl': 'Authorized by MKCL - A Government of Maharashtra Initiative',
    'about.stats.students': 'Students Trained',
    'about.stats.courses': 'Courses Available',
    'about.stats.years': 'Years of Excellence',
    'about.stats.placement': 'Placement Rate',
    
    // Courses
    'courses.title': 'Our Courses',
    'courses.subtitle': 'Industry-Aligned Programs for Your Success',
    'courses.viewDetails': 'View Details',
    'courses.duration': 'Duration',
    'courses.hours': 'hours',
    'courses.features': 'Key Features',
    'courses.otherCourses': 'Other KLiC Career Tracks',
    
    // Course Names
    'course.mscit': 'MS-CIT (AI Powered)',
    'course.tally': 'KLiC Tally Prime with GST',
    'course.excel': 'KLiC Advanced Excel',
    'course.python': 'KLiC Python Programming',
    'course.java': 'KLiC Java Programming',
    
    // Why Choose Us
    'why.title': 'Why Choose Saurabh Computers?',
    'why.subtitle': 'Your Success is Our Priority',
    'why.authorized': 'MKCL Authorized',
    'why.authorized.desc': 'Official government-recognized certification center',
    'why.career': 'Career-Oriented',
    'why.career.desc': 'Industry-aligned curriculum with practical skills',
    'why.affordable': 'Affordable Fees',
    'why.affordable.desc': 'Quality education at competitive prices',
    'why.support': 'Local Support',
    'why.support.desc': 'Personal attention with national certification',
    'why.practical': 'Hands-on Learning',
    'why.practical.desc': 'Practical projects and real-world applications',
    'why.placement': 'Placement Support',
    'why.placement.desc': 'Interview preparation and job assistance',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'re Here to Help You Succeed',
    'contact.form.name': 'Your Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.course': 'Select Course',
    'contact.form.message': 'Message (Optional)',
    'contact.form.submit': 'Submit Enquiry',
    'contact.address': 'Visit Us',
    'contact.phone': 'Call Us',
    'contact.hours': 'Working Hours',
    'contact.hoursValue': 'Mon - Sat: 9:00 AM - 8:00 PM',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.mkcl': 'An MKCL Authorized Training Center',
    'footer.quickLinks': 'Quick Links',
    'footer.courses': 'Courses',
    'footer.contact': 'Contact Info',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.enrollNow': 'Enroll Now',
  },
  mr: {
    // Navigation
    'nav.home': 'मुख्यपृष्ठ',
    'nav.about': 'आमच्याबद्दल',
    'nav.courses': 'अभ्यासक्रम',
    'nav.whyUs': 'आम्हाला का निवडावे',
    'nav.contact': 'संपर्क',
    
    // Hero
    'hero.title': 'MKCL आणि KLiC प्रमाणित अभ्यासक्रमांसह तुमचे करिअर घडवा',
    'hero.subtitle': 'सरकार मान्यताप्राप्त | नोकरी-केंद्रित | कौशल्य-आधारित',
    'hero.cta.enquire': 'चौकशी करा',
    'hero.cta.call': 'आत्ता कॉल करा',
    'hero.badge': 'MKCL अधिकृत केंद्र',
    
    // About
    'about.title': 'सौरभ कॉम्प्युटर्स बद्दल',
    'about.subtitle': 'डिजिटल शिक्षणातील तुमचा विश्वसनीय भागीदार',
    'about.description': 'सौरभ कॉम्प्युटर्स हे MKCL (महाराष्ट्र नॉलेज कॉर्पोरेशन लिमिटेड) अधिकृत प्रशिक्षण केंद्र आहे जे विद्यार्थी आणि व्यावसायिकांना उद्योग-संबंधित संगणक कौशल्यांसह सक्षम करण्यासाठी समर्पित आहे. जामनेरच्या मध्यभागी स्थित, आम्ही व्यावहारिक शिक्षण आणि करिअर विकासावर लक्ष केंद्रित करून जागतिक दर्जाचे प्रशिक्षण देतो.',
    'about.mkcl': 'MKCL द्वारे अधिकृत - महाराष्ट्र शासनाचा उपक्रम',
    'about.stats.students': 'प्रशिक्षित विद्यार्थी',
    'about.stats.courses': 'उपलब्ध अभ्यासक्रम',
    'about.stats.years': 'वर्षांची उत्कृष्टता',
    'about.stats.placement': 'प्लेसमेंट दर',
    
    // Courses
    'courses.title': 'आमचे अभ्यासक्रम',
    'courses.subtitle': 'तुमच्या यशासाठी उद्योग-संरेखित कार्यक्रम',
    'courses.viewDetails': 'तपशील पहा',
    'courses.duration': 'कालावधी',
    'courses.hours': 'तास',
    'courses.features': 'मुख्य वैशिष्ट्ये',
    'courses.otherCourses': 'इतर KLiC करिअर ट्रॅक',
    
    // Course Names
    'course.mscit': 'MS-CIT (AI सक्षम)',
    'course.tally': 'KLiC टॅली प्राइम GST सह',
    'course.excel': 'KLiC प्रगत एक्सेल',
    'course.python': 'KLiC पायथन प्रोग्रामिंग',
    'course.java': 'KLiC जावा प्रोग्रामिंग',
    
    // Why Choose Us
    'why.title': 'सौरभ कॉम्प्युटर्स का निवडावे?',
    'why.subtitle': 'तुमचे यश ही आमची प्राथमिकता',
    'why.authorized': 'MKCL अधिकृत',
    'why.authorized.desc': 'अधिकृत सरकार मान्यताप्राप्त प्रमाणन केंद्र',
    'why.career': 'करिअर-केंद्रित',
    'why.career.desc': 'व्यावहारिक कौशल्यांसह उद्योग-संरेखित अभ्यासक्रम',
    'why.affordable': 'परवडणारे शुल्क',
    'why.affordable.desc': 'स्पर्धात्मक किमतीत दर्जेदार शिक्षण',
    'why.support': 'स्थानिक समर्थन',
    'why.support.desc': 'राष्ट्रीय प्रमाणनासह वैयक्तिक लक्ष',
    'why.practical': 'प्रत्यक्ष शिक्षण',
    'why.practical.desc': 'व्यावहारिक प्रकल्प आणि वास्तविक जग अनुप्रयोग',
    'why.placement': 'प्लेसमेंट समर्थन',
    'why.placement.desc': 'मुलाखत तयारी आणि नोकरी सहाय्य',
    
    // Contact
    'contact.title': 'संपर्क साधा',
    'contact.subtitle': 'तुमच्या यशासाठी आम्ही येथे आहोत',
    'contact.form.name': 'तुमचे नाव',
    'contact.form.phone': 'फोन नंबर',
    'contact.form.course': 'अभ्यासक्रम निवडा',
    'contact.form.message': 'संदेश (पर्यायी)',
    'contact.form.submit': 'चौकशी सबमिट करा',
    'contact.address': 'आम्हाला भेट द्या',
    'contact.phone': 'आम्हाला कॉल करा',
    'contact.hours': 'कामाचे तास',
    'contact.hoursValue': 'सोम - शनि: सकाळी ९:०० - रात्री ८:००',
    
    // Footer
    'footer.rights': 'सर्व हक्क राखीव.',
    'footer.mkcl': 'MKCL अधिकृत प्रशिक्षण केंद्र',
    'footer.quickLinks': 'द्रुत दुवे',
    'footer.courses': 'अभ्यासक्रम',
    'footer.contact': 'संपर्क माहिती',
    
    // Common
    'common.learnMore': 'अधिक जाणून घ्या',
    'common.enrollNow': 'आता नोंदणी करा',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
