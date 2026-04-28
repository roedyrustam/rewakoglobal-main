import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer = () => {
  const { language, t } = useLanguage();

  const quickLinks = [
    { to: '/', label: t('home'), isHash: false },
    { to: '/about', label: t('about'), isHash: false },
    { to: '/#products', label: t('products'), isHash: true },
    { to: '/contact', label: t('contact'), isHash: false },
  ];

  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/6281241003047', label: 'WhatsApp' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="REWAKO Ekspor Sulawesi Selatan" 
                className="h-16 w-auto"
              />
            </div>
            <div className="mb-4">
              <div className="font-heading font-bold text-xl mb-2">PT Nusantara Global Export</div>
              <div className="text-accent text-sm font-semibold mb-2">REWAKO Ekspor Sulawesi Selatan</div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t('footerAbout')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  {link.isHash ? (
                    <a
                      href={link.to}
                      className="text-white/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-white/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{t('contactInfo')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <FaWhatsapp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/6281241003047" className="text-white/70 hover:text-accent transition-colors">
                  +62 812 4100 3047
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FaEnvelope className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:info@nusantaraglobal.com" className="text-white/70 hover:text-accent transition-colors">
                  info@nusantaraglobal.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{t('certifications')}</h3>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <span className="text-accent" role="img" aria-label="Trophy">🏆</span>
                <span>Bank Indonesia REWAKO</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent" role="img" aria-label="Globe">🌏</span>
                <span>ITPC Supported</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent" role="img" aria-label="Checkmark">✓</span>
                <span>ISO 22000 Certified</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3">{t('followUs')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            <Link to={`/${language}/terms`} className="hover:text-accent transition-colors">
              {language === 'id' ? 'Syarat & Ketentuan' : 'Terms of Service'}
            </Link>
            <Link to={`/${language}/privacy`} className="hover:text-accent transition-colors">
              {language === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}
            </Link>
            <a href="/sitemap.xml" className="hover:text-accent transition-colors">Sitemap</a>
          </div>
          <p>© {new Date().getFullYear()} PT Nusantara Global Export. {t('allRights')}</p>
        </div>
      </div>
    </footer>
  );
};
