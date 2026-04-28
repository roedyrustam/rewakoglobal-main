import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    contact: 'Contact',
    getQuote: 'Get Quote',
    heroTitle: 'Premium Indonesian Commodities',
    heroSubtitle: 'Connecting Indonesia\'s finest products to global markets with quality assurance and reliable service',
    viewProducts: 'View Products',
    contactUs: 'Contact Us',
    whyChoose: 'Why Choose Us',
    certified: 'Certified Excellence',
    certifiedDesc: 'REWAKO certified by Bank Indonesia and ITPC supported',
    global: 'Global Network',
    globalDesc: 'Established partnerships across 20+ countries',
    quality: 'Quality Assured',
    qualityDesc: 'Strict quality control and international standards',
    logistics: 'Reliable Logistics',
    logisticsDesc: 'On-time delivery with full documentation support',
    ourProducts: 'Our Premium Products',
    productsDesc: 'Discover our curated selection of Indonesia\'s finest export commodities',
    viewDetails: 'View Details',
    statsExperience: 'Years Experience',
    statsProducts: 'Premium Products',
    statsCountries: 'Countries Served',
    statsContainers: 'Containers Shipped',
    testimonialsTitle: 'What Our Clients Say',
    downloadCatalog: 'Download Product Catalog',
    downloadCatalogDesc: 'Get our complete catalog with detailed specifications',
    downloadPDF: 'Download PDF',
    footerAbout: 'PT Nusantara Global Export is a leading Indonesian exporter committed to delivering premium quality commodities to international markets.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Information',
    followUs: 'Follow Us',
    allRights: 'All rights reserved.',
    quoteModalTitle: 'Request a Quote',
    quoteModalDesc: 'Fill in your details and we\'ll get back to you within 24 hours',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourPhone: 'Phone Number (Optional)',
    selectProduct: 'Select Product',
    quantity: 'Estimated Quantity',
    message: 'Additional Message',
    sendRequest: 'Send Request',
    cancel: 'Cancel',
    trustedBy: 'Trusted by companies worldwide',
    certifications: 'Certifications & Memberships'
  },
  id: {
    home: 'Beranda',
    about: 'Tentang',
    products: 'Produk',
    contact: 'Kontak',
    getQuote: 'Minta Penawaran',
    heroTitle: 'Komoditas Premium Indonesia',
    heroSubtitle: 'Menghubungkan produk terbaik Indonesia ke pasar global dengan jaminan kualitas dan layanan terpercaya',
    viewProducts: 'Lihat Produk',
    contactUs: 'Hubungi Kami',
    whyChoose: 'Mengapa Memilih Kami',
    certified: 'Keunggulan Bersertifikat',
    certifiedDesc: 'Bersertifikat REWAKO dari Bank Indonesia dan didukung ITPC',
    global: 'Jaringan Global',
    globalDesc: 'Kemitraan mapan di 20+ negara',
    quality: 'Jaminan Kualitas',
    qualityDesc: 'Kontrol kualitas ketat dan standar internasional',
    logistics: 'Logistik Terpercaya',
    logisticsDesc: 'Pengiriman tepat waktu dengan dukungan dokumentasi lengkap',
    ourProducts: 'Produk Premium Kami',
    productsDesc: 'Temukan pilihan komoditas ekspor terbaik Indonesia',
    viewDetails: 'Lihat Detail',
    statsExperience: 'Tahun Pengalaman',
    statsProducts: 'Produk Premium',
    statsCountries: 'Negara Dilayani',
    statsContainers: 'Kontainer Dikirim',
    testimonialsTitle: 'Kata Klien Kami',
    downloadCatalog: 'Unduh Katalog Produk',
    downloadCatalogDesc: 'Dapatkan katalog lengkap dengan spesifikasi detail',
    downloadPDF: 'Unduh PDF',
    footerAbout: 'PT Nusantara Global Export adalah eksportir Indonesia terkemuka yang berkomitmen menghadirkan komoditas berkualitas premium ke pasar internasional.',
    quickLinks: 'Tautan Cepat',
    contactInfo: 'Informasi Kontak',
    followUs: 'Ikuti Kami',
    allRights: 'Hak cipta dilindungi.',
    quoteModalTitle: 'Minta Penawaran',
    quoteModalDesc: 'Isi detail Anda dan kami akan menghubungi dalam 24 jam',
    yourName: 'Nama Anda',
    yourEmail: 'Email Anda',
    yourPhone: 'Nomor Telepon (Opsional)',
    selectProduct: 'Pilih Produk',
    quantity: 'Perkiraan Kuantitas',
    message: 'Pesan Tambahan',
    sendRequest: 'Kirim Permintaan',
    cancel: 'Batal',
    trustedBy: 'Dipercaya oleh perusahaan di seluruh dunia',
    certifications: 'Sertifikasi & Keanggotaan'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
