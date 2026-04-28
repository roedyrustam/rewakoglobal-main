import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { products } from '@/data/products';
import { getProductImage } from '@/data/productImages';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ArrowLeft, Package, FileText, Award, MapPin, Maximize2, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';

const SITE = 'https://www.rewakoglobal.com';
const WHATSAPP_NUMBER = '6281241003047';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const product = products.find(p => p.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);


  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('productNotFound')}</h1>
          <Button onClick={() => navigate('/')}>{t('goHome')}</Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== id && p.category.en === product.category.en).slice(0, 3);
  const fallbackRelated = relatedProducts.length < 3 
    ? [...relatedProducts, ...products.filter(p => p.id !== id && !relatedProducts.includes(p))].slice(0, 3)
    : relatedProducts;

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(`Hi! I'm interested in ${product.name[language]}. Can you provide more information?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleQuoteRequest = () => {
    openQuoteModal();
  };

  const productUrl = `/product/${product.id}`;
  const metaTitle = language === 'id'
    ? `${product.name.id} | PT Nusantara Global Export`
    : `${product.name.en} | PT Nusantara Global Export`;
  const metaDesc = product.description[language].slice(0, 158);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name[language],
    "description": product.description[language],
    "category": product.category[language],
    "image": `${SITE}${getProductImage(product.id)}`,
    "sku": product.id,
    "brand": { "@type": "Brand", "name": "PT Nusantara Global Export" },
    "countryOfOrigin": product.origin,
    "offers": {
      "@type": "Offer",
      "url": `${SITE}${productUrl}`,
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "seller": { "@type": "Organization", "name": "PT Nusantara Global Export" }
    }
  };

  return (
    <>
      <SEO 
        title={metaTitle}
        description={metaDesc}
        url={productUrl}
        type="product"
        image={getProductImage(product.id)}
        structuredData={structuredData}
      />

      <Navbar />

      <main id="main-content" className="pt-16 min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">
                {t('home')}
              </button>
              <span>/</span>
              <button onClick={() => navigate('/#products')} className="hover:text-primary transition-colors">
                {t('products')}
              </button>
              <span>/</span>
              <span className="text-foreground font-medium">{product.name[language]}</span>
            </div>
          </div>
        </div>

        {/* Product Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="ghost"
                className="mb-6 hover:bg-secondary"
                onClick={() => navigate('/#products')}
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                {t('backToProducts')}
              </Button>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="sticky top-24">
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                    onClick={() => setImageModalOpen(true)}
                  >
                    <img
                      src={getProductImage(product.id)}
                      alt={product.name[language]}
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                        <Maximize2 className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-3">
                    {t('clickToEnlarge')}
                  </p>
                </div>
              </motion.div>
              
              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <div className="inline-flex items-center space-x-2 bg-secondary px-3 py-1.5 rounded-full text-sm font-medium text-secondary-foreground mb-3">
                    <span>{product.category[language]}</span>
                  </div>
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                    {product.name[language]}
                  </h1>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {product.description[language]}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2.5 rounded-lg">
                    <Package className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">HS Code</div>
                      <div className="font-semibold text-foreground">{product.hsCode}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2.5 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">{t('origin')}</div>
                      <div className="font-semibold text-foreground">{product.origin}</div>
                    </div>
                  </div>
                </div>

                {/* Certifications Badges */}
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-3">
                    {t('certLabel')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-1.5 bg-accent/10 border border-accent/20 text-accent px-3 py-1.5 rounded-full text-xs font-medium"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Min Order Highlight */}
                <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-4">
                  <div className="text-sm text-muted-foreground mb-1">
                    {t('moq')}
                  </div>
                  <div className="text-2xl font-bold text-accent">{product.minOrder}</div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1 h-14 text-base"
                    onClick={handleQuoteRequest}
                  >
                    <FileText className="mr-2 w-5 h-5" />
                    {t('requestQuote')}
                  </Button>
                  <Button
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white flex-1 h-14 text-base"
                    onClick={handleWhatsAppInquiry}
                  >
                    <FaWhatsapp className="mr-2 w-5 h-5" />
                    WhatsApp
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Technical Specs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h2 className="font-heading text-2xl font-bold mb-6 flex items-center">
                      <Package className="mr-3 w-6 h-6 text-primary" />
                      {t('techSpecs')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.specifications[language].map((spec, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="border-l-4 border-primary pl-4 py-2"
                        >
                          <div className="text-sm text-muted-foreground font-medium">{spec.label}</div>
                          <div className="font-semibold text-foreground text-lg mt-1">{spec.value}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Packaging Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-bold mb-4 flex items-center">
                      <Package className="mr-2 w-5 h-5 text-primary" />
                      {t('packagingOptions')}
                    </h3>
                    <ul className="space-y-3">
                      {product.packaging[language].map((pack, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start space-x-2 text-sm"
                        >
                          <span className="text-accent text-lg mt-0.5">•</span>
                          <span className="flex-1">{pack}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary to-navy text-white">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-bold mb-3">
                      {t('needCustom')}
                    </h3>
                    <p className="text-white/90 text-sm mb-4">
                      {t('needCustomDesc')}
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full"
                      onClick={handleWhatsAppInquiry}
                    >
                      {t('contactUs')}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {fallbackRelated.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  {t('relatedProducts')}
                </h2>
                <p className="text-muted-foreground">
                  {t('relatedProductsDesc')}
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {fallbackRelated.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="group cursor-pointer hover:shadow-hover transition-all h-full"
                      onClick={() => {
                        navigate(`/product/${relatedProduct.id}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={getProductImage(relatedProduct.id)}
                          alt={relatedProduct.name[language]}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-sm text-muted-foreground mb-2">
                          {relatedProduct.category[language]}
                        </div>
                        <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                          {relatedProduct.name[language]}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedProduct.description[language]}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Image Modal */}
        <AnimatePresence>
          {imageModalOpen && (
            <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
              <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <button
                    onClick={() => setImageModalOpen(false)}
                    className="absolute -top-12 right-0 bg-white/90 hover:bg-white rounded-full p-2 transition-colors z-50"
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </button>
                  <img
                    src={getProductImage(product.id)}
                    alt={product.name[language]}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-6 rounded-b-lg">
                    <h3 className="text-white font-heading text-2xl font-bold">
                      {product.name[language]}
                    </h3>
                    <p className="text-white/80 mt-1">{product.category[language]}</p>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
