import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    message: '',
  });

  const courses = [
    'MS-CIT (AI Powered)',
    'KLiC Tally Prime with GST',
    'KLiC Advanced Excel',
    'KLiC Python Programming',
    'KLiC Java Programming',
    'Other KLiC Courses',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Enquiry Submitted!',
      description: 'We will contact you shortly.',
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', course: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">{t('contact.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-6">Send us an Enquiry</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mb-4 shadow-gold">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Thank You!</h4>
                <p className="text-muted-foreground">
                  Your enquiry has been submitted. We'll contact you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.phone')} *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.course')} *
                  </label>
                  <Select
                    value={formData.course}
                    onValueChange={(value) => setFormData({ ...formData, course: value })}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any specific questions or requirements?"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gold-gradient text-primary-foreground font-semibold h-12 btn-glow"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      {t('contact.form.submit')}
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-card rounded-xl p-5 shadow-card border border-border/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0 shadow-gold">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('contact.address')}</h4>
                  <p className="text-sm text-muted-foreground">
                    B.O.T Complex, First Floor,
                    <br />
                    Waki Road, Jamner
                    <br />
                    Dist. Jalgaon, Maharashtra
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-xl p-5 shadow-card border border-border/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0 shadow-gold">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('contact.phone')}</h4>
                  <a
                    href="tel:9823749002"
                    className="text-lg font-medium text-primary hover:underline"
                  >
                    98237 49002
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-xl p-5 shadow-card border border-border/50 flex items-start gap-4 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0 shadow-gold">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('contact.hours')}</h4>
                  <p className="text-sm text-muted-foreground">{t('contact.hoursValue')}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 h-64 lg:h-auto lg:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.7!2d75.78!3d20.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQ4JzAwLjAiTiA3NcKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '250px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Saurabh Computers Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
