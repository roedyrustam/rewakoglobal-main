import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const SITE = 'https://rewakoglobal.lovable.app';

const content = {
  en: {
    title: 'Terms of Service',
    metaTitle: 'Terms of Service | PT Nusantara Global Export',
    metaDesc: 'Terms of Service for PT Nusantara Global Export. Read the terms governing use of our website and export services.',
    updated: 'Last updated: April 28, 2026',
    back: '← Back to Home',
    sections: [
      { h: '1. Acceptance of Terms', p: 'By accessing and using the website of PT Nusantara Global Export ("Company", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.' },
      { h: '2. Services', p: 'We are an Indonesian exporter of premium commodities including coffee, spices, coconut products, seafood and other agricultural goods. All product listings, prices and specifications are indicative and subject to confirmation in a written sales contract.' },
      { h: '3. Quotes & Orders', p: 'Quotations are valid for 14 days unless stated otherwise. Orders are confirmed only upon mutual signing of a Sales Contract / Proforma Invoice and receipt of agreed deposit.' },
      { h: '4. Quality & Inspection', p: 'Products meet international export standards. Buyers may appoint third-party inspection (SGS, Sucofindo, etc.) at their own cost prior to shipment.' },
      { h: '5. Intellectual Property', p: 'All content on this website, including text, graphics, logos, and images, is the property of PT Nusantara Global Export and protected by applicable copyright laws.' },
      { h: '6. Limitation of Liability', p: 'We are not liable for any indirect, incidental, or consequential damages arising from the use of this website or our services.' },
      { h: '7. Governing Law', p: 'These Terms are governed by the laws of the Republic of Indonesia. Any dispute shall be resolved through the Indonesian National Arbitration Board (BANI).' },
      { h: '8. Contact', p: 'Questions about these Terms? Contact us at info@nusantaraglobal.com.' },
    ],
  },
  id: {
    title: 'Syarat & Ketentuan Layanan',
    metaTitle: 'Syarat & Ketentuan | PT Nusantara Global Export',
    metaDesc: 'Syarat & Ketentuan Layanan PT Nusantara Global Export. Baca ketentuan penggunaan situs web dan layanan ekspor kami.',
    updated: 'Terakhir diperbarui: 28 April 2026',
    back: '← Kembali ke Beranda',
    sections: [
      { h: '1. Penerimaan Ketentuan', p: 'Dengan mengakses dan menggunakan situs web PT Nusantara Global Export ("Perusahaan", "kami"), Anda setuju untuk terikat oleh Syarat & Ketentuan Layanan ini. Jika Anda tidak setuju, mohon untuk tidak menggunakan layanan kami.' },
      { h: '2. Layanan', p: 'Kami adalah eksportir komoditas premium Indonesia termasuk kopi, rempah, produk kelapa, hasil laut, dan produk pertanian lainnya. Semua daftar produk, harga, dan spesifikasi bersifat indikatif dan tunduk pada konfirmasi dalam kontrak jual beli tertulis.' },
      { h: '3. Penawaran & Pemesanan', p: 'Penawaran berlaku selama 14 hari kecuali dinyatakan lain. Pesanan dikonfirmasi hanya setelah penandatanganan bersama Sales Contract / Proforma Invoice dan diterimanya deposit yang disepakati.' },
      { h: '4. Kualitas & Inspeksi', p: 'Produk memenuhi standar ekspor internasional. Pembeli dapat menunjuk inspeksi pihak ketiga (SGS, Sucofindo, dll.) atas biaya sendiri sebelum pengiriman.' },
      { h: '5. Hak Kekayaan Intelektual', p: 'Seluruh konten di situs web ini, termasuk teks, grafik, logo, dan gambar, merupakan milik PT Nusantara Global Export dan dilindungi undang-undang hak cipta yang berlaku.' },
      { h: '6. Pembatasan Tanggung Jawab', p: 'Kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan situs web atau layanan kami.' },
      { h: '7. Hukum yang Berlaku', p: 'Syarat & Ketentuan ini diatur oleh hukum Republik Indonesia. Setiap perselisihan akan diselesaikan melalui Badan Arbitrase Nasional Indonesia (BANI).' },
      { h: '8. Kontak', p: 'Pertanyaan mengenai Syarat & Ketentuan ini? Hubungi kami di info@nusantaraglobal.com.' },
    ],
  },
};

const Terms = () => {
  const { lang } = useParams<{ lang: string }>();
  const { language, setLanguage } = useLanguage();
  const validLang = lang === 'en' || lang === 'id' ? lang : null;

  // Sync URL → context language
  useEffect(() => {
    if (validLang && validLang !== language) setLanguage(validLang);
  }, [validLang, language, setLanguage]);

  // Legacy /terms (no lang segment) → redirect to current locale
  if (!validLang) {
    return <Navigate to={`/${language}/terms`} replace />;
  }

  const c = content[validLang];
  const canonical = `${SITE}/${validLang}/terms`;
  const altEn = `${SITE}/en/terms`;
  const altId = `${SITE}/id/terms`;

  return (
    <>
      <Helmet>
        <html lang={validLang} />
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDesc} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en" href={altEn} />
        <link rel="alternate" hrefLang="id" href={altId} />
        <link rel="alternate" hrefLang="x-default" href={altEn} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.metaDesc} />
        <meta property="og:locale" content={validLang === 'id' ? 'id_ID' : 'en_US'} />
        <meta property="og:locale:alternate" content={validLang === 'id' ? 'en_US' : 'id_ID'} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={c.metaTitle} />
        <meta name="twitter:description" content={c.metaDesc} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 pt-32 pb-16 max-w-4xl">
          <h1 className="font-heading text-4xl font-bold text-navy mb-6">{c.title}</h1>
          <p className="text-muted-foreground mb-8">{c.updated}</p>

          <article className="max-w-none space-y-6 text-foreground">
            {c.sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-heading text-2xl font-semibold mt-6 mb-3">{s.h}</h2>
                <p className="leading-relaxed">{s.p}</p>
              </section>
            ))}

            <p className="pt-6">
              <Link to="/" className="text-accent underline">{c.back}</Link>
            </p>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Terms;
