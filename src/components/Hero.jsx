import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";

const Hero = () => {
  return (
    <ParallaxSection className="relative bg-gradient-to-b from-primary/10 to-white min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-right">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              زيارة طبيب
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
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
              className="space-x-4 space-x-reverse"
            >
              <a
                href="/book"
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
              >
                احجز الآن
              </a>
              <a
                href="https://wa.me/01113939319"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors inline-block"
              >
                تواصل عبر واتساب
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Doctor consultation"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default Hero;