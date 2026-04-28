import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();

  const navLinks = [
    { to: '/', label: t('home'), isHash: false },
    { to: '/about', label: t('about'), isHash: false },
    { to: '/#products', label: t('products'), isHash: true },
    { to: '/contact', label: t('contact'), isHash: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="REWAKO Ekspor Sulawesi Selatan" 
              className="h-12 w-auto"
            />
            <div className="hidden lg:block">
              <div className="font-heading font-bold text-lg leading-tight">
                PT Nusantara Global
              </div>
              <div className="text-xs text-muted-foreground">
                REWAKO Ekspor
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => 
              link.isHash ? (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className="hidden sm:flex items-center space-x-2"
              aria-label={language === 'en' ? 'Switch to Bahasa Indonesia' : 'Switch to English'}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{language}</span>
            </Button>

            {/* Get Quote Button */}
            <Button
              className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={openQuoteModal}
            >
              {t('getQuote')}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => 
                link.isHash ? (
                  <a
                    key={link.to}
                    href={link.to}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-border space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    setLanguage(language === 'en' ? 'id' : 'en');
                    setIsOpen(false);
                  }}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Bahasa Indonesia' : 'English'}
                </Button>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => {
                    setIsOpen(false);
                    openQuoteModal();
                  }}
                >
                  {t('getQuote')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
