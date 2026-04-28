import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { z } from 'zod';
import { useState } from 'react';
import contactBanner from '@/assets/contact-banner.png';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { SEO } from '@/components/SEO';

const WHATSAPP_NUMBER = '6281241003047';

const contactFormSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  subject: z.string().trim().min(1, 'Subject is required').max(100),
  message: z.string().trim().min(1, 'Message is required').max(1000),
});

const ContactPage = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const meta = {
    title: language === 'id'
      ? 'Hubungi Kami - PT Nusantara Global Export'
      : 'Contact Us - PT Nusantara Global Export',
    description: t('contactHeroSubtitle'),
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactFormSchema.parse(formData);

      const waMessage = `*New Contact Inquiry*\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

      window.open(whatsappUrl, '_blank');
      toast.success('Redirecting to WhatsApp...');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        url="/contact"
        image="/og-contact.png"
      />

      <div id="main-content" className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={contactBanner}
              alt="Contact PT Nusantara Global Export"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/75" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {t('contactHeroTitle')}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                {t('contactHeroSubtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  {t('contactInfo')}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{t('officeAddress')}</h4>
                      <p className="text-muted-foreground">{t('officeDesc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{t('emailUs')}</h4>
                      <a href="mailto:support@bijidata.online" className="text-muted-foreground hover:text-accent transition-colors">
                        support@bijidata.online
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{t('callUs')}</h4>
                      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                        +{WHATSAPP_NUMBER}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map / Visual Placeholder */}
                <div className="relative rounded-2xl overflow-hidden border border-border h-64 bg-secondary/30 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm font-medium">
                      Makassar, South Sulawesi, Indonesia
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/20 border border-border p-8 rounded-3xl shadow-card"
              >
                <h3 className="font-heading text-2xl font-bold mb-6">{t('contactFormTitle')}</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder={t('yourName')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder={t('yourEmail')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      maxLength={255}
                    />
                  </div>

                  <div>
                    <Input
                      placeholder={t('subject')}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder={t('message')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      maxLength={1000}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12">
                    <Send className="w-5 h-5 mr-2" />
                    {t('sendMessage')}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
