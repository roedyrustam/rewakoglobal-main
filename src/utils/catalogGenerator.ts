import { jsPDF } from 'jspdf';
import { products } from '@/data/products';
import { getProductImage } from '@/data/productImages';

// Helper to convert image to base64
const getImageDataUrl = async (imagePath: string): Promise<string> => {
  try {
    const response = await fetch(imagePath);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error loading image:', error);
    return '';
  }
};

export const generateCatalogPDF = async (language: 'en' | 'id') => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;

  // Cover Page
  doc.setFillColor(23, 37, 84); // Navy color
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.text('PT Nusantara Global Export', pageWidth / 2, 80, { align: 'center' });
  
  doc.setFontSize(20);
  doc.setFont('helvetica', 'normal');
  doc.text(language === 'en' ? 'Product Catalog' : 'Katalog Produk', pageWidth / 2, 100, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text(language === 'en' ? 'Premium Indonesian Commodities' : 'Komoditas Premium Indonesia', pageWidth / 2, 120, { align: 'center' });
  
  // Company Info
  doc.setFontSize(10);
  yPosition = 150;
  doc.text('WhatsApp: +62 812 4100 3047', pageWidth / 2, yPosition, { align: 'center' });
  doc.text('Email: info@nusantaraglobal.com', pageWidth / 2, yPosition + 10, { align: 'center' });
  
  // Certifications
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('🏆 Bank Indonesia REWAKO Certified', pageWidth / 2, yPosition + 30, { align: 'center' });
  doc.text('🌏 ITPC Supported', pageWidth / 2, yPosition + 40, { align: 'center' });

  // Product Pages
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    doc.addPage();
    yPosition = 20;
    
    // Try to load and add product image
    try {
      const imageData = await getImageDataUrl(getProductImage(product.id));
      if (imageData) {
        doc.addImage(imageData, 'JPEG', 20, yPosition, 60, 60);
      }
    } catch (error) {
      console.error(`Failed to load image for ${product.name[language]}`, error);
    }
    
    // Product Title (next to image or below if image fails)
    doc.setTextColor(23, 37, 84);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(product.name[language], 90, yPosition + 10);
    
    // Category
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(product.category[language], 90, yPosition + 20);
    
    // Move down after image
    yPosition += 70;
    
    // Description
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    const descLines = doc.splitTextToSize(product.description[language], pageWidth - 40);
    doc.text(descLines, 20, yPosition);
    yPosition += descLines.length * 5 + 5;
    
    // HS Code & Origin
    yPosition += 5;
    doc.setFont('helvetica', 'bold');
    doc.text(`HS Code: ${product.hsCode} | ${language === 'en' ? 'Origin' : 'Asal'}: ${product.origin}`, 20, yPosition);
    
    // Specifications
    yPosition += 10;
    doc.setFontSize(12);
    doc.setTextColor(23, 37, 84);
    doc.text(language === 'en' ? 'Specifications' : 'Spesifikasi', 20, yPosition);
    
    yPosition += 7;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    
    product.specifications[language].forEach((spec) => {
      if (yPosition > pageHeight - 40) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(`• ${spec.label}: ${spec.value}`, 25, yPosition);
      yPosition += 5;
    });
    
    // Packaging
    yPosition += 5;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(23, 37, 84);
    doc.text(language === 'en' ? 'Packaging' : 'Kemasan', 20, yPosition);
    
    yPosition += 7;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    product.packaging[language].forEach((pack) => {
      if (yPosition > pageHeight - 30) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(`• ${pack}`, 25, yPosition);
      yPosition += 5;
    });
    
    // Certifications
    yPosition += 5;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(23, 37, 84);
    doc.text(language === 'en' ? 'Certifications' : 'Sertifikasi', 20, yPosition);
    
    yPosition += 7;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    const certText = product.certifications.join(' • ');
    const certLines = doc.splitTextToSize(certText, pageWidth - 50);
    doc.text(certLines, 25, yPosition);
    yPosition += certLines.length * 5;
    
    // Min Order
    yPosition += 10;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(237, 174, 23); // Gold color
    doc.text(`${language === 'en' ? 'Minimum Order' : 'Pesanan Minimum'}: ${product.minOrder}`, 20, yPosition);
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.setFont('helvetica', 'normal');
    doc.text(`Page ${index + 2} | PT Nusantara Global Export`, pageWidth / 2, pageHeight - 10, { align: 'center' });
  }

  // Save PDF
  doc.save(`Nusantara_Global_Catalog_${language.toUpperCase()}.pdf`);
};
