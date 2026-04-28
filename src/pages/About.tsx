import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import aboutBanner from '@/assets/about-banner.png';
import { Award, Globe, Shield, Truck, Eye, Target } from 'lucide-react';

const SITE = 'https://www.rewakoglobal.com';

const AboutPage = () => {
  const { language, t } = useLanguage();

  const meta = {
    title: language === 'id' 
      ? 'Tentang Kami - PT Nusantara Global Export' 
      : 'About Us - PT Nusantara Global Export',
    description: t('aboutHeroSubtitle'),
  };

  const features = [
    { icon: Award, title: t('certified'), description: t('certifiedDesc') },
    { icon: Globe, title: t('global'), description: t('globalDesc') },
    { icon: Shield, title: t('quality'), description: t('qualityDesc') },
    { icon: Truck, title: t('logistics'), description: t('logisticsDesc') },
  ];

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`${SITE}/${language}/about`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`${SITE}/og-image.png`} />
      </Helmet>

      <div id="main-content" className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={aboutBanner}
              alt="About PT Nusantara Global Export"
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
                {t('aboutHeroTitle')}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                {t('aboutHeroSubtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('aboutUs')}
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-justify md:text-center">
                <p>{t('aboutP1')}</p>
                <p>{t('aboutP2')}</p>
              </div>
            </motion.div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/30 border border-border p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-premium transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{t('visionTitle')}</h3>
                <p className="text-muted-foreground">{t('visionDesc')}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/30 border border-border p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-premium transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{t('missionTitle')}</h3>
                <ul className="text-muted-foreground text-left space-y-3 list-disc list-inside">
                  <li>{t('missionDesc1')}</li>
                  <li>{t('missionDesc2')}</li>
                  <li>{t('missionDesc3')}</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us (Features Grid) */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {t('whyChoose')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background border border-border hover:border-accent p-8 rounded-2xl text-center group transition-all duration-300 shadow-card hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-white">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
