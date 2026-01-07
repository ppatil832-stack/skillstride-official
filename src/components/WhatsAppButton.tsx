import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '919823749002';
  const message = encodeURIComponent(
    'Hello! I am interested in learning more about the computer courses offered at Saurabh Computers.'
  );

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
        
        {/* Button */}
        <motion.div
          className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{
            boxShadow: '0 10px 40px -10px rgba(34, 197, 94, 0.6)',
          }}
        >
          <MessageCircle className="w-7 h-7 text-white" fill="white" />
        </motion.div>

        {/* Tooltip */}
        <motion.div
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          initial={{ x: 10 }}
          whileHover={{ x: 0 }}
        >
          Chat with us
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-foreground" />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
