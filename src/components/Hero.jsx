import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.img
            src="/logo.svg"
            alt="Doktor Care"
            className="w-48 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            خدمة جلسات العلاج الطبيعي بالمنزل
          </motion.h1>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white gap-2"
              onClick={() => window.location.href = "tel:01113939319"}
            >
              <Phone className="w-5 h-5" />
              اتصل الآن
            </Button>
            
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
              onClick={() => window.open("https://wa.me/01113939319", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;