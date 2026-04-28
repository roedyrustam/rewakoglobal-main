import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const SITE = 'https://www.rewakoglobal.com';

const content = {
  en: {
    title: 'Privacy Policy',
    metaTitle: 'Privacy Policy | PT Nusantara Global Export',
    metaDesc: 'Privacy Policy for PT Nusantara Global Export. Learn how we collect, use, and protect your personal information.',
    updated: 'Last updated: April 28, 2026',
    back: '← Back to Home',
    sections: [
      { h: '1. Information We Collect', body: 'When you request a quote or contact us, we may collect: name, email address, phone number, company name, country, and details about your inquiry.' },
      {
        h: '2. How We Use Your Information',
        list: [
          'To respond to quote requests and inquiries',
          'To process and fulfill export orders',
          'To send relevant product updates (with your consent)',
          'To comply with legal and regulatory obligations',
        ],
      },
      { h: '3. Sharing of Information', body: 'We do not sell your personal data. We may share information with logistics partners, freight forwarders, banks, and government authorities strictly as required to fulfill export transactions.' },
      { h: '4. Cookies', body: 'Our website uses essential cookies for functionality and analytics cookies to understand traffic. You can disable cookies through your browser settings.' },
      { h: '5. Data Security', body: 'We implement reasonable technical and organizational measures to protect personal information against unauthorized access, loss, or misuse.' },
      { h: '6. Your Rights', body: 'You have the right to access, correct, or request deletion of your personal data. Contact us to exercise these rights.' },
      { h: '7. Contact', body: 'For privacy concerns, contact info@nusantaraglobal.com.' },
    ],
  },
  id: {
    title: 'Kebijakan Privasi',
    metaTitle: 'Kebijakan Privasi | PT Nusantara Global Export',
    metaDesc: 'Kebijakan Privasi PT Nusantara Global Export. Pelajari cara kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.',
    updated: 'Terakhir diperbarui: 28 April 2026',
    back: '← Kembali ke Beranda',
    sections: [
      { h: '1. Informasi yang Kami Kumpulkan', body: 'Ketika Anda meminta penawaran atau menghubungi kami, kami dapat mengumpulkan: nama, alamat email, nomor telepon, nama perusahaan, negara, dan detail mengenai pertanyaan Anda.' },
      {
        h: '2. Bagaimana Kami Menggunakan Informasi Anda',
        list: [
          'Untuk menanggapi permintaan penawaran dan pertanyaan',
          'Untuk memproses dan memenuhi pesanan ekspor',
          'Untuk mengirim informasi produk yang relevan (dengan persetujuan Anda)',
          'Untuk mematuhi kewajiban hukum dan regulasi',
        ],
      },
      { h: '3. Berbagi Informasi', body: 'Kami tidak menjual data pribadi Anda. Kami dapat membagikan informasi kepada mitra logistik, freight forwarder, bank, dan otoritas pemerintah secara terbatas sesuai kebutuhan untuk memenuhi transaksi ekspor.' },
      { h: '4. Cookies', body: 'Situs web kami menggunakan cookies esensial untuk fungsionalitas dan cookies analitik untuk memahami lalu lintas. Anda dapat menonaktifkan cookies melalui pengaturan browser Anda.' },
      { h: '5. Keamanan Data', body: 'Kami menerapkan langkah-langkah teknis dan organisasi yang wajar untuk melindungi informasi pribadi dari akses tidak sah, kehilangan, atau penyalahgunaan.' },
      { h: '6. Hak Anda', body: 'Anda berhak mengakses, mengoreksi, atau meminta penghapusan data pribadi Anda. Hubungi kami untuk menggunakan hak ini.' },
      { h: '7. Kontak', body: 'Untuk masalah privasi, hubungi info@nusantaraglobal.com.' },
    ],
  },
};

const Privacy = () => {
  const { lang } = useParams<{ lang: string }>();
  const { language, setLanguage } = useLanguage();
  const validLang = lang === 'en' || lang === 'id' ? lang : null;

  useEffect(() => {
    if (validLang && validLang !== language) setLanguage(validLang);
  }, [validLang, language, setLanguage]);

  if (!validLang) {
    return <Navigate to={`/${language}/privacy`} replace />;
  }

  const c = content[validLang];
  const canonical = `${SITE}/${validLang}/privacy`;
  const altEn = `${SITE}/en/privacy`;
  const altId = `${SITE}/id/privacy`;

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
                {s.list ? (
                  <ul className="list-disc pl-6 space-y-2">
                    {s.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                ) : (
                  <p className="leading-relaxed">{s.body}</p>
                )}
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

export default Privacy;
