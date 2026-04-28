import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '6281241003047'; // +62 812 4100 3047

export const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your products.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <FaWhatsapp className="w-8 h-8" />
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5 }}
      />
    </motion.button>
  );
};
