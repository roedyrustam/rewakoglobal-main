import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { Stats } from '@/components/Stats';
import { CatalogDownload } from '@/components/CatalogDownload';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';

const Index = () => {
  const { language } = useLanguage();

  const meta = language === 'id'
    ? {
        title: 'PT Nusantara Global Export - Eksportir Komoditas Premium Indonesia',
        description: 'Eksportir terkemuka komoditas premium Indonesia: kopi spesialti, rempah, produk kelapa, hasil laut. Bersertifikat REWAKO Bank Indonesia. Standar kualitas internasional.',
      }
    : {
        title: 'PT Nusantara Global Export - Indonesian Premium Commodities Exporter',
        description: 'Leading Indonesian exporter of premium commodities: specialty coffee, spices, coconut products, seafood. Bank Indonesia REWAKO certified. International quality standards.',
      };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PT Nusantara Global Export",
    "url": "https://www.rewakoglobal.com",
    "logo": "https://www.rewakoglobal.com/logo.png",
    "description": meta.description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-812-4100-3047",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Indonesian"]
    },
    "areaServed": "Worldwide",
    "foundingDate": "2009"
  };

  return (
    <>
      <SEO 
        title={meta.title}
        description={meta.description}
        url="/"
        structuredData={structuredData}
        image="/og-image.png"
      />

      <div id="main-content" className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Products />
        <CatalogDownload />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
