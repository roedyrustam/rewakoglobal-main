import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-image.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Indonesian premium commodities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-accent/30">
                ⭐ Bank Indonesia REWAKO Certified
              </span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground group text-lg h-14 px-8"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('viewProducts')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg h-14 px-8"
                onClick={() => {
                  const modal = document.getElementById('quote-modal-trigger');
                  if (modal) modal.click();
                }}
              >
                {t('contactUs')}
              </Button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/20"
            >
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <div className="font-semibold text-white">REWAKO</div>
                  <div className="text-sm">Certified</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl">🌏</span>
                </div>
                <div>
                  <div className="font-semibold text-white">ITPC</div>
                  <div className="text-sm">Supported</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-white">ISO 22000</div>
                  <div className="text-sm">Certified</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
