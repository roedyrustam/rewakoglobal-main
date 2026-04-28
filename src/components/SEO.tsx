import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  keywords?: string[];
  structuredData?: Record<string, any>;
}

const DEFAULT_SITE_URL = 'https://www.rewakoglobal.com';

export const SEO = ({
  title,
  description,
  image = '/og-image.png',
  url = '',
  type = 'website',
  keywords = [],
  structuredData,
}: SEOProps) => {
  const { language } = useLanguage();
  const fullUrl = `${DEFAULT_SITE_URL}${url}`;
  const fullImageUrl = image.startsWith('http') 
    ? image 
    : `${DEFAULT_SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`;

  const defaultKeywords = [
    'Indonesian export', 
    'premium commodities', 
    'coffee beans', 
    'coconut products', 
    'spices export', 
    'candlenut', 
    'turmeric', 
    'palm oil', 
    'cloves', 
    'nutmeg', 
    'tuna', 
    'cocoa', 
    'rubber', 
    'cinnamon', 
    'vanilla', 
    'REWAKO certified', 
    'Indonesian commodities'
  ];

  const combinedKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

  return (
    <Helmet>
      {/* Basic HTML Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={combinedKeywords} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:locale" content={language === 'id' ? 'id_ID' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'id' ? 'en_US' : 'id_ID'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Schema.org JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
