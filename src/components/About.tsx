import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Award, Globe, Shield, Truck } from 'lucide-react';

export const About = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('certified'),
      description: t('certifiedDesc'),
    },
    {
      icon: Globe,
      title: t('global'),
      description: t('globalDesc'),
    },
    {
      icon: Shield,
      title: t('quality'),
      description: t('qualityDesc'),
    },
    {
      icon: Truck,
      title: t('logistics'),
      description: t('logisticsDesc'),
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About Company Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="REWAKO Ekspor Sulawesi Selatan" 
              className="h-32 w-auto"
            />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {language === 'en' ? 'About Us' : 'Tentang Kami'}
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              {language === 'en' 
                ? 'PT Nusantara Global Export is a proud member of REWAKO Ekspor Sulawesi Selatan (Bank Indonesia Export Community for South Sulawesi). We are committed to promoting Indonesian commodities to international markets with the highest quality standards.'
                : 'PT Nusantara Global Export adalah anggota bangga dari REWAKO Ekspor Sulawesi Selatan (Kelompok Kerja Ekspor Bank Indonesia untuk Sulawesi Selatan). Kami berkomitmen mempromosikan komoditas Indonesia ke pasar internasional dengan standar kualitas tertinggi.'}
            </p>
            <p>
              {language === 'en'
                ? 'As a REWAKO-certified exporter, we adhere to strict quality control, documentation standards, and international trade compliance. Our membership ensures credibility and trustworthiness in every transaction, backed by Bank Indonesia\'s rigorous certification process.'
                : 'Sebagai eksportir bersertifikat REWAKO, kami mematuhi kontrol kualitas ketat, standar dokumentasi, dan kepatuhan perdagangan internasional. Keanggotaan kami menjamin kredibilitas dan kepercayaan dalam setiap transaksi, didukung oleh proses sertifikasi Bank Indonesia yang ketat.'}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('whyChoose')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-card">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
