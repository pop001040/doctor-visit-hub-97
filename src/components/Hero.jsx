import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            زيارة طبيب
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            خدمات طبية منزلية متكاملة تصل إليك أينما كنت. نوفر خدمات العلاج الطبيعي، التمريض المنزلي، والاستشارات الطبية
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/book"
              className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              احجز الآن
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;