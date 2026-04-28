import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateCatalogPDF } from '@/utils/catalogGenerator';
import { toast } from 'sonner';

export const CatalogDownload = () => {
  const { language, t } = useLanguage();

  const handleDownload = () => {
    try {
      generateCatalogPDF(language);
      toast.success(language === 'en' ? 'Catalog downloaded successfully!' : 'Katalog berhasil diunduh!');
    } catch (error) {
      toast.error(language === 'en' ? 'Failed to generate catalog' : 'Gagal membuat katalog');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
            <FileText className="w-10 h-10 text-accent" />
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {t('downloadCatalog')}
          </h2>
          
          <p className="text-white/80 text-lg mb-8">
            {t('downloadCatalogDesc')}
          </p>
          
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground group h-14 px-8 text-lg"
            onClick={handleDownload}
          >
            <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            {t('downloadPDF')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
