import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <ParallaxSection className="relative bg-gradient-to-b from-cyan-50 to-white min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            زيارة طبيب منزلية
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            خدمات طبية متكاملة تصل إليك أينما كنت
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 text-lg px-8"
            >
              احجز الآن
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
        >
          <div>
            <h3 className="text-4xl font-bold text-primary mb-2">75+</h3>
            <p className="text-gray-600">طبيب متخصص</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary mb-2">80,000+</h3>
            <p className="text-gray-600">مريض</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary mb-2">2,000+</h3>
            <p className="text-gray-600">زيارة منزلية</p>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  );
};

export default Hero;