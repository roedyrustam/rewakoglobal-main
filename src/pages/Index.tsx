import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { Stats } from '@/components/Stats';
import { CatalogDownload } from '@/components/CatalogDownload';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { useLanguage } from '@/contexts/LanguageContext';

const SITE = 'https://www.rewakoglobal.com';

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
    "url": SITE,
    "logo": `${SITE}/logo.png`,
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
      <Helmet>
        <html lang={language} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content="Indonesian export, coffee beans, coconut products, spices export, candlenut, turmeric, palm oil, cloves, nutmeg, tuna, cocoa, rubber, cinnamon, vanilla, REWAKO certified, Indonesian commodities" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:locale" content={language === 'id' ? 'id_ID' : 'en_US'} />
        <meta property="og:locale:alternate" content={language === 'id' ? 'en_US' : 'id_ID'} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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
