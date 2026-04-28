export interface Product {
  id: string;
  name: {
    en: string;
    id: string;
  };
  category: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  image: string;
  hsCode: string;
  specifications: {
    en: { label: string; value: string }[];
    id: { label: string; value: string }[];
  };
  packaging: {
    en: string[];
    id: string[];
  };
  certifications: string[];
  minOrder: string;
  origin: string;
}

export const products: Product[] = [
  {
    id: "specialty-coffee",
    name: {
      en: "Premium Specialty Coffee",
      id: "Kopi Spesialti Premium"
    },
    category: {
      en: "Coffee & Beverages",
      id: "Kopi & Minuman"
    },
    description: {
      en: "Single-origin Arabica and Robusta beans from Indonesia's finest highlands. Carefully selected, processed using wet-hull method for distinctive flavor profile.",
      id: "Biji Arabika dan Robusta single-origin dari dataran tinggi terbaik Indonesia. Dipilih dengan cermat, diproses menggunakan metode wet-hull untuk profil rasa yang khas."
    },
    image: "/src/assets/coffee.jpg",
    hsCode: "0901.21",
    specifications: {
      en: [
        { label: "Variety", value: "Arabica, Robusta, Specialty Grade" },
        { label: "Moisture", value: "Max 12.5%" },
        { label: "Defect Rate", value: "<5%" },
        { label: "Bean Size", value: "Screen 16-18" },
        { label: "Processing", value: "Wet-Hull, Washed, Natural" },
        { label: "Altitude", value: "1200-1800 MASL" },
        { label: "Cupping Score", value: "80-88 points" }
      ],
      id: [
        { label: "Varietas", value: "Arabika, Robusta, Grade Spesialti" },
        { label: "Kadar Air", value: "Maks 12.5%" },
        { label: "Tingkat Cacat", value: "<5%" },
        { label: "Ukuran Biji", value: "Screen 16-18" },
        { label: "Pengolahan", value: "Wet-Hull, Washed, Natural" },
        { label: "Ketinggian", value: "1200-1800 MDPL" },
        { label: "Skor Cupping", value: "80-88 poin" }
      ]
    },
    packaging: {
      en: ["60kg Jute Bags", "30kg Vacuum Sealed", "GrainPro Inner Bags"],
      id: ["Karung Goni 60kg", "Vakum 30kg", "Kantong Dalam GrainPro"]
    },
    certifications: ["Rainforest Alliance", "Fair Trade", "SCAA Certified"],
    minOrder: "1 Container (18-20 MT)",
    origin: "Aceh, Sumatra, Java"
  },
  {
    id: "candlenut",
    name: {
      en: "Premium Candlenut (Kemiri)",
      id: "Kemiri Premium"
    },
    category: {
      en: "Nuts & Seeds",
      id: "Kacang & Biji-bijian"
    },
    description: {
      en: "High-quality candlenuts from Indonesian plantations. Rich in oil content, essential for traditional cuisines and cosmetic applications.",
      id: "Kemiri berkualitas tinggi dari perkebunan Indonesia. Kaya kandungan minyak, penting untuk masakan tradisional dan aplikasi kosmetik."
    },
    image: "/src/assets/candlenut.jpg",
    hsCode: "0801.21",
    specifications: {
      en: [
        { label: "Oil Content", value: "60-65%" },
        { label: "Moisture", value: "Max 10%" },
        { label: "Purity", value: "98% min" },
        { label: "Size", value: "16-25mm diameter" },
        { label: "Shelf Life", value: "12 months" }
      ],
      id: [
        { label: "Kandungan Minyak", value: "60-65%" },
        { label: "Kadar Air", value: "Maks 10%" },
        { label: "Kemurnian", value: "Min 98%" },
        { label: "Ukuran", value: "16-25mm diameter" },
        { label: "Masa Simpan", value: "12 bulan" }
      ]
    },
    packaging: {
      en: ["25kg PP Bags", "50kg Jute Sacks", "Vacuum Sealed Options"],
      id: ["Kantong PP 25kg", "Karung Goni 50kg", "Opsi Vakum"]
    },
    certifications: ["HACCP", "ISO 22000", "Organic (Available)"],
    minOrder: "5 MT",
    origin: "Sulawesi, Maluku"
  },
  {
    id: "turmeric",
    name: {
      en: "Organic Turmeric Rhizomes",
      id: "Rimpang Kunyit Organik"
    },
    category: {
      en: "Spices & Herbs",
      id: "Rempah & Herbal"
    },
    description: {
      en: "Fresh and dried turmeric with high curcumin content. Known for its vibrant color and medicinal properties, sourced from organic farms.",
      id: "Kunyit segar dan kering dengan kandungan kurkumin tinggi. Terkenal dengan warna cerah dan khasiat obat, bersumber dari pertanian organik."
    },
    image: "/src/assets/turmeric.jpg",
    hsCode: "0910.30",
    specifications: {
      en: [
        { label: "Curcumin Content", value: "3-5%" },
        { label: "Moisture (dried)", value: "Max 12%" },
        { label: "Form", value: "Whole Rhizomes, Powder" },
        { label: "Color", value: "Deep Orange-Yellow" },
        { label: "Volatile Oil", value: "4-6%" }
      ],
      id: [
        { label: "Kandungan Kurkumin", value: "3-5%" },
        { label: "Kadar Air (kering)", value: "Maks 12%" },
        { label: "Bentuk", value: "Rimpang Utuh, Bubuk" },
        { label: "Warna", value: "Oranye-Kuning Pekat" },
        { label: "Minyak Atsiri", value: "4-6%" }
      ]
    },
    packaging: {
      en: ["10kg Cartons", "25kg PP Bags", "Custom Packaging Available"],
      id: ["Karton 10kg", "Kantong PP 25kg", "Kemasan Custom Tersedia"]
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP"],
    minOrder: "3 MT",
    origin: "Java, Bali"
  },
  {
    id: "palm-oil",
    name: {
      en: "Refined Palm Oil (RBD)",
      id: "Minyak Kelapa Sawit Olahan (RBD)"
    },
    category: {
      en: "Oils & Fats",
      id: "Minyak & Lemak"
    },
    description: {
      en: "High-quality refined, bleached, and deodorized palm oil. Suitable for cooking, food processing, and industrial applications.",
      id: "Minyak kelapa sawit berkualitas tinggi yang dimurnikan, dikelantang, dan dihilangkan baunya. Cocok untuk memasak, pengolahan makanan, dan aplikasi industri."
    },
    image: "/src/assets/palm-oil.jpg",
    hsCode: "1511.10",
    specifications: {
      en: [
        { label: "FFA (as Palmitic)", value: "Max 0.1%" },
        { label: "Moisture & Impurities", value: "Max 0.1%" },
        { label: "Iodine Value", value: "50-55" },
        { label: "Melting Point", value: "33-39°C" },
        { label: "Color", value: "3.0R Max (Lovibond)" }
      ],
      id: [
        { label: "FFA (sebagai Palmitat)", value: "Maks 0.1%" },
        { label: "Kelembaban & Kotoran", value: "Maks 0.1%" },
        { label: "Nilai Iodin", value: "50-55" },
        { label: "Titik Leleh", value: "33-39°C" },
        { label: "Warna", value: "3.0R Maks (Lovibond)" }
      ]
    },
    packaging: {
      en: ["Flexi Tanks", "Bulk Shipment", "IBC Containers (1000L)"],
      id: ["Tangki Fleksi", "Pengiriman Bulk", "Kontainer IBC (1000L)"]
    },
    certifications: ["RSPO Certified", "HALAL", "KOSHER"],
    minOrder: "1 Container (20-22 MT)",
    origin: "Sumatra, Kalimantan"
  },
  {
    id: "cloves",
    name: {
      en: "Dried Clove Buds",
      id: "Cengkeh Kering"
    },
    category: {
      en: "Spices",
      id: "Rempah"
    },
    description: {
      en: "Premium quality dried clove buds with high essential oil content. Hand-picked at optimal maturity for maximum aroma and flavor.",
      id: "Cengkeh kering kualitas premium dengan kandungan minyak esensial tinggi. Dipetik tangan pada kematangan optimal untuk aroma dan rasa maksimal."
    },
    image: "/src/assets/cloves.jpg",
    hsCode: "0907.10",
    specifications: {
      en: [
        { label: "Essential Oil", value: "15-20%" },
        { label: "Moisture", value: "Max 14%" },
        { label: "Admixture", value: "Max 2%" },
        { label: "Volatile Oil", value: "17% min" },
        { label: "Grade", value: "FAQ, Grade A, Select" }
      ],
      id: [
        { label: "Minyak Esensial", value: "15-20%" },
        { label: "Kadar Air", value: "Maks 14%" },
        { label: "Campuran", value: "Maks 2%" },
        { label: "Minyak Atsiri", value: "Min 17%" },
        { label: "Grade", value: "FAQ, Grade A, Pilihan" }
      ]
    },
    packaging: {
      en: ["25kg PP Bags", "50kg Jute Sacks", "Custom Export Packaging"],
      id: ["Kantong PP 25kg", "Karung Goni 50kg", "Kemasan Ekspor Custom"]
    },
    certifications: ["ASTA Compliant", "ISO 22000", "Organic (Available)"],
    minOrder: "5 MT",
    origin: "Maluku, North Sulawesi"
  },
  {
    id: "nutmeg",
    name: {
      en: "Whole Nutmeg & Mace",
      id: "Pala & Fuli Utuh"
    },
    category: {
      en: "Spices",
      id: "Rempah"
    },
    description: {
      en: "Premium nutmeg kernels and mace from Banda Islands. Rich aroma, ideal for culinary and pharmaceutical applications.",
      id: "Biji pala dan fuli premium dari Kepulauan Banda. Aroma kaya, ideal untuk aplikasi kuliner dan farmasi."
    },
    image: "/src/assets/nutmeg.jpg",
    hsCode: "0908.11",
    specifications: {
      en: [
        { label: "Size (Nutmeg)", value: "60-80 pieces/kg" },
        { label: "Essential Oil", value: "8-15%" },
        { label: "Moisture", value: "Max 12%" },
        { label: "Mace Ratio", value: "1:10 (Mace:Nutmeg)" },
        { label: "Quality", value: "ABCD, Sound, FAQ" }
      ],
      id: [
        { label: "Ukuran (Pala)", value: "60-80 butir/kg" },
        { label: "Minyak Esensial", value: "8-15%" },
        { label: "Kadar Air", value: "Maks 12%" },
        { label: "Rasio Fuli", value: "1:10 (Fuli:Pala)" },
        { label: "Kualitas", value: "ABCD, Sound, FAQ" }
      ]
    },
    packaging: {
      en: ["25kg Cartons", "50kg Jute Bags", "Vacuum Sealed"],
      id: ["Karton 25kg", "Karung Goni 50kg", "Vakum"]
    },
    certifications: ["ASTA", "EU Standards", "HACCP"],
    minOrder: "3 MT",
    origin: "Maluku (Banda Islands)"
  },
  {
    id: "tuna",
    name: {
      en: "Frozen Skipjack & Yellowfin Tuna",
      id: "Tuna Cakalang & Sirip Kuning Beku"
    },
    category: {
      en: "Seafood",
      id: "Hasil Laut"
    },
    description: {
      en: "Premium grade frozen tuna, sustainably caught from Indonesian waters. Perfect for sashimi, canning, and premium food processing.",
      id: "Tuna beku grade premium, ditangkap berkelanjutan dari perairan Indonesia. Sempurna untuk sashimi, pengalengan, dan pengolahan makanan premium."
    },
    image: "/src/assets/tuna.jpg",
    hsCode: "0303.43",
    specifications: {
      en: [
        { label: "Species", value: "Skipjack (Katsuwonus pelamis), Yellowfin (Thunnus albacares)" },
        { label: "Size Range", value: "2-20 kg/fish" },
        { label: "Processing", value: "Whole Round, H&G, Loin" },
        { label: "Storage Temp", value: "-18°C to -25°C" },
        { label: "Catch Method", value: "Pole & Line, Purse Seine" }
      ],
      id: [
        { label: "Spesies", value: "Cakalang (Katsuwonus pelamis), Sirip Kuning (Thunnus albacares)" },
        { label: "Ukuran", value: "2-20 kg/ekor" },
        { label: "Pengolahan", value: "Utuh, H&G, Loin" },
        { label: "Suhu Penyimpanan", value: "-18°C hingga -25°C" },
        { label: "Metode Tangkap", value: "Pole & Line, Purse Seine" }
      ]
    },
    packaging: {
      en: ["20kg Master Cartons", "Vacuum Packed", "IQF Available"],
      id: ["Karton Master 20kg", "Vakum", "IQF Tersedia"]
    },
    certifications: ["MSC Certified", "HACCP", "EU Approved", "Dolphin Safe"],
    minOrder: "1 Container (22-25 MT)",
    origin: "Maluku, Papua, Sulawesi Waters"
  },
  {
    id: "coconut-products",
    name: {
      en: "Coconut Products Suite",
      id: "Rangkaian Produk Kelapa"
    },
    category: {
      en: "Coconut Derivatives",
      id: "Turunan Kelapa"
    },
    description: {
      en: "Comprehensive coconut products including virgin coconut oil, desiccated coconut, coconut sugar, and coconut flour.",
      id: "Produk kelapa komprehensif termasuk minyak kelapa murni, kelapa parut kering, gula kelapa, dan tepung kelapa."
    },
    image: "/src/assets/coconut.jpg",
    hsCode: "1513.11 / 0801.11",
    specifications: {
      en: [
        { label: "VCO - FFA", value: "Max 0.2%" },
        { label: "Desiccated - Fat", value: "65-70%" },
        { label: "Sugar - Moisture", value: "Max 3%" },
        { label: "Flour - Protein", value: "18-20%" },
        { label: "All Products", value: "Non-GMO, Gluten-Free" }
      ],
      id: [
        { label: "VCO - FFA", value: "Maks 0.2%" },
        { label: "Kelapa Parut - Lemak", value: "65-70%" },
        { label: "Gula - Kadar Air", value: "Maks 3%" },
        { label: "Tepung - Protein", value: "18-20%" },
        { label: "Semua Produk", value: "Non-GMO, Bebas Gluten" }
      ]
    },
    packaging: {
      en: ["VCO: Drums/Jerry Cans", "DC: 25kg Bags", "Sugar: 25kg Bags", "Flour: 20kg Bags"],
      id: ["VCO: Drum/Jerigen", "DC: Kantong 25kg", "Gula: Kantong 25kg", "Tepung: Kantong 20kg"]
    },
    certifications: ["USDA Organic", "HALAL", "KOSHER", "Fair Trade"],
    minOrder: "5 MT (per product)",
    origin: "Sumatra, Java, Sulawesi"
  },
  {
    id: "cocoa",
    name: {
      en: "Premium Cocoa Beans",
      id: "Biji Kakao Premium"
    },
    category: {
      en: "Cocoa & Chocolate",
      id: "Kakao & Cokelat"
    },
    description: {
      en: "Fine flavor fermented cocoa beans from Sulawesi. Recognized internationally for chocolate manufacturing and premium confectionery.",
      id: "Biji kakao fermentasi rasa halus dari Sulawesi. Diakui internasional untuk pembuatan cokelat dan konfeksi premium."
    },
    image: "/src/assets/cocoa.jpg",
    hsCode: "1801.00",
    specifications: {
      en: [
        { label: "Bean Count", value: "90-110 beans/100g" },
        { label: "Moisture", value: "Max 7.5%" },
        { label: "Fermentation", value: "Well Fermented 80% min" },
        { label: "Defects", value: "Max 3%" },
        { label: "Fat Content", value: "50-55%" }
      ],
      id: [
        { label: "Jumlah Biji", value: "90-110 biji/100g" },
        { label: "Kadar Air", value: "Maks 7.5%" },
        { label: "Fermentasi", value: "Fermentasi Baik Min 80%" },
        { label: "Cacat", value: "Maks 3%" },
        { label: "Kandungan Lemak", value: "50-55%" }
      ]
    },
    packaging: {
      en: ["60-65kg Jute Bags", "GrainPro Inner Bags", "Container Lined"],
      id: ["Karung Goni 60-65kg", "Kantong Dalam GrainPro", "Kontainer Beralas"]
    },
    certifications: ["Rainforest Alliance", "UTZ", "Organic (Available)"],
    minOrder: "1 Container (18-20 MT)",
    origin: "Sulawesi, Sumatra"
  },
  {
    id: "rubber",
    name: {
      en: "Natural Rubber (RSS & SIR)",
      id: "Karet Alam (RSS & SIR)"
    },
    category: {
      en: "Industrial Raw Materials",
      id: "Bahan Baku Industri"
    },
    description: {
      en: "High-quality natural rubber in various grades: Ribbed Smoked Sheet (RSS) and Standard Indonesian Rubber (SIR) for tire and industrial applications.",
      id: "Karet alam berkualitas tinggi dalam berbagai grade: Ribbed Smoked Sheet (RSS) dan Standard Indonesian Rubber (SIR) untuk ban dan aplikasi industri."
    },
    image: "/src/assets/rubber.jpg",
    hsCode: "4001.21",
    specifications: {
      en: [
        { label: "Grade", value: "RSS 1-5, SIR 10, SIR 20" },
        { label: "Dirt Content", value: "0.03-0.16% (grade dependent)" },
        { label: "Volatile Matter", value: "Max 0.8%" },
        { label: "Nitrogen Content", value: "Max 0.6%" },
        { label: "Ash Content", value: "Max 0.75%" }
      ],
      id: [
        { label: "Grade", value: "RSS 1-5, SIR 10, SIR 20" },
        { label: "Kandungan Kotoran", value: "0.03-0.16% (tergantung grade)" },
        { label: "Zat Menguap", value: "Maks 0.8%" },
        { label: "Kandungan Nitrogen", value: "Maks 0.6%" },
        { label: "Kandungan Abu", value: "Maks 0.75%" }
      ]
    },
    packaging: {
      en: ["33.33kg Bales (per sheet)", "1.11 MT Pallets", "Container Load"],
      id: ["Bal 33.33kg (per lembaran)", "Palet 1.11 MT", "Muatan Kontainer"]
    },
    certifications: ["ISO 2000 Standard", "SGS Inspected", "Green Rubber Initiative"],
    minOrder: "1 Container (20 MT)",
    origin: "Sumatra, Kalimantan, Java"
  },
  {
    id: "cinnamon-vanilla",
    name: {
      en: "Cinnamon Cassia & Vanilla Beans",
      id: "Kayu Manis Cassia & Biji Vanili"
    },
    category: {
      en: "Premium Spices",
      id: "Rempah Premium"
    },
    description: {
      en: "Aromatic cinnamon cassia sticks and premium vanilla beans. Essential for fine bakery, confectionery, and perfume industries.",
      id: "Batang kayu manis cassia aromatik dan biji vanili premium. Penting untuk industri roti, konfeksi, dan parfum berkualitas."
    },
    image: "/src/assets/cinnamon-vanilla.jpg",
    hsCode: "0906.11 / 0905.00",
    specifications: {
      en: [
        { label: "Cinnamon Oil Content", value: "2-4%" },
        { label: "Vanilla - Vanillin", value: "1.8-2.5%" },
        { label: "Cinnamon Moisture", value: "Max 14%" },
        { label: "Vanilla Length", value: "14-20 cm" },
        { label: "Grade", value: "A, B (Vanilla), AA-C (Cinnamon)" }
      ],
      id: [
        { label: "Kandungan Minyak Kayu Manis", value: "2-4%" },
        { label: "Vanili - Vanilin", value: "1.8-2.5%" },
        { label: "Kadar Air Kayu Manis", value: "Maks 14%" },
        { label: "Panjang Vanili", value: "14-20 cm" },
        { label: "Grade", value: "A, B (Vanili), AA-C (Kayu Manis)" }
      ]
    },
    packaging: {
      en: ["Cinnamon: 25kg Cartons", "Vanilla: Individual Vacuum Tubes", "Custom Packaging Available"],
      id: ["Kayu Manis: Karton 25kg", "Vanili: Tabung Vakum Individual", "Kemasan Custom Tersedia"]
    },
    certifications: ["ISO 22000", "Organic (Vanilla Available)", "EU Standards"],
    minOrder: "Cinnamon: 3 MT, Vanilla: 100 kg",
    origin: "Sumatra, Java (Cinnamon), Sulawesi, Papua (Vanilla)"
  }
];
