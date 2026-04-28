import { useLanguage } from '@/contexts/LanguageContext';
import { products } from '@/data/products';
import { getProductImage } from '@/data/productImages';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Products = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('ourProducts')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('productsDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 h-full cursor-pointer">
                <div 
                  className="relative h-56 overflow-hidden"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <img
                    src={getProductImage(product.id)}
                    alt={product.name[language]}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {product.hsCode}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {product.category[language]}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {product.name[language]}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description[language]}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.certifications.slice(0, 2).map((cert) => (
                      <span
                        key={cert}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {t('viewDetails')}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
